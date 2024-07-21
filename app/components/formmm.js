"use client";
import {CreatPost} from "./actions";
import {useFormStatus} from "react-dom";

const Formmm = ({id}) => {
    const SubmitBtn = () => {
        const pending = useFormStatus();
        return (
            <button
                className="bg-blue-700 text-white px-2 py-2 rounded-sm"
                type="submit"
                disabled={pending}
            >
                {pending ? 'Submitting...' : 'Submit'}
            </button>
        )
    }
    return(
        <>
        <form className="p-4 flex flex-col gap-y-2 w-[300px]" action={CreatPost}>
            <input type="text" name="title" placeholder="Title" className="px-2 py-2 rounded-sm"/>
            <textarea className="px-2 py-2 rounded-sm" rows={5} name="content" placeholder="Content"   />
            <SubmitBtn/>
        </form>
        </>)}
export default Formmm