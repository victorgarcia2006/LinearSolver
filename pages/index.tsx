import React from "react";
import PageLayout from "../components/PageLayout";
import H1 from "../components/typography/Heading1";

export default function Home() {
  return (
    <PageLayout>
      <H1 isPurple>
        <p>Bienvenido</p>
        <p>¿Qué deseas calcular?</p>
      </H1>
    </PageLayout>
  );
}
