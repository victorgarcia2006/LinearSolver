import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Inter } from 'next/font/google'

interface SelectorProps {
  title: string;
  data: Array<string>;
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

function Selector({ title, data }: SelectorProps) {
  const selectStyle = {
    selectorIcon: ["text-[#CED4DA]"],
    label: ["text-[#CED4DA]", "text-base", "font-medium", ],
    popoverContent: ["bg-white"],
    trigger: ["bg-white", "data-[hover=true]:bg-white/20"],
    base: [
      "w-52",
      "h-10",
      "text-white",
      "border-[#CED4DA]",
      "border-solid",
      "data-[selectable=true]:text-white",
      "data-[pressed=true]:text-white",
    ],
  };
  return (
    <Select
      label={title}
      classNames={selectStyle}
      variant="faded"
      radius="full"
      className={`${inter.className}`}
    >
      <SelectSection>
        {data.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectSection>
    </Select>
  );
}

export default Selector;
