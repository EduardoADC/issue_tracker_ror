import { useState } from "react";
import { Sidebar } from "./components/sidebar.tsx";
import { Main } from "./components/main.tsx";
import { Card, Section } from "./components/card.tsx";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Main>
        <Section title="To do">
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
        </Section>
        <Section title="In progress">
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
        </Section>
        <Section title="Ready for QA">
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
        </Section>
        <Section title="Done">
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
          <Card titulo="Hola mundo" name="Eduardo Diosdado"></Card>
        </Section>
      </Main>
    </div>
  );
}

export default App;
