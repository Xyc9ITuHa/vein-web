import Gallery from "../Gallery/Gallery.tsx";
import Home from "../Home/Home.tsx";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
};

export default App