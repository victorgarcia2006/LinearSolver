import React from "react";
import PageLayout from "../components/PageLayout";
import H1 from "../components/typography/Heading1";
import H2 from "../components/typography/Heading2";
import Selector from "../components/Selector";
import NumberInput from "../components/NumberInput";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Button from "../components/Button";
import { Divider } from "@mantine/core";


function sel() {
  return (
    <PageLayout title="Sistemas de Ecuaciones Lineales">
      <div className="flex flex-col w-11/12 gap-10">
        <header className="flex ">
          <H1 isPurple>
            <p>Sistemas de Ecuaciones Lineales</p>
          </H1>
        </header>
        <div className="flex">
          <H2>Introduce los coeficientes de tus ecuaciones</H2>
        </div>
        <div className="flex gap-x-10">
          <Selector title="Tamaño de la matriz" data={["2x2", "3x3", "4x4"]} />
          <Selector
            title="Método"
            data={["Gauss", "Gauss-Jordan", "Regla de Cramer"]}
          />
        </div>
        {/* Segmento de las ecuaciones lineales*/}
        <div className="flex items-center mt-10">
          <img src="/{.png" alt="" />
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row gap-x-10">
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$x$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$y$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$z$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <p className="text-2xl">
                  <Latex>$=$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
            </div>
            <div className="flex flex-row gap-x-10">
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$x$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$y$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$z$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <p className="text-2xl">
                  <Latex>$=$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
            </div>
            <div className="flex flex-row gap-x-10">
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$x$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$y$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />{" "}
                <p className="text-2xl">
                  <Latex>$z$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <p className="text-2xl">
                  <Latex>$=$</Latex>
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <NumberInput />
              </div>
            </div>
          </div>
        </div>
        <Button>Resolver</Button>

        <Divider my={"md"}/>
      </div>
    </PageLayout>
  );
}

export default sel;
