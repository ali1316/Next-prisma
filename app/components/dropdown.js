export const Dropdown = ({ users }) => {
    if (!users || users.length === 0) {
        return <p>Loading users...</p>;
    }
    const userId = users.Id
    console.log(userId)
    return (
        <input readonly='readonly' name="userId" value={users.id} type="hidden"/>
    );
};