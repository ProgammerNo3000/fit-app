import React from "react";
import { Outlet } from "react-router-dom";
import { MainMenu } from "../components/MainMenu";

export const Layout = () => {
  return (
    <main>
      <header>
        <MainMenu />
      </header>
      <Outlet />
      <footer> 
      </footer>
    </main>
  );
};
