import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { formattedJson } from "./lib/jsonFormatter";
import ISection from "./models/ISection";

function App() {
  const [sections, setSections] = useState<ISection[]>([]);

  useEffect(() => {
    setSections(formattedJson());
  }, []);

  return (
    <React.Fragment>
      <NavBar sections={sections} />
    </React.Fragment>
  );
}

export default App;
