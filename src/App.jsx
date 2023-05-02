import React from "react";
import { Header, Hero, Sales, Stories, Footer, Cart } from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  story,
  footerAPI,
} from "./data/data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
// import Stories from './components/sides/Stories';
const App = () => {
  return (
    <>
      <Router>
        <main className="bg flex flex-col gap-16 relative scroll-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Cart />
                  <Header />
                  <Hero heroapi={heroapi} />
                  <Sales endpoint={popularsales} forpopular />
                  <Sales endpoint={toprateslaes} />
                  <Stories story={story} />
                  <Footer footerAPI={footerAPI} />
                </>
              }
            />
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
