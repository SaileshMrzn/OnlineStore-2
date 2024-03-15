import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ItemDetails from "./components/ItemDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Content />} />
          <Route path="/item/:id" exact element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
