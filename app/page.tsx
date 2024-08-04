import Image from "next/image";
import Signup from "@/app/signup/page";
import {validateRequest} from "@/lib/validate-req";
import {login, logout, signup} from "@/app/components/actions";
import Link from "next/link";
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Login from "@/app/login/page";
import '@radix-ui/themes/styles.css';
import {Card, Skeleton, Theme, ThemePanel} from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import {redirect} from "next/navigation";

export  default async function Home()

{
    const {user} = await validateRequest();
    console.log("main page user :",user);
    if (user){
        
        redirect("/posts")


    }
    return(
        <Theme appearance="dark" style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }} radius="full" className="content-center p-6  items-center">
            <Tabs.Root
            className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA2 mx-auto my-60"
            defaultValue="tab1"
        >
            <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
                <Tabs.Trigger
                    className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                    value="tab1"
                >
                    Login
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                    value="tab2"
                >
                    SignUp
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                value="tab1"
            >
                <Form.Root className="mb-[15px] w-full flex flex-col justify-start" action={login}>

                        <h1 className="font-black text-mauve11 text-4xl align-center text-center p-3 mb-3  leading-normal">Login</h1>
                        <Form.Field className="grid mb-[10px]" name="email">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12 block">User Name</Form.Label>
                                <Form.Message className="text-[13px]  opacity-[0.8]" match="valueMissing">
                                    Please enter your UserName
                                </Form.Message>
                                <Form.Message className="text-[13px]  opacity-[0.8]" match="typeMismatch">
                                    Please provide a valid UserName
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                                    type="text"
                                    required
                                    name="username"
                                    placeholder="User Name"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field className="grid mb-[10px]" name="question">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12 block">
                                    Password
                                </Form.Label>
                                <Form.Message className="text-[13px]    opacity-[0.8]" match="valueMissing">
                                    Please enter your passowrd
                                </Form.Message>
                                <Form.Message className="text-[13px]  opacity-[0.8]" match="patternMismatch">
                                    Please provide a valid password
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full bg-blackA2 text-black shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6 resize-none"
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Submit asChild>
                            <button className="box-border items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                                Login
                            </button>
                        </Form.Submit>

                </Form.Root>
                {/*<p className="mb-5 text-mauve11 text-[15px] leading-normal">*/}
                {/*    To login enter your credentials*/}
                {/*</p>*/}
                {/*<form action={login}>*/}
                {/*<fieldset className="mb-[15px] w-full flex flex-col justify-start">*/}
                {/*    <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">*/}
                {/*        Name*/}
                {/*    </label>*/}
                {/*    <input*/}
                {/*        className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"*/}
                {/*        id="name"*/}
                {/*        defaultValue="Pedro Duarte"*/}
                {/*    />*/}
                {/*</fieldset>*/}
                {/*<fieldset className="mb-[15px] w-full flex flex-col justify-start">*/}
                {/*    <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="username">*/}
                {/*        Username*/}
                {/*    </label>*/}
                {/*    <input*/}
                {/*        className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"*/}
                {/*        id="username"*/}
                {/*        defaultValue="@peduarte"*/}
                {/*    />*/}
                {/*</fieldset>*/}
                {/*<div className="flex justify-end mt-5">*/}
                {/*    <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">*/}
                {/*        Save changes*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*</form>*/}
            </Tabs.Content>
            <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                value="tab2"
            >
                <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                    signup if you don't have an account yet
                </p>
            <form action={signup}>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                        className="text-[13px] leading-none mb-2.5 text-violet12 block"
                        htmlFor="email"
                    >
                        email
                    </label>
                    <input
                        className="bg-blackA2 grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"

                    />
                </fieldset>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                        className="text-[13px] leading-none mb-2.5 text-violet12 block"
                        htmlFor="username"
                    >
                        user name
                    </label>
                    <input
                        className="bg-blackA2 grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                        id="userName"
                        type="text"
                        name="username"
                        placeholder="username"
                    />
                </fieldset>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                        className="text-[13px] leading-none mb-2.5 text-violet12 block"
                        htmlFor="Password"
                    >
                        password
                    </label>
                    <input
                        className="bg-blackA2 grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                        id="Password"
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                </fieldset>
                <div className="flex justify-end mt-5">
                    <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                        Create
                    </button>
                </div>
            </form>
            </Tabs.Content>
        </Tabs.Root>

        </Theme>
)}
