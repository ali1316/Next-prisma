import {login} from "@/app/components/actions";


export default function Login() {
    return (
        <form action={login}>
            <input name="username" type="text" required className="border-red-700 border"/>
            <input name="password" type="password" className="border-red-700 border" required />
            <button type="submit">Log in</button>
        </form>
    );
}