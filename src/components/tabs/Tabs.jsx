import React from "react"

export const Tab = ({ children, active, onClick }) => {
    return (
        <button
            className={`${
                active ? "border-b-2 border-sky-500 text-sky-600 font-semibold" : "text-slate-500"
            } py-2 md:py-4 px-3 md:px-6 capitalize`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

const Tabs = ({ children }) => {
    return (
        <div className='flex flex-col flex-1'>
            <div className='flex border-b border-slate-200'>{children}</div>
        </div>
    )
}

export default Tabs
