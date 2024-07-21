import {Delete_post} from "@/app/components/actions";

const Delete = ({id}) => {
    return(
    <>
    <form action={Delete_post} >
        <input name="id" value={id} type="hidden"/>
        <button type="submit" className="bg-red-600 rounded-lg p-2">Delete</button>
    </form>
        </>)}
export default Delete