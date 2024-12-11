import React, { JSX } from "react";
import { Card, CardBody } from "@nextui-org/react";

interface CardLSProps {
  children: JSX.Element | JSX.Element[];
  onClick?: () => void;
}

function CardLS({ children, onClick }: CardLSProps) {
  return (
    <Card onClick={onClick} isHoverable isPressable className='h-[320px] w-[320px] border-none'>
      <CardBody className="flex flex-col justify-center items-center">{children}</CardBody>
    </Card>
  );
}

export default CardLS;
