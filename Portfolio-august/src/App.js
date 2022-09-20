import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBarContainer from "./Components/Representations/NavBarContainer";
import TopSection from "./Components/Representations/TopSection/TopSection";
import About from "./Components/Representations/About/About";
import LeftBar from "./Components/Representations/LeftBar/LeftBar";
import RightBar from "./Components/Representations/RightBar/RightBar";
import CardsList from "./Components/Representations/Card/CardsList";
import Contact from "./Components/Representations/Contact/Contact";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`./Projects/projects.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      // 
      .then(res =>
        res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        // setIsLoading(true);
      })
  }, []);

  return (
    <Router>
      <NavBarContainer />
      <LeftBar />
      <RightBar />
      <CanvasContainer>
        <TopSection />
        <About />
        {isLoading === false && <CardsList data={data} />}
        <Contact />
      </CanvasContainer>
    </Router >
  );
}

export default App;
