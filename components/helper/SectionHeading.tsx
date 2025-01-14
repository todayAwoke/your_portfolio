import React, { ReactNode } from 'react'
type Props={
    children:ReactNode
}
const SectionHeading = ({children}:Props) => {
  return ( <h1 className='bg-indigo-950 hover:bg-indigo-700 hover:cursor-pointer w-fit text-center px-4 py-3 mx-auto text-white  text-2xl sm:text-3xl md:text-4xl uppercase  rounded-lg'>{children}</h1>
  )
}

export default SectionHeading