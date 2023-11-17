// import React from "react";
import { useEffect, useState } from "react";
import classes from "./css/sidebar.module.css";
import { API_URL } from "../constants.ts";

export function Sidebar() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function loadAPI() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setProjects(json);
        } else {
          throw response;
        }
      } catch (error) {
        console.error("An error has occurred", error);
      }
    }
    loadAPI();
  }, []);

  return (
    <nav className={classes.sidebar}>
      <h1 className={classes.side_title}>Proyectos</h1>
      <ul className={classes.side_list}>
        {projects.map((project, id) => {
          return (
            <li key={id} className={classes.side_element}>
              {project.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
