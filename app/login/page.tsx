import {Login} from '@/app/components/actions'

export default async function Page() {
    return (
        <>
            <h1>Sign in</h1>
            <form action={Login}>
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

async function Login(_: any, formData: FormData): Promise<ActionResult> {}

interface ActionResult {
    error: string;
}