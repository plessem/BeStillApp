import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import EmotionTracker from "./EmotionTracker";
import HotlinesPage from "./Hotlines";
import MeetingMain from "./Meeting/MeetingMain";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// ... (Previous imports)

const HomePage = () => {
  return (
    <Box className="app">
      <Router>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              style={{ flexGrow: 1, color: "white" }}
            >
              <Link
                to="/BeStillApp"
                style={{ textDecoration: "none", color: "white" }}
              >
                BeStill
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="/BeStillApp"
            element={
              <Container className="app-main">
                <Grid container spacing={2}>
                  {/* First Column */}
                  <Grid item xs={6}>
                    <Card className="card" id="get-help-now" variant="outlined">
                      <CardContent>
                        <Typography variant="h4" style={{ color: "#3f51b5" }}>
                          Immediate Assistance
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{ marginTop: "1rem" }}
                        >
                          Click below for help right now.
                        </Typography>
                        <Link to="/hotlines">
                          <Button
                            variant="contained"
                            color="secondary"
                            style={{ marginTop: "2rem" }}
                          >
                            Get Help
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card
                      className="card"
                      id="track-emotions"
                      variant="outlined"
                    >
                      <CardContent>
                        <Typography variant="h4" style={{ color: "#00796b" }}>
                          Track Your Emotions
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{ marginTop: "1rem" }}
                        >
                          Keep a record of your feelings.
                        </Typography>
                        <Link to="/track-emotions">
                          <Button
                            variant="contained"
                            color="success"
                            style={{ marginTop: "2rem" }}
                          >
                            Track
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Second Column */}
                  <Grid item xs={6}>
                    <Card
                      className="card"
                      id="schedule-appointment"
                      variant="outlined"
                    >
                      <CardContent>
                        <Typography variant="h4" style={{ color: "#d32f2f" }}>
                          Schedule Appointment
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{ marginTop: "1rem" }}
                        >
                          Book your appointment in one click.
                        </Typography>
                        <Link to="/schedule">
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: "2rem" }}
                          >
                            Schedule
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="card" id="learn-more" variant="outlined">
                      <CardContent>
                        <Typography variant="h4" style={{ color: "#ff9800" }}>
                          Discover More
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{ marginTop: "1rem" }}
                        >
                          Explore what our services offer.
                        </Typography>
                        <Button
                          variant="contained"
                          color="warning"
                          style={{ marginTop: "2rem" }}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            }
          />
          {/* ... */}
        </Routes>
      </Router>
      <Box
        className="app-footer"
        component="footer"
        style={{ backgroundColor: "#333", color: "white" }}
      >
        © 2023 BeStill App
      </Box>
    </Box>
  );
};

export default HomePage;
