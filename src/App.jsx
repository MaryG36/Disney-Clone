import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/";
import Slider from "./Components/Slider";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";
import CircleLoader from "react-spinners/CircleLoader";
import Footer from "./Components/Footer";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      {loading ? (
        <CircleLoader size={150} color={"#0BC2DA"} loading={loading} cssOverride={{margin: "5rem auto"}} />
      ) : (
        <GenreMovieList />
      )}
      <Footer />
    </div>
  );
};

export default App;
