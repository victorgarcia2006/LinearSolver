import React, { JSX } from "react";

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function PageLayout({ children }: PageLayoutProps) {
  return <main className="w-full h-screen flex flex-col justify-start items-center bg-[#F1F0F1]">
    <div className="flex flex-col justify-center items-center h-full w-full">{children}</div>
  </main>;
}

export default PageLayout;
