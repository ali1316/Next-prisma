import {login} from "@/app/components/actions";
import React from 'react';
import * as Form from '@radix-ui/react-form';

export default function Login() {
    return (
        // <form action={login}>
        //     <input name="username" type="text" required className="border-red-700 border"/>
        //     <input name="password" type="password" className="border-red-700 border" required />
        //     <button type="submit">Log in</button>
        // </form>
        <Form.Root className="w-[260px] container mx-auto mt-72" action={login}>
            <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Email</Form.Label>
                    <Form.Message className="text-[13px] text-black opacity-[0.8]" match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message className="text-[13px] text-black opacity-[0.8]" match="typeMismatch">
                        Please provide a valid email
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                        type="text"
                        required
                        name="username"
                        placeholder="User Name"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="question">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                        Password
                    </Form.Label>
                    <Form.Message className="text-[13px] text-black opacity-[0.8]" match="valueMissing">
                        Please enter your passowrd
                    </Form.Message>
                    <Form.Message className="text-[13px] text-black opacity-[0.8]" match="patternMismatch">
                        Please provide a valid password
                    </Form.Message>
                </div>
                <Form.Control asChild>
        <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6 resize-none"
            required
            type="password"
            name="password"
            placeholder="Password"
        />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                    Post question
                </button>
            </Form.Submit>
        </Form.Root>

    );
}