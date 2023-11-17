// import React, { ReactElement } from "react";
import classes from "../components/css/card.module.css";

export function Card({ titulo, name }: { titulo: string; name: string }) {
  return (
    <div className={classes.card}>
      <h1 className={classes.task}>{titulo}</h1>
      <div className={classes.info}>
        <a>Hola</a>
        <a>{name}</a>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: any }) {
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </div>
  );
}
