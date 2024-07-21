"use server";

import prisma from "@/lib/db";
import {revalidatePath} from "next/cache";
import exp from "node:constants";
import {redirect} from "next/navigation";

export async function CreatPost(formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await prisma.post.create({
        data: {
            title :formData.get("title") as string,
            slug : (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase() ,
            content : formData.get("content") as string,

        },
    });
    revalidatePath("/posts") /// to automataiclly refresh the path
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
                .replace(/\s+/g, "-")
                .toLowerCase() ,
            published : formData.get("published") == "on",
    }
    }
    );redirect("/posts")
}