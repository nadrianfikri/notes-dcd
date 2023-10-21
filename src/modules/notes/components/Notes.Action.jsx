import React, { useEffect, useState } from "react"
import ThreeDots from "../svgx/ThreeDots"

const NoteAction = ({ onDelete, onArchive, archived }) => {
    const [show, setShow] = useState(false)

    const toggleShow = () => setShow(!show)
    const handleClose = () => setShow(false)

    const handleDelete = () => {
        onDelete?.()
        handleClose()
    }

    const handleArchive = () => {
        onArchive?.()
        handleClose()
    }

    const handleOutsideClick = (e) => {
        if (e.target.closest(".dropdown")) return

        setShow(false)
    }

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick)

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [])

    return (
        <div className='dropdown relative'>
            <ThreeDots onClick={toggleShow} />
            {show && (
                <div className='absolute top-[32px] right-0 md:left-0 bg-white shadow-md rounded p-2 min-w-[120px]'>
                    <div className='flex flex-col gap-2'>
                        <button className='text-sm text-amber-500 hover:bg-slate-100 py-1' onClick={handleArchive}>
                            {archived ? "Unarchive" : "Archive"}
                        </button>
                        <button className='text-sm text-rose-500 hover:bg-slate-100 py-1' onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NoteAction
