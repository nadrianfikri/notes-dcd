import React from "react"

import Card from "@/components/card"
import { showFormattedDate } from "@/utils/index"
import NoteAction from "./Notes.Action"

const ListNotes = ({ data, onDelete, onArchive }) => {
    const renderedNotes = data.map((note) => (
        <Card key={note.id}>
            <Card.Header>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='line-clamp-1'>{note.title}</h1>
                    <NoteAction
                        archived={note.archived}
                        onDelete={() => onDelete(note.id)}
                        onArchive={() => onArchive(note.id)}
                    />
                </div>
                <p className='text-slate-400 text-xs xl:text-sm font-normal'>{showFormattedDate(note.createdAt)}</p>
            </Card.Header>
            <Card.Body>{note.body}</Card.Body>
        </Card>
    ))

    if (data.length === 0) {
        return <p className='text-slate-500 text-center w-full'>No notes found</p>
    }

    return <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6'>{renderedNotes}</div>
}

export default ListNotes
