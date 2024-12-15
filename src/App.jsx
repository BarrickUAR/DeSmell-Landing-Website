import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/index.jsx";
import Hero from "./components/Hero/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import Wedo from "./components/Wedo/index.jsx";
import Where from "./components/Where/index.jsx";
import Loader from "./components/Loader/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <Sidebar />
          <div className="fade-in">
            <Hero />
            <Wedo />
            <Where />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
