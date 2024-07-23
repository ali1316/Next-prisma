export const Dropdown = ({ users }) => {
    if (!users || users.length === 0) {
        return <p>Loading users...</p>;
    }

    return (
        <select name="userId" className="px-2 py-2 rounded-sm">
            <option value="">Select a user</option>
            {users.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.userName}
                </option>
            ))}
        </select>
    );
};