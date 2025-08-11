import { lazy } from "react";

const Gallery = lazy(() => import("../Gallery/Gallery.tsx"));
const Home = lazy(() => import("../Home/Home.tsx"));
import { Routes, Route } from "react-router-dom";
import { DebugComponent } from "./DebugComponent.tsx";

const App = () => {

  return (
    <>
      <DebugComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/" element={<Gallery />} />
      </Routes >
    </>
  )
};

export default App