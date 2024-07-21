import Link from "next/link";
import prisma from "@/lib/db";
import {EditForm} from "@/app/components/editform";

export default async function postPage({params}){
    const post = await prisma.Post.findUnique({
        where : {
            slug: params.slug,
        },
    });

    return(
        <>
            <main className="container mx-auto pt-24 text-center gap-5 flex flex-col">
                <h1 className="text-3xl font-semibold">{post?.title}</h1>
                <p>{post?.content}</p>
                <h1 className="text-lg m-auto">Edit form </h1>
                <div className="flex items-center container content-center gap-5">

                    <EditForm post={post}/>
                </div>
                <button className="text-lg bg-blue-800 rounded size-fit p-2 content-center items-center mx-auto"><Link
                    href="/posts">Back</Link></button>
            </main>
        </>
    )
}