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
import LearnMorePage from "./learnmore";
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
                {/* App Description */}
                <Box
                  className="app-description"
                  style={{ backgroundColor: "#eee", padding: "1rem" }}
                >
                  <Typography variant="h5" style={{ color: "#333" }}>
                    Your One-Stop Solution for Missionary Well-being
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
                    BeStill provides missionaries with tools to schedule
                    appointments, find help, track emotions, and access valuable
                    information.
                  </Typography>
                </Box>

                {/* Quote Section */}
                <Box
                  className="quote-section"
                  style={{
                    backgroundColor: "#5f5f69",
                    color: "white",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" style={{ fontStyle: "italic" }}>
                    "My son, peace be unto thy soul; thine adversity and thine
                    afflictions shall be but a small moment; And then, if thou
                    endure it well, God shall exalt thee on high; thou shalt
                    triumph over all thy foes." -D&C 121:7-8
                  </Typography>
                </Box>
                <br></br>
                <br></br>
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
                        <Link to="/learnmore"></Link>
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
          {/* Add a Route for the emotion page */}
          <Route path="/hotlines" element={<HotlinesPage />} />
          <Route path="/track-emotions" element={<EmotionTracker />} />
          <Route path="/schedule" element={<MeetingMain />} />
          <Route path="/learnmore" element={<LearnMorePage />} />
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Footer */}
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
