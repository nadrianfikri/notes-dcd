import React, { useState } from "react"

import Container from "@/components/container"
import Tabs, { Tab } from "@/components/tabs"

import AddNote from "./components/Notes.Add"
import ListNotes from "./components/Notes.List"
import useNotes from "./hooks/useNotes"

const tabs = ["active", "archived"]

const Notes = () => {
    const [isActiveTab, setIsActiveTab] = useState("active")
    const [search, setSearch] = useState("")
    const { notes, archivedNotes, addNote, deleteNote, archiveNote } = useNotes(search)

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleTabChange = (tab) => {
        setIsActiveTab(tab)
        setSearch("")
    }

    const renderedTabs = tabs.map((tab, index) => (
        <Tab key={index} active={isActiveTab === tab} onClick={() => handleTabChange(tab)}>
            {tab}
        </Tab>
    ))

    return (
        <Container>
            <div className='flex flex-col md:flex-row gap-8'>
                <AddNote onAddNote={addNote} />
                <div className='flex flex-col w-full md:pl-[280px] xl:pl-[342px] pb-6 md:py-8'>
                    <div className='sticky top-0 bg-white z-10 pb-4 flex flex-col md:flex-row md:items-end gap-4 md:gap-6'>
                        <Tabs>{renderedTabs}</Tabs>
                        <input
                            type='search'
                            id='search'
                            placeholder='Search notes'
                            value={search}
                            onChange={handleSearch}
                            className='outline-none border border-slate-200 focus:border-sky-400 p-2 rounded w-full h-[42px] md:w-[240px]'
                        />
                    </div>
                    {isActiveTab === "active" ? (
                        <ListNotes data={notes} onDelete={deleteNote} onArchive={archiveNote} />
                    ) : (
                        <ListNotes data={archivedNotes} onDelete={deleteNote} onArchive={archiveNote} />
                    )}
                </div>
            </div>
            <div className='md:hidden text-slate-400 text-xs mb-6 text-center'>
                Build from Bogor by Fikri Nadrian, 2023
            </div>
        </Container>
    )
}

export default Notes
