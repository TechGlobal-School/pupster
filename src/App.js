import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Discover } from "./pages/Discover";
import { Search } from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
