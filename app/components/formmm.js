"use client";
import { CreatPost } from "./actions";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import Delete from "@/app/components/delete";
import { Dropdown } from "@/app/components/dropdown";
import { useEffect, useState } from "react";
import { getUsers } from "./getuseraction";

const Formmm = ({ id }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    const SubmitBtn = () => {
        const { pending } = useFormStatus();
        return (
            <button
                className="bg-blue-700 text-white px-2 py-2 rounded-sm"
                type="submit"
                disabled={pending || loading}
            >
                Submit
            </button>
        );
    };

    return (
        <>
            <form className="p-4 flex flex-col gap-y-2 w-[300px]" action={CreatPost}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="px-2 py-2 rounded-sm"
                />
                <textarea
                    className="px-2 py-2 rounded-sm"
                    rows={5}
                    name="content"
                    placeholder="Content"
                />
                {loading ? (
                    <p>Loading users...</p>
                ) : (
                    <Dropdown users={users} />
                )}
                <SubmitBtn />
            </form>
        </>
    );
};

export default Formmm;