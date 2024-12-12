import React from 'react'
import PageLayout from "../components/PageLayout";
import H1 from "../components/typography/Heading1";
import H2 from "../components/typography/Heading2";
import Selector from "../components/Selector";
import NumberInput from "../components/NumberInput";
import Button from "../components/Button";
import { Divider } from "@mantine/core";

function inversa() {
  return (
    <PageLayout title="Sistemas de Ecuaciones Lineales">
      <div className="flex flex-col w-11/12 gap-10">
        <header className="flex ">
          <H1 isPurple>
            <p>Inversa de una matriz</p>
          </H1>
        </header>
        <div className="flex">
          <H2>Introduce los datos de tu matriz</H2>
        </div>
        <div className="flex gap-x-10">
          <Selector title="Tamaño de la matriz" data={["2x2", "3x3", "4x4"]} />
          <Selector
            title="Método"
            data={["Gauss-Jordan", "Determinantes"]}
          />
        </div>
        {/* Segmento de la determinante*/}
        <div className="flex items-center mt-10 gap-x-5">
          <img src="/[.png" alt="" />
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row gap-x-10">
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
            </div>
            <div className="flex flex-row gap-x-10">
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
            </div>
            <div className="flex flex-row gap-x-10">
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
            </div>
          </div>
          <img src="/].png" alt="" />
        </div>
        <Button>Resolver</Button>

        <Divider my={"md"}/>
      </div>
    </PageLayout>
  )
}

export default inversa
