import React, {JSX} from 'react'
import { Inter } from 'next/font/google'

interface Heading1Props {
    children: JSX.Element | JSX.Element[] | string
    isPurple?: boolean 
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

function Heading1({children, isPurple}: Heading1Props) {
  return (
    <h1 className={`${inter.className} text-5xl font-bold text-center ${isPurple ? 'bg-gradient-to-b from-[#6C2CDA] to-[#391774] inline-block text-transparent bg-clip-text' : '' }`}>
        {children}
    </h1>
  )
}

export default Heading1
