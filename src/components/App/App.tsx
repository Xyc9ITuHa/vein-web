import { lazy } from "react";

const Gallery = lazy(() => import("../Gallery/Gallery.tsx"));
const Home = lazy(() => import("../Home/Home.tsx"));
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/" element={<Gallery />} />
      </Routes >
    </>
  )
};

export default App