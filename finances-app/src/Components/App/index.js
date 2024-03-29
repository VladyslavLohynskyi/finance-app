import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Wrapper, GlobalStyle } from "./styles";
import Home from "../Home";
import Statistics from "../Statistics";
import About from "../About";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
