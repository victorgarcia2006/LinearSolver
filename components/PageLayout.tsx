import Head from "next/head";
import React, { JSX } from "react";

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

function PageLayout({ children, title}: PageLayoutProps) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="w-full h-screen flex flex-col justify-start items-center bg-[#F1F0F1]">
        <div className="flex flex-col items-center h-full w-full">
          {children}
        </div>
      </div>
    </main>
  );
}

export default PageLayout;
