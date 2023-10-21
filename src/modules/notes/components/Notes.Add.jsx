import React, { useState } from "react"

const MAX_TITLE_LENGTH = 50

const AddNote = ({ onAddNote }) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const titleLength = title.length
    const limitFired = titleLength >= MAX_TITLE_LENGTH

    const handleTitleChange = (event) => {
        setTitle(event.target.value.slice(0, MAX_TITLE_LENGTH))
    }

    const handleBodyChange = (event) => {
        setBody(event.target.value)
    }

    const handleSaveClick = (event) => {
        event.preventDefault()
        onAddNote({
            title,
            body
        })

        setTitle("")
        setBody("")
    }

    return (
        <div className='flex flex-col gap-4 md:w-[256px] xl:w-[320px] md:fixed pt-6 md:pt-12 md:px-6 md:h-screen bg-white md:border-r border-slate-200'>
            <div>
                <h2 className='text-base md:text-lg font-bold text-slate-600'>Create New Note</h2>
            </div>
            <form className='flex-grow text-sm md:text-base text-slate-600' onSubmit={handleSaveClick}>
                <div className='mb-4'>
                    <div className='flex justify-between items-center'>
                        <label htmlFor='title' className='block font-semibold mb-2'>
                            Title
                        </label>
                        <p className='text-xs text-slate-400'>
                            {titleLength}/{MAX_TITLE_LENGTH}
                        </p>
                    </div>
                    <input
                        type='text'
                        id='title'
                        placeholder='Input title'
                        value={title}
                        onChange={handleTitleChange}
                        className='w-full outline-none border border-slate-200 focus:border-sky-400 p-2 rounded'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='body' className='block font-semibold mb-2'>
                        Body
                    </label>
                    <textarea
                        id='body'
                        placeholder='Input body'
                        value={body}
                        onChange={handleBodyChange}
                        className='w-full outline-none border border-slate-200 focus:border-sky-400 p-2 rounded'
                        rows='4'
                    />
                </div>
                <button
                    className='bg-sky-500 hover:bg-sky-700 disabled:bg-slate-400 text-white w-full font-bold py-2 px-4 rounded'
                    disabled={!title || !body}
                >
                    Save
                </button>
            </form>
        </div>
    )
}

export default AddNote
