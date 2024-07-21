// PostForm.js
'use client';

import { createPost } from '@/app/components/actions';
import { useFormStatus } from 'react-dom';
export default function PostForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        await createPost(formData);
        // Optionally, you can add logic to handle success/failure or reset the form
    };
    const SubmitBtn = () => {
        const pending = useFormStatus();
        return (
            <button
                className="bg-blue-700 text-white px-2 py-2 rounded-sm"
                type="submit"
            >
                {pending ? 'Submitting...' : 'Submit'}
            </button>
        )
    }

    return (
        <form
            className="p-4 flex flex-col gap-y-2 w-[300px]"
            onSubmit={handleSubmit}
        >
        <input
        type="text"
    name="title"
    placeholder="Title"
    className="px-2 py-2 rounded-sm" required
    />
    <textarea
        className="px-2 py-2 rounded-sm"
    rows={5}
    name="content"
    placeholder="Content"
    required
    />
    <SubmitBtn/>
        </form>
);
}