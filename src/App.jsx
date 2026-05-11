import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Animals from "./pages/Animals";
import AnimalDetails from "./pages/AnimalDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="animals" element={<Animals />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="animals/:id" element={<AnimalDetails />} />
        <Route path="animals/category/:type" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
