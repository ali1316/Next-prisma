import Link from "next/link";
import prisma from "@/lib/db";
import {CreatPost, logout} from "@/app/components/actions";
import Delete from "@/app/components/delete";
import Formmm from "@/app/components/formmm";
import {validateRequest} from "@/lib/validate-req";

export default async function posts(){
    const posts = await prisma.post.findMany();
    const posts_count =prisma.post.count()

    const {user} = await validateRequest();
    return(
      <>
          {user &&
              <form action={logout}>
                  <button>logout</button>
              </form>}
          {!user && <Link href="/login">login</Link>}
          {!user && <Link href="/signup">signUP</Link>}
          <p>{user.username}</p>
          <main className="container mx-auto pt-24 text-center gap-5 flex flex-col bg-grey-300">
              <h1 className="text-3xl font-semibold"> all posts {posts_count}</h1>
              <ul className="border-t border-b border-black/10 py-5 leading-8 justify-between ">
                  <div className="flex justify-between p-2">
                      <div className="flex items-center flex-wrap">title</div>
                      <div className="flex items-center flex-wrap">Action</div>
                  </div>
                  {posts.map((post) => (
                      <>
                          <li key={post.id} className="flex items-cener justify-between p-2 ">
                              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                              <Delete id={post.id}/>

                          </li>



                      </>

                  ))}
              </ul>
              <Formmm/>

          </main>
      </>
  )
}