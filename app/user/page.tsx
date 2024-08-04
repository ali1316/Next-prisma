import Link from "next/link";
import prisma from "@/lib/db";
import {CreatPost} from "@/app/components/actions";
// import Delete from "@/app/components/delete";
// import Formmm from "@/app/components/formmm";

export default async function Users(){
    const user = await prisma.user.findMany({
        include:{
            posts : true
        }
    });
    const users_count =prisma.user.count()
    console.log(user)
    // user.forEach((user) => {
    //     console.log(`User : ${user.name}, Email:${ user.email} `);
    //     console.log('Article:');
    // const user_article = user.posts.forEach((post) => {
    //     console.log(`-title: ${post.title}, Body: ${post.body}`);
    // });
    // console.log(user_article)
    //     console.log('\n ')
    // })
    return(
        <>
            <main className="container mx-auto pt-24 text-center gap-5 flex flex-col bg-grey-300">
                <h1 className="text-3xl font-semibold"> all users {users_count}</h1>
                <ul className="border-t border-b border-black/10 py-5 leading-8 justify-between ">
                    {/*<div className="flex justify-between p-2">*/}
                    {/*    <div className="flex items-center flex-wrap">title</div>*/}
                    {/*    <div className="flex items-center flex-wrap">Action</div>*/}
                    {/*</div>*/}
                    {user.map((user) => (
                        <>
                            <li key={user.id} className="flex items-cener justify-between p-2 ">
                                {/*<Link href={`/posts/${post.slug}`}>]*/}
                                <div className="m-2">{user.username}</div>
                                <div className="m-2">{user.email}</div>
                                    {user.posts.map((post) => (
                                   <div key={post.id}>
                                       {post.title}
                                       {post.content}
                                   </div>
                                        ))}

                                {/*</Link>*/}
                                {/*    <Delete id={post.id}/>*/}

                            </li>


                        </>

                    ))}
                </ul>
                {/*<Formmm/>*/}

            </main>
        </>
    )
}