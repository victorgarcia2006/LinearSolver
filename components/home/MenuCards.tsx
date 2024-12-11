import React from "react";
import Card from "../Card";
import H2 from "../typography/Heading2";
import { useRouter } from "next/router";

function MenuCards() {
    const router = useRouter();
  const options = [
    {
      title: "Sistemas de ecuaciones lineales",
      icon: "SELIcon.png",
      link: "/sel",
    },
    {
      title: "Determinantes",
      icon: "DeterminanteIcon.png",
      link: "/determinantes",
    },
    {
      title: "Inversa de una matriz",
      icon: "InversaIcon.png",
      link: "/inversa",
    },
  ];

  return (
    <div className="flex justify-around">
      {options.map((option, index) => (
        <Card key={index} onClick={() => router.push(option.link)}>
          <div className="flex flex-col gap-y-6 justify-center items-center">
            <img
              src={`${option.icon}`}
              alt={option.title}
              className="w-40 h-40"
            />
            <H2 isPurple>{option.title}</H2>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default MenuCards;
