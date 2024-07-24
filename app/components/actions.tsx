"use server";

import prisma from "@/lib/db";
import {revalidatePath} from "next/cache";
import exp from "node:constants";
// import { Lucia } from "lucia";
// import {cookies} from "next/headers";
// // import { verify } from "@node-rs/argon2";
// import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
// import {adapter} from "next/dist/server/web/adapter";
// export as const lucia = new Lucia(adapter, {
//     sessionCookie: {
//         expires: false,
//         attributes: {
//             secure: process.env.NODE_ENV === "production"
//         }
//     },
//     getUserAttributes: (attributes) => {
//         return {
//             // attributes has the type of DatabaseUserAttributes
//             username: attributes.username
//         };
//     }
// });
//
// declare module "lucia" {
//     interface Register {
//         Lucia: typeof lucia;
//         DatabaseUserAttributes: DatabaseUserAttributes;
//     }
// }
//
// interface DatabaseUserAttributes {
//     username: string;
// }
export async function CreatPost(formData: FormData) {
    try {
        await prisma.post.create({
            data: {
                title: formData.get("title") as string,
                slug: (formData.get("title") as string)
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                content: formData.get("content") as string,
                userId: formData.get("userId") as string,
            },
        });
    } catch (e) {
        console.log(e);
        throw new Error(`Error creating post: ${e.message}`);
    }
    revalidatePath("/posts");
}

export async function Delete_post(formData: FormData){
    const id = formData.get("id");
    await prisma.post.delete({
        where : {id}
    })
    revalidatePath("/posts")
}

export async function editPost(formData: FormData){
    await prisma.post.update({
        where:{
            id: formData.get("id") as string,
        },
        data : {
            title :formData.get("title") as string,
            content : formData.get("content") as string,
            slug : (formData.get("title") as string)
                .replace(/\s+/g, '-')
                .toLowerCase() ,
            published : formData.get("published") == "on",
            // userId : formData.get("id") as string,
            // User : formData.get("User") as string,
    }
    }
    );redirect("/posts")
}
export async function CreatUser(formData: FormData){
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    await prisma.user.create({
        data: {
            userName : formData.get("username") as string,
            email : formData.get("email") as string,
            password: formData.get("password") as string,

        },
    });
    revalidatePath("/posts") /// to automataiclly refresh the path
    redirect("/posts")
}
///////signup validatio
async function Signup(_: any, formData: FormData): Promise<ActionResult> {
    "use server";
    const username = formData.get("username");
    // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
    // keep in mind some database (e.g. mysql) are case insensitive
    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Invalid username"
        };
    }
    const password = formData.get("password");
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return {
            error: "Invalid password"
        };
    }

    const passwordHash = await hash(password, {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    });
    const userId = generateIdFromEntropySize(10); // 16 characters long

    // TODO: check if username is already used
    await db.table("user").insert({
        id: userId,
        username: username,
        password_hash: passwordHash
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
}
//////////////// login
async function Login(_: any, formData: FormData): Promise<ActionResult> {
    "use server";
    const username = formData.get("username");
    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Invalid username"
        };
    }
    const password = formData.get("password");
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return {
            error: "Invalid password"
        };
    }

    const existingUser = await db
        .table("user")
        .where("username", "=", username.toLowerCase())
        .get();
    if (!existingUser) {
        // NOTE:
        // Returning immediately allows malicious actors to figure out valid usernames from response times,
        // allowing them to only focus on guessing passwords in brute-force attacks.
        // As a preventive measure, you may want to hash passwords even for invalid usernames.
        // However, valid usernames can be already be revealed with the signup page among other methods.
        // It will also be much more resource intensive.
        // Since protecting against this is non-trivial,
        // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
        // If usernames are public, you may outright tell the user that the username is invalid.
        return {
            error: "Incorrect username or password"
        };
    }

    const validPassword = await verify(existingUser.password_hash, password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    });
    if (!validPassword) {
        return {
            error: "Incorrect username or password"
        };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
}
