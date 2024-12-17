import React, {JSX} from 'react'
import { Button } from "@nextui-org/react";

interface ButtonLSProps {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    loading?: boolean;  
}

function ButtonLS({children, onClick, type, loading}: ButtonLSProps) {
  return (
    <Button onClick={onClick} type={type} isLoading={loading} className='bg-gradient-to-b from-[#6C2CDA] to-[#391774] w-fit h-10 inline-block shadow-lg'>
      <span className='text-xl text-white font-bold block w-fit'>{children}</span>
    </Button>
  )
}

export default ButtonLS
