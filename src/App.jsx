import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Content from "./components/Content";
import ItemDetails from "./components/ItemDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
