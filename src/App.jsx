import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import List from "./pages/List";
import Community from "./pages/Community";
import Post from "./pages/Post";
import MemoryMatchingGame from "./pages/MemoryGamePage";
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
          <Route path="/community" element={<Community />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/memorygame" element={<MemoryMatchingGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
