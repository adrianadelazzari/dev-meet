import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  TextField,
  Stack,
} from "@mui/material";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { motion } from "framer-motion";
import { eventsData } from "../../data/eventsData";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    return JSON.parse(localStorage.getItem("bookmarks") || "[]").map(Number);
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const removeBookmark = (eventId: number) => {
    setBookmarks((prev) => prev.filter((id) => id !== eventId));
  };

  const bookmarkedEvents = eventsData.filter(
    (event) =>
      bookmarks.includes(event.id) &&
      event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h3">Bookmarked Meetups</Typography>
      <TextField
        label="Search Bookmarked Events"
        variant="outlined"
        sx={{ width: "50%", marginTop: "20px", marginBottom: "20px" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      {bookmarkedEvents.length === 0 ? (
        <Typography sx={{ marginTop: "20px", color: "gray" }}>
          No bookmarked meetups found. Go to the <strong>Events</strong> page to
          add some!
        </Typography>
      ) : (
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          {bookmarkedEvents.map((event) => (
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

                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      startIcon={<BookmarkRemoveIcon />}
                      onClick={() => removeBookmark(event.id)}
                      sx={{
                        marginTop: "20px",
                        width: "100%",
                        borderRadius: "8px",
                      }}
                    >
                      Remove Bookmark
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
