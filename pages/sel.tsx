/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [size, setSize] = useState("0");
  const [matrix, setMatrix] = useState(
    Array.from({ length: parseInt(size) + 2 }, () =>
      Array.from({ length: parseInt(size) + 3 }, () => 0)
    )
  );
  const [method, setMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResolved, setIsResolved] = useState(false);
  const [mylatex, setMyLatex] = useState("");

  //const mylatex = ;

  useEffect(() => {
    console.log(size);
    console.log(matrix);
    console.log(method);
  }, [size, matrix, method]);

  const handleValueChange = (value, i, j) => {
    const newMatrix = matrix.map((row, rowIndex) =>
      row.map((col, colIndex) =>
        rowIndex === i && colIndex === j ? value : col
      )
    );

    return newMatrix;
  };

  const handleResolve = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Resolviendo...");
    setIsLoading(true);
    setIsResolved(true);
    if (method === "0") {
      handleGauss();
    } else if (method === "1") {
      handleGaussJordan();
    } else if (method === "2") {
      handleCramer();
    }
  };

  const handleGauss = () => {
    console.log("Gauss");
    {
      /*Imprimo la matriz original */
    }

    setMyLatex(`$
            \\left(\\begin{array}{${
              parseInt(size) + 2 == 2
                ? "rr|r"
                : parseInt(size) + 2 == 3
                ? "rrr|r"
                : "rrrr|r"
            }}\n${matrix
      .map((row) => row.map((num) => num.toString()).join(" & ") + " \\\\\n")
      .join("\n")}\n\\end{array}
              \\right )$
            `);

    {
      /*Se ordenan las filas de la matriz según el primer número de la misma*/
    }
    const filas = matrix.map((fila) => [...fila]);
    let isSortMatrix = true;
    let cambios = [];

    // Ordenamos las filas basándonos en la columna especificada
    filas.sort((a, b) => {
      const valorA = a[0];
      const valorB = b[0];

      if (valorA < valorB) {
        cambios.push([a, b]);
        return -1;
      }
      if (valorA > valorB){
        cambios.push([b, a]);
        isSortMatrix = false;
        return 1;
      }
      return 0;
    });

    // Volvemos a asignar las filas ordenadas a la matriz original
    matrix.splice(0, matrix.length, ...filas);

    console.log(matrix);

    if(!isSortMatrix){
      setMyLatex(
        (prevLatex) => prevLatex + 
        `$ \\xrightarrow{L_1 \\Longleftrightarrow L_2} \\left(\\begin{array}{${
            parseInt(size) + 2 == 2
          ? "rr|r"
          : parseInt(size) + 2 == 3
          ? "rrr|r"
          : "rrrr|r"
          }}\n${matrix
            .map((row) => row.map((num) => num.toString()).join(" & ") + " \\\\\n")
            .join("\n")}\n\\end{array}
          \\right )$`
    );
    }

    {
      /*Se hace la eliminación de Gauss */
    }

    setIsLoading(false);
  };

  const handleGaussJordan = () => {
    console.log("Gauss-Jordan");
    setIsLoading(false);
  };

  const handleCramer = () => {
    console.log("Cramer");
    setIsLoading(false);
  };

  return (
    <PageLayout title="Sistemas de Ecuaciones Lineales">
      <div className="flex flex-col w-11/12 gap-10 ">
        <header className="flex justify-start items-start mt-10">
          <H1 isPurple>
            <p>Sistemas de Ecuaciones Lineales</p>
          </H1>
        </header>
        <div className="flex">
          <H2>Introduce los coeficientes de tus ecuaciones</H2>
        </div>
        <div className="flex gap-x-10">
          <Selector
            title="Tamaño de la matriz"
            data={["2x2", "3x3", "4x4"]}
            value={size}
            onChange={(value) => {
              setSize(value);
              setMatrix(
                Array.from({ length: parseInt(value) + 2 }, () =>
                  Array.from({ length: parseInt(value) + 3 }, () => 0)
                )
              );
            }}
          />
          <Selector
            title="Método"
            data={["Gauss", "Gauss-Jordan", "Regla de Cramer"]}
            value={method}
            onChange={(value) => {
              setMethod(value);
            }}
          />
        </div>
        {/* Segmento de las ecuaciones lineales*/}
        <form onSubmit={handleResolve} className="flex flex-col gap-y-10">
          <div className="flex items-center mt-10">
            <img src="/{.png" alt="" />
            <div className="flex flex-col gap-y-5">
              {Array.from({ length: parseInt(size) + 2 }, (_, i) => (
                <div className="flex flex-row gap-x-10" key={i}>
                  {Array.from({ length: parseInt(size) + 2 }, (_, j) => (
                    <div
                      className="flex gap-3 justify-center items-center"
                      key={j}
                    >
                      <NumberInput
                        value={matrix[i][j]}
                        onChange={(value) => {
                          const newMatrix = handleValueChange(value, i, j);
                          setMatrix(newMatrix);
                        }}
                      />
                      <p className="text-2xl">
                        <Latex>$x_{j}$</Latex>
                      </p>
                    </div>
                  ))}
                  <div className="flex gap-3 justify-center items-center">
                    <p className="text-2xl">
                      <Latex>$=$</Latex>
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center items-center">
                    <NumberInput
                      value={matrix[i][parseInt(size) + 3]}
                      onChange={(value) => {
                        const newMatrix = handleValueChange(
                          value,
                          i,
                          parseInt(size) + 2
                        );
                        setMatrix(newMatrix);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button type="submit" loading={isLoading}>
            <p className={`${isLoading ? "hidden" : ""}`}>Resolver</p>
          </Button>
        </form>

        <Divider my={"md"} />
        <div className={`flex flex-col gap-y-5 ${isResolved ? "" : "hidden"}`}>
          <Latex
            delimiters={[
              { left: "$$", right: "$$", display: true },
              { left: "\\(", right: "\\)", display: true },
              { left: "$", right: "$", display: false },
              { left: "[", right: "]", display: false },
            ]}
          >
            {mylatex}
          </Latex>
        </div>
      </div>
    </PageLayout>
  );
}

export default sel;
