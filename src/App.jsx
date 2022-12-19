import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
