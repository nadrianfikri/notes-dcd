import React from "react"

const ThreeDots = ({ onClick }) => (
    <button className='w-6 h-6' onClick={onClick}>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 256'
            width='24'
            height='24'
            className='text-slate-400'
            fill='currentColor'
        >
            <path fill='none' d='M0 0h256v256H0z' />
            <circle cx='128' cy='64' r='16' />
            <circle cx='128' cy='128' r='16' />
            <circle cx='128' cy='192' r='16' />
        </svg>
    </button>
)

export default ThreeDots
