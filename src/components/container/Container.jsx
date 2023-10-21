import React from "react"

const Container = ({ children }) => (
    <div className='mx-auto box-border w-[90%] min-w-[-webkit-fill-available] lg:min-w-[1024px] max-w-[1440px] px-4 lg:px-6  '>
        {children}
    </div>
)

export default Container
