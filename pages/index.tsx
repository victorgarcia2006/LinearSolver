import React from "react";
import PageLayout from "../components/PageLayout";
import H1 from "../components/typography/Heading1";
import MenuCards from "../components/home/MenuCards";

export default function Home() {
  return (
    <PageLayout title="Inicio">
      <div className="flex flex-col w-11/12 gap-y-40">
        <header className="flex flex-col items-center">
          <H1 isPurple>
            <p>Bienvenido</p>
            <p>¿Qué deseas calcular?</p>
          </H1>
        </header>
        <MenuCards />
      </div>
    </PageLayout>
  );
}
