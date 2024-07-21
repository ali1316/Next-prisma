import {editPost} from "./actions";
import posts from "@/app/posts/page";

export async function EditForm({post}) {
    console.log(post)
    const {id,title,content,published,slug} = post;
    return (
<>
    <form action={editPost} className="p-4 flex flex-col gap-y-2 w-[300px] content-center mx-auto bg-blue-200">
        <input name="id" value={id} type="hidden" className="px-2 py-2 rounded-sm"/>
        <input name="title" defaultValue={title}    className="px-2 py-2 rounded-sm"/>
        <input name="slug" type="hidden" defaultValue={title}   className="px-2 py-2 rounded-sm"/>
        <input name="content" defaultValue={content}  rows={5} className="px-2 py-2 rounded-sm"/>
        <input name="published" type="checkbox" defaultChecked={published} id="published"    className="px-2 py-2 rounded-sm"/>
        <button type="submit"         className="bg-blue-700 text-white px-2 py-2 rounded-sm"
        >Edit</button>

    </form>
</>)
}