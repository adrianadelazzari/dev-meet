import React from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
