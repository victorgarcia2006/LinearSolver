import React from 'react'
import { NumberInput } from "@mantine/core";

interface NumberInputLSProps {
    value?: number | string;
    onChange?: (value: number | string) => void;
}

function NumberInputLS({value, onChange}: NumberInputLSProps) {
  return (
    <NumberInput
        radius={'md'}
        classNames={
            {
                wrapper: 'w-20 text-xl',
                input: 'text-2xl'
            }
        }
        value={value}
        onChange={onChange}
    />
  )
}

export default NumberInputLS
