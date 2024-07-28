import {signup} from '@/app/components/actions'
export default async function Signup() {

    return (
        <>
            <h1>Create an account</h1>
            <form className="p-4 flex flex-col gap-y-2 w-[300px]" action={signup}>
                <input type="text" name="username" placeholder="User Name" className="px-2 py-2 rounded-sm" required/>
                <input type="email" name="email" placeholder="email" className="px-2 py-2 rounded-sm" required/>
                <input type="password" name="password" placeholder="password" className="px-2 py-2 rounded-sm" required/>
                <button
                    className="bg-blue-700 text-white px-2 py-2 rounded-sm"
                    type="submit"
                    // disabled={pending}
                >
                    Submit
                </button>
            </form>
        </>
    );
}


interface ActionResult {
    error: string;
}
