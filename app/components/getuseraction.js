"use server";
import {validateRequest} from "../../lib/validate-req";

import prisma from "@/lib/db";

export async function getUsers() {
    const {user} = await validateRequest();
    try {
        const users = await prisma.user.findUnique({
            where : {
                username: user.username,
            }
        });
        console.log("get user ",users);
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
    }
}