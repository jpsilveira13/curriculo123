// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import ContactLinks from "./components/ContactLinks";
import Projects from "./components/Projects";

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");

      const json = await response.json();

      setData(json);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Section data={data} />} />
          <Route
            path="/projetos"
            element={<Projects data={data?.projects} />}
          />
          <Route
            path="/contatos"
            element={<ContactLinks data={data?.contactLinks} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
