import React from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Bookmarks from "./components/Bookmarks/Bookmarks";

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Navbar />
        <main style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}
