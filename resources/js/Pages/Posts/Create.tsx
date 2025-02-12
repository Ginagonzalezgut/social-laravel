import { router } from '@inertiajs/react';
import { ChangeEvent, FormEvent, useState } from 'react';

function Create() {
    const [image, setImage] = useState('');
    const [caption, setCaption] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        router.post('/posts', {
            image,
            caption,
        });
    }

    function handleImage(event: ChangeEvent<HTMLInputElement>) {
        setImage(event.target.value);
    }

    function handleCaption(event: ChangeEvent<HTMLTextAreaElement>) {
        setCaption(event.target.value);
    }
    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <form
                className="mx-auto mt-16 max-w-xl sm:mt-20"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                    <label
                        className="block text-sm/6 font-semibold text-gray-900"
                        htmlFor="image"
                    >
                        Add Image URL
                    </label>
                    <input
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        type="text"
                        name="image"
                        id="image"
                        onChange={handleImage}
                        value={image}
                    />
                    <label
                        className="block text-sm/6 font-semibold text-gray-900"
                        htmlFor="caption"
                    >
                        Add a description
                    </label>
                    <textarea
                        onChange={handleCaption}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        name="caption"
                        id="caption"
                        value={caption}
                    ></textarea>
                    <button
                        className="shadow-xs block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type="submit"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Create;
