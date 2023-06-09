 import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
  );
}

export default App;
