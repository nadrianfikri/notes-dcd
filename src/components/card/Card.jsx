import React from "react"

export const CardHeader = ({ children }) => {
    return <div className='text-slate-600 xl:text-xl font-semibold'>{children}</div>
}

export const CardBody = ({ children }) => {
    return <p className='text-slate-500 text-sm xl:text-base flex-1'>{children}</p>
}

const Card = ({ children }) => {
    return <div className='flex flex-col gap-2 md:gap-4 border border-slate-200 p-4 bg-white rounded'>{children}</div>
}

export default Card
