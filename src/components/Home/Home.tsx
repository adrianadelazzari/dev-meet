import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import EventIcon from "@mui/icons-material/Event";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

const upcomingEvents = [
  {
    title: "ReactConf 2025",
    location: "San Francisco",
    date: "April 15, 2025",
  },
  { title: "Angular Summit", location: "New York", date: "May 5, 2025" },
  { title: "Node.js Conference", location: "London", date: "June 10, 2025" },
];

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", padding: "50px", minHeight: "80vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" fontWeight="bold">
          Welcome to DevMeet!
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "15px", color: "gray" }}>
          Find and join developer meetups worldwide
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", marginTop: "30px" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#462A67",
              color: "white",
              padding: "10px 20px",
              fontSize: "18px",
              "&:hover": { backgroundColor: "#6A0DAD" },
            }}
            startIcon={<ExploreIcon />}
            href="/events"
          >
            Browse Events
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<FavoriteIcon />}
            href="/bookmarks"
          >
            View Bookmarks
          </Button>
        </Stack>
      </motion.div>
      <Typography variant="h4" sx={{ marginTop: "60px" }}>
        Popular Technologies
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "30px" }}
      >
        {technologies.map((tech) => (
          <Grid item key={tech.name} xs={6} sm={3} md={2}>
            <Box sx={{ textAlign: "center" }}>
              <img src={tech.logo} alt={tech.name} width={80} height={80} />
              <Typography sx={{ marginTop: "10px", fontWeight: "bold" }}>
                {tech.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" sx={{ marginTop: "60px" }}>
        Upcoming Meetups
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "15px" }}
      >
        {upcomingEvents.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                padding: 2,
                borderRadius: "15px",
                transition: "0.3s",
                "&:hover": { boxShadow: 5 },
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          marginTop: "60px",
          padding: "30px",
          background: "linear-gradient(45deg, #462A67, #6A0DAD)",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <Typography variant="h4">Ready to Join a Meetup?</Typography>
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          Find your next event and connect with like-minded developers.
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            backgroundColor: "#FFD700",
            color: "#462A67",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#FFC300" },
          }}
          startIcon={<EventIcon />}
          href="/events"
        >
          Explore Meetups
        </Button>
      </Box>
    </Box>
  );
}
