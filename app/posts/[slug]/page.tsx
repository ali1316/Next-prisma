import Link from "next/link";
import prisma from "@/lib/db";
import {EditForm} from "@/app/components/editform";
import {Badge, DataList, Flex, Code, Card, Button} from "@radix-ui/themes";
import {IconButton} from "@radix-ui/themes";
import {CopyIcon} from "@radix-ui/react-icons";
import Users from "@/app/user/page";

export default async function postPage(props: {params: { slug: string }, searchParams: {}}) {
    const post = await prisma.post.findUnique({
        where : {
            slug: props.params.slug,

        },
        include:{
            User : true,
        }
    });
    console.log("paramsasdasfdsdf",props,post)
    return(
        <>
            <main className="w-3/4 mx-auto pt-24 text-center gap-5 flex flex-col">
            <Card size="3">

                {/*<h1 className="text-3xl font-semibold">{post?.title}</h1>*/}
                {/*<p>{post?.content}</p>*/}
                {/*<h1 className="text-lg m-auto">Edit form </h1>*/}
                {/*<div className="flex items-center container content-center gap-5">*/}


                {/*</div>*/}
                <DataList.Root size="3">
                    <DataList.Item align="center">
                        <DataList.Label minWidth="88px">Status</DataList.Label>
                        <DataList.Value>
                            <>
                                {post?.published === true ?
                                    <>
                                        <Badge color="jade" variant="soft" radius="full" >
                                            Published
                                        </Badge>
                                    </>
                                    :
                                    <Badge color="crimson" variant="soft" radius="full" >
                                        not Published yet
                                    </Badge>
                                }
                            </>

                        </DataList.Value>
                    </DataList.Item>
                    {/*<DataList.Item>*/}
                    {/*<DataList.Label minWidth="88px">ID</DataList.Label>*/}
                    {/*<DataList.Value>*/}
                    {/*    <Flex align="center" gap="2">*/}
                    {/*        <Code variant="ghost">u_2J89JSA4GJ</Code>*/}
                    {/*        <IconButton*/}
                    {/*            size="1"*/}
                    {/*            aria-label="Copy value"*/}
                    {/*            color="gray"*/}
                    {/*            variant="ghost"*/}
                    {/*        >*/}
                    {/*            <CopyIcon />*/}
                    {/*        </IconButton>*/}
                    {/*    </Flex>*/}
                    {/*</DataList.Value>*/}
                    {/*</DataList.Item>*/}
                    <DataList.Item>
                        <DataList.Label minWidth="88px">Title</DataList.Label>
                        <DataList.Value>{post?.title}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">content</DataList.Label>
                        <DataList.Value>
                            {post?.content}
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">Author</DataList.Label>
                        <DataList.Value>
                            {post?.User.username}
                        </DataList.Value>
                    </DataList.Item>
                </DataList.Root>
                <div className="text-lg mt-3 p-3 flex">
                <div className="">
                    <Button
                    color="gray"
                    variant="soft"
                ><Link
                    href="/posts">Back</Link></Button>
                </div>
                    <div className="pl-3">
                    <EditForm post={post} />
                    </div>
                    </div>


                </Card>

            </main>
</>
    )
}