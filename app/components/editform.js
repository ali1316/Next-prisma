// "use client";
import {editPost} from "./actions";
import posts from "@/app/posts/page";
import {Button, Flex , Dialog,Text ,TextField} from "@radix-ui/themes";
import {Pencil2Icon} from "@radix-ui/react-icons";
import {Input} from "postcss";
export async function EditForm({post}) {

    const {id,title,content,published,slug,userid,User} = post;
    console.log("edit form",post)
    return (
        <>
        <Dialog.Root>
            <Dialog.Trigger>
                <Button color="grass" variant="soft">Edit Post<Pencil2Icon/></Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    edit the posts.
                </Dialog.Description>
                <form action={editPost}>
                    <input name="id" value={id} type="hidden" className="px-2 py-2 rounded-sm"/>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                title
                            </Text>
                            <input
                                name="title"
                                defaultValue={title}
                                placeholder="Enter the title "
                            />
                        </label>
                        <input name="slug" type="hidden" defaultValue={title} className="px-2 py-2 rounded-sm"/>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                content
                            </Text>
                            <input
                                name="content"
                                defaultValue={content}
                                rows={5}
                                placeholder="Content"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Published
                            </Text>
                            <input name="published" type="checkbox" defaultChecked={published} id="published"
                                   className="px-2 py-2 rounded-sm"/>
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Author
                            </Text>
                            <input name="User" defaultValue={User.username} className="rounded-sm" readOnly='readonly'/>
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                        <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button type="submit" > Save</Button>
                        </Dialog.Close>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>


    {/*    <div>Post Form</div>*/}
    {/*<form action={editPost} className="p-4 flex flex-col gap-y-2 w-[300px] content-center mx-auto ">*/}
    {/*    <input name="id" value={id} type="hidden" className="px-2 py-2 rounded-sm"/>*/}
    {/*    <div className="flex px-2 py-2 gap-6 "><span>title:</span><span> <input name="title" defaultValue={title}    className="rounded-sm bg"/></span></div>*/}
    {/*    <input name="slug" type="hidden" defaultValue={title}   className="px-2 py-2 rounded-sm"/>*/}
    {/*    <div className="flex px-2 py-2 gap-6 "><span>Content:</span><input name="content" defaultValue={content} rows={5} className="rounded-sm"/></div>*/}
    {/*    <div className="justify-between m-2 gap-4 flex"><span>Published</span><span><input name="published" type="checkbox" defaultChecked={published} id="published"    className="px-2 py-2 rounded-sm"/></span></div>*/}
    {/*    <div className="flex px-2 py-2 gap-6 "><span>Name:</span><input name="User" defaultValue={User.username} className="rounded-sm" readonly='readonly'/></div>*/}
    {/*    <button type="submit"  className="bg-blue-700 text-white px-2 py-2 rounded-sm"*/}
    {/*    >Edit</button>*/}

    {/*</form>*/}
</>)
}