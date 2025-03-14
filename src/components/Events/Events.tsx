import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Stack,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { motion } from "framer-motion";
import { eventsData } from "../../data/eventsData";

const techColors: { [key: string]: string } = {
  React: "#61DBFB",
  Angular: "#DD0031",
  "Node.js": "#68A063",
  Python: "#3776AB",
  Vue: "#41B883",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Default: "#6A0DAD",
};

export default function Events() {
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    return JSON.parse(localStorage.getItem("bookmarks") || "[]").map(Number);
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const toggleBookmark = (eventId: number) => {
    setBookmarks((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );

    localStorage.setItem(
      "bookmarks",
      JSON.stringify([...bookmarks, eventId].map(Number))
    );
  };

  const filteredEvents = eventsData.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || event.tech === filter)
  );

  return (
    <Box sx={{ textAlign: "center", padding: "10px" }}>
      <Typography variant="h3" sx={{ marginY: 3 }}>
        Upcoming Meetups
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 5,
        }}
      >
        <TextField
          label="Search Events"
          variant="outlined"
          sx={{ width: "50%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Filter by Tech</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label="Filter by Tech"
          >
            <MenuItem value="All">All</MenuItem>
            {Object.keys(techColors).map(
              (tech) =>
                tech !== "Default" && (
                  <MenuItem key={tech} value={tech}>
                    {tech}
                  </MenuItem>
                )
            )}
          </Select>
        </FormControl>
      </Box>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "20px" }}
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    padding: 2,
                    borderRadius: "15px",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 5, transform: "scale(1.02)" },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.location}
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        marginTop: "20px",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <CalendarMonthIcon fontSize="small" />
                      <Typography variant="body2">{event.date}</Typography>
                    </Stack>
                    <Chip
                      label={event.tech}
                      sx={{
                        marginTop: "20px",
                        backgroundColor:
                          techColors[event.tech] || techColors["Default"],
                        color: event.tech === "JavaScript" ? "black" : "white",
                        fontWeight: "bold",
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "20px",
                        width: "100%",
                        borderRadius: "8px",
                      }}
                      onClick={() => toggleBookmark(event.id)}
                      startIcon={
                        bookmarks.includes(event.id) ? (
                          <BookmarkIcon />
                        ) : (
                          <BookmarkBorderIcon />
                        )
                      }
                    >
                      {bookmarks.includes(event.id) ? "Bookmarked" : "Bookmark"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))
        ) : (
          <Typography sx={{ marginTop: "20px", color: "gray" }}>
            No events found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
