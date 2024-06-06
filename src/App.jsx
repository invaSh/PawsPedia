import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import List from "./pages/List";
import Community from "./pages/Community";
import Post from "./pages/Post";
import MemoryGame from "./pages/MemoryGame";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {!isLoading && <Navbar />}
      <main style={{ marginBottom: "10rem" }}>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper setLoadingState={setIsLoading}>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/adoption"
            element={
              <PageWrapper setLoadingState={setIsLoading}>
                <Adopt />
              </PageWrapper>
            }
          />
          <Route
            path="/list"
            element={
              <PageWrapper setLoadingState={setIsLoading}>
                <List />
              </PageWrapper>
            }
          />
          <Route
            path="/community"
            element={
              <PageWrapper setLoadingState={setIsLoading}>
                <Community />
              </PageWrapper>
            }
          />
          <Route
            path="/post/:id"
            element={
              <PageWrapper setLoadingState={setIsLoading}>
                <Post />
              </PageWrapper>
            }
          />
          <Route
            path="/memorygame"
            element={
              <PageWrapper setLoadingState={setIsLoading}>
                <MemoryGame />
              </PageWrapper>
            }
          />
          <Route
            path="/pixi"
            element={
              <PageWrapper setLoadingState={setIsLoading}>
                <Hero />
              </PageWrapper>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
