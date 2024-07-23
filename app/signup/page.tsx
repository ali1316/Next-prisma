import {Signup} from '@/app/components/actions'
export default async function Page() {

    return (
        <>
            <h1>Create an account</h1>
            <form action={Signup}>
                <label htmlFor="username">Username</label>
                <input name="username" id="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <button>Continue</button>
            </form>
        </>
    );
}

async function Signup(_: any, formData: FormData): Promise<ActionResult> {}

interface ActionResult {
    error: string;
}