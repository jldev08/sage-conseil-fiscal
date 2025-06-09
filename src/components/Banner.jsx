import React from 'react'

export default function Banner({children,backgroundClass}) {
    return (
        <div className={`h-full bg-cover bg-center bg-no-repeat p-4 ${backgroundClass}`}>
            <div className='w-full max-w-screen-xl mx-auto pt-24 pb-24'>
                {children}
            </div>
        </div>
    )
}