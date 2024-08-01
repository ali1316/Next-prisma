import Link from "next/link";
import prisma from "@/lib/db";
import {CreatPost, logout} from "@/app/components/actions";
import Delete from "@/app/components/delete";
import Formmm from "@/app/components/formmm";
import '@radix-ui/themes/styles.css';

import {validateRequest} from "@/lib/validate-req";
import {Theme, Table, Flex, ThemePanel, Box,Container, DecorativeBox} from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

export default async function posts(){
    const posts = await prisma.post.findMany();
    const posts_count =prisma.post.count()

    return (
        <>

            <Box >

                <div className="mx-auto container">

                {/*<main*/}
                {/*    className="container mx-auto pt-24 text-center gap-5 flex flex-col bg-blue-300 mt-10 content-center gap-5">*/}
                    {/*{user &&*/}
                    {/*    <form action={logout}>*/}
                    {/*        <button>logout</button>*/}
                    {/*    </form>}*/}
                    {/*{!user && <Link href="/login">login</Link>}*/}
                    {/*{!user && <Link href="/signup">signUP</Link>}*/}

                    <div className="mx-auto mt-16 w-[500px] ">
                        <h1 className="text-3xl font-semibold pb-12"> all posts {posts_count}</h1>

                        <Table.Root layout="auto" size="3" className="p-5 space-between" variant="surface">
                            <Table.Header>
                                <Table.Row gap="9" alignItems="center" justify="space-between">
                                    <Table.ColumnHeaderCell px="9">Title</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell px="9">Action</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {posts.map((post) => (
                                    <>
                                        <Table.Row className="m-6">
                                            {/*<li key={post.id} className="flex items-cener justify-between p-2 ">*/}
                                            {/*    <Link href={`/posts/${post.slug}`}>{post.title}</Link>*/}
                                            {/*    */}

                                            {/*</li>*/}


                                            <Table.RowHeaderCell px="9" key={post.id}><Link
                                                href={`/posts/${post.slug}`}>{post.title}</Link></Table.RowHeaderCell>
                                            <Table.Cell px="8"><Delete id={post.id}/></Table.Cell>
                                        </Table.Row>
                                    </>

                                ))}


                            </Table.Body>
                        </Table.Root>
                        <Formmm/>

                    </div>
                    {/*    <h1 className="text-3xl font-semibold"> all posts {posts_count}</h1>*/}
                    {/*    <ul className="border-t border-b border-black/10 py-5 leading-8 justify-between ">*/}
                    {/*        <div className="flex justify-between p-2">*/}
                    {/*            <div className="flex items-center flex-wrap">title</div>*/}
                    {/*            <div className="flex items-center flex-wrap">Action</div>*/}
                    {/*        </div>*/}
                    {/*        {posts.map((post) => (*/}
                    {/*            <>*/}
                    {/*                <li key={post.id} className="flex items-cener justify-between p-2 ">*/}
                    {/*                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>*/}
                    {/*                    <Delete id={post.id}/>*/}

                    {/*                </li>*/}


                    {/*            </>*/}

                    {/*        ))}*/}
                    {/*    </ul>*/}

                {/*</main>*/}
                </div>
            </Box>
        </>
    );
}