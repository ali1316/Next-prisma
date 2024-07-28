import Image from "next/image";
import Signup from "@/app/signup/page";
import {validateRequest} from "@/lib/validate-req";
import {logout} from "@/app/components/actions";
import Link from "next/link";
export  default async function Home()
{const {user} = await validateRequest();

  return (
      <>
        {user &&
            <form action={logout}>
              <button>logout</button>
            </form>}
        {!user && <Link href="/login">login</Link>}
        {!user && <Link href="/signup">signUP</Link>}
      </>
  );
}
