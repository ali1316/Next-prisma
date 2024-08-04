import {Delete_post} from "@/app/components/actions";
import {Button} from "@radix-ui/themes";
import {TrashIcon} from "@radix-ui/react-icons";

const Delete = ({id , user}) => {
    return(
    <>
    <form action={Delete_post} className="flex" >
        <input name="id" value={id} type="hidden"/>
        <Button  color="ruby" variant="soft" disabled={!user}>
            <TrashIcon /> Delete
        </Button>
    </form>
        </>)}
export default Delete