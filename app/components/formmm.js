"use client";
import { CreatPost } from "./actions";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import Delete from "@/app/components/delete";
import { Dropdown } from "@/app/components/dropdown";
import { useEffect, useState } from "react";
import { getUsers } from "./getuseraction";
import {validateRequest} from "@/lib/validate-req";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '@radix-ui/themes/styles.css';
import {Button} from "@radix-ui/themes";


const Formmm = ({ id }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchUsers() {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
                console.log("fetched",fetchedUsers);
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
                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                type="submit"
                disabled={pending || loading}
                aria-label="Close"
                color="crimson"
            >
                Submit
            </button>
        );
    };

    return (
        <>

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <div className="mt-4">
                    <Button
                        color="jade"
                        variant="soft"
                        radius="large"
                        className="inline-flex h-[35px] items-center justify-center bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none m-5">
                        Create a new post
                    </Button>
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content
                        className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">

                        <form action={CreatPost}>
                            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                                Create Post
                            </Dialog.Title>
                            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                                Create a new post title and content. Click save when you're done.
                            </Dialog.Description>
                            <fieldset className="mb-[15px] flex items-center gap-5">
                                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                                    Title
                                </label>
                                <input
                                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                    id="title"
                                    placeholder="Title"
                                    name="title"

                                />
                            </fieldset>
                            <fieldset className="mb-[15px] flex items-center gap-5">
                                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                                    content
                                </label>
                                <textarea
                                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] p-2"
                                    id="content"
                                    placeholder="content"
                                    name="content"
                                    rows={5}

                                />
                            </fieldset>
                            {loading ? (
                                <p>Loading users...</p>
                            ) : (
                                <Dropdown users={users} />
                            )}
                            <div className="mt-[25px] flex justify-end">
                                <Dialog.Close asChild>
                                    <SubmitBtn />

                                </Dialog.Close>
                            </div>
                            <Dialog.Close asChild>
                                <button
                                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                    aria-label="Close"
                                >
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>

                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        </>
    );
};

export default Formmm;

