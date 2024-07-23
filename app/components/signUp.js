"use client";
import {CreatPost, CreatUser} from "./actions";
import {useFormStatus} from "react-dom";

const SignUpForm = ({id}) => {
    const SubmitBtn = () => {
        const pending = useFormStatus();
        return (
            <button
                className="bg-blue-700 text-white px-2 py-2 rounded-sm"
                type="submit"
                // disabled={pending}
            >
                Submit
            </button>
        )
    }
    return(
        <>
            <form className="p-4 flex flex-col gap-y-2 w-[300px]" action={CreatUser}>
                <input type="text" name="username" placeholder="User Name" className="px-2 py-2 rounded-sm" required/>
                <input type="email" name="email" placeholder="email" className="px-2 py-2 rounded-sm" required/>
                <input type="password" name="password" placeholder="password" className="px-2 py-2 rounded-sm" required/>
                <SubmitBtn/>
            </form>
        </>)}
export default SignUpForm