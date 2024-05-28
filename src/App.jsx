import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import List from "./pages/List";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoption" element={<Adopt />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
