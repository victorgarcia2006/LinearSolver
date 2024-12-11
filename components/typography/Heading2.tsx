import React, {JSX} from 'react'
import { Inter } from 'next/font/google'

interface Heading2Props {
    children: JSX.Element | JSX.Element[] | string
    isPurple?: boolean 
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

function Heading2({children, isPurple}: Heading2Props) {
  return (
    <h2 className={`${inter.className} text-2xl font-bold text-center ${isPurple ? 'bg-gradient-to-b from-[#6C2CDA] to-[#391774] inline-block text-transparent bg-clip-text' : '' }`}>
      {children}
    </h2>
  )
}

export default Heading2
