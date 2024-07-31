import {validateRequest} from "../../lib/validate-req";

export async function Author({ users }) {
    const {user} = await validateRequest();
    return(
        <input name="userId" value={user.username} readonly='readonly'  />

    )
    console.log(user)
}