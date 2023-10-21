import { useState } from "react"

import { getInitialData } from "@/utils/index"

const initialNotes = getInitialData()

const useNotes = (search) => {
    const [notes, setNotes] = useState(initialNotes)

    const addNote = (note) => {
        setNotes((prevnotes) => {
            const newData = {
                ...note,
                id: Date.now(),
                createdAt: new Date().toISOString(),
                archived: false
            }

            const newNotes = [...prevnotes, newData]
            return newNotes
        })
    }

    const deleteNote = (id) => {
        setNotes((prevnotes) => {
            const newNotes = prevnotes.filter((note) => note.id !== id)
            return newNotes
        })
    }

    const archiveNote = (id) => {
        setNotes((prevnotes) => {
            const newNotes = prevnotes.map((note) => {
                if (note.id === id) {
                    return {
                        ...note,
                        archived: note.archived ? false : true
                    }
                }
                return note
            })
            return newNotes
        })
    }

    const filteredNotes = notes.filter(({ title }) => {
        if (!search) {
            return notes
        }

        return title.toLowerCase().includes(search.toLowerCase())
    })

    const sortedNotes = filteredNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const activeNotes = sortedNotes.filter((note) => !note.archived)
    const archivedNotes = sortedNotes.filter((note) => note.archived)

    return {
        notes: activeNotes,
        archivedNotes,
        addNote,
        deleteNote,
        archiveNote
    }
}

export default useNotes
