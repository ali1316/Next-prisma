import {editPost} from "./actions";
import posts from "@/app/posts/page";

export async function EditForm({post}) {

    const {id,title,content,published,slug,userid,User} = post;
    console.log(post)
    return (
<>
    <div>Post Form</div>
    <form action={editPost} className="p-4 flex flex-col gap-y-2 w-[300px] content-center mx-auto ">
        <input name="id" value={id} type="hidden" className="px-2 py-2 rounded-sm"/>
        <div className="flex px-2 py-2 gap-6 "><span>title:</span><span> <input name="title" defaultValue={title}    className="rounded-sm bg"/></span></div>
        <input name="slug" type="hidden" defaultValue={title}   className="px-2 py-2 rounded-sm"/>
        <div className="flex px-2 py-2 gap-6 "><span>Content:</span><input name="content" defaultValue={content} rows={5} className="rounded-sm"/></div>
        <div className="justify-between m-2 gap-4 flex"><span>Published</span><span><input name="published" type="checkbox" defaultChecked={published} id="published"    className="px-2 py-2 rounded-sm"/></span></div>
        <div className="flex px-2 py-2 gap-6 "><span>Name:</span><input name="User" defaultValue={User.userName} className="rounded-sm" readonly='readonly'/></div>
        <button type="submit"  className="bg-blue-700 text-white px-2 py-2 rounded-sm"
        >Edit</button>

    </form>
</>)
}