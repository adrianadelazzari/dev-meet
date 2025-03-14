import React from "react";
import { AppBar, Toolbar, Button, IconButton, Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useThemeProvider } from "../../theme/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const { theme, toggleDarkMode } = useThemeProvider();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Bookmarks", path: "/bookmarks" },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ justifyContent: "end", gap: "10px" }}>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            sx={{
              color:
                location.pathname === item.path
                  ? theme.palette.secondary.light
                  : "white",
              fontWeight: location.pathname === item.path ? "bold" : "normal",
              backgroundColor:
                location.pathname === item.path
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              borderRadius: "8px",
              padding: "6px 12px",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            {item.label}
          </Button>
        ))}

        <Tooltip
          title={
            theme.palette.mode === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
        >
          <IconButton color="inherit" onClick={toggleDarkMode} sx={{ ml: 2 }}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
