"use server";
import { verify } from "@node-rs/argon2";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { hash } from "@node-rs/argon2";

import prisma from "@/lib/db";
import {revalidatePath} from "next/cache";
import exp from "node:constants";

import { redirect } from "next/navigation";
import db from "@/lib/db";
import {validateRequest} from "@/lib/validate-req";

export async function CreatPost(formData: FormData) {
    // try {
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
// }
        // catch (e) {
    //     console.log(e);
    //     throw new Error(`Error creating post: ${e?.message}`);
    // }
    revalidatePath("/posts");
}

export async function Delete_post(formData: FormData){
    const id = formData.get("id") as string;
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
// export async function CreatUser(formData: FormData){
//     // await new Promise((resolve) => setTimeout(resolve, 2000));
//     await prisma.user.create({
//         data: {
//             userName : formData.get("username") as string,
//             email : formData.get("email") as string,
//             password: formData.get("password") as string,
//
//         },
//     });
//     revalidatePath("/posts") /// to automataiclly refresh the path
//     redirect("/posts")
// }
///////signup validation ////////////////////////////////
export async function signup(formData: FormData) {


    const username = formData.get("username") as string;  // Ensure this is string, not String
    const email = formData.get("email") as string;
    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Username is invalid",
        }
        console.log("user name invalid")
    }
    const password = formData.get("password") as string;  // Ensure this is string, not String
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        console.log("Password must be at least 6 characters long");
    }

    const password_hash = await hash(password, {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    });

    // Check if username is already used
    const existingUser = await db.user.findUnique({
        where: { username: username.toLowerCase() }
    });
    if (existingUser) {
        return {
            error: "Username already taken"
        };
    }

    // Create new user
    const user = await db.user.create({
        data: {
            username: username.toLowerCase(),
            password_hash: password_hash,
            email : email

        }
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/posts");

}

//////////////// login /////////////////////////
export async function login( formData: FormData){

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

    // Check if the user exists
    const existingUser = await db.user.findUnique({
        where: { username: username.toLowerCase() }
    });
    if (!existingUser) {
        return {
            error: "Incorrect username or password"
        };
    }

    // Verify the password
    const validPassword = await verify(existingUser.password_hash, password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    });
    if (!validPassword) {
        return {
            error : "errorrr"
        };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/posts");
}
///////////// LogOut////////////////////////
export async function logout(){

    const { session } = await validateRequest();
    if (!session) {
        return {
            error: "Unauthorized"
        };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
}