// import React, { ReactElement } from "react";
import classes from "./css/main.module.css";

export function Main({ children }: any) {
  return (
    <main className={classes.main}>
      <h1 className={classes.header}>Proyectos</h1>
      <div className={classes.layout}>{children} </div>
    </main>
  );
}
