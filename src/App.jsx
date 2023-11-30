import React from "react";
import "./App.css";

const Header =React.lazy(() => import("./Components/Header"));
const Slider =React.lazy(() => import("./Components/Slider"));
const ProductionHouse =React.lazy(() => import("./Components/ProductionHouse"));
const GenreMovieList =React.lazy(() => import("./Components/GenreMovieList"));
const App = () => {
  return (
    <div className="">
      <React.Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      </React.Suspense>
    </div>
  );
};

export default App;
