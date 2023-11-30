import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import EmotionTracker from "./EmotionTracker";
import MeetingMain from "./Meeting/MeetingMain";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <Box className="app">
      
      <Router>
        <AppBar position="static">
          <Toolbar>
            <div className="my-element">
              <Typography variant="h6" component="div">
                <Link to="/BeStillApp" style={{ textDecoration: "none", color: "inherit" }}>
                  BeStill
                </Link>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="/BeStillApp"
            element={
              <Container className="app-main">
                <Card className="card" id="get-help-now">
                  <CardContent>
                    <Typography variant="h5">Get Help Now</Typography>
                    <Typography variant="body2">
                      Need help? Click the button below to get immediate
                      assistance.
                    </Typography>
                    <Button variant="contained">Get Help</Button>
                  </CardContent>
                </Card>
                <Card className="card" id="schedule-appointment">
                  <CardContent>
                    <Typography variant="h5">Schedule Appointment</Typography>
                    <Typography variant="body2">
                      Schedule your appointment with just one click.
                    </Typography>
                    <Link to="/schedule">
                      <Button variant="contained">Schedule</Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="card" id="track-emotions">
                  <CardContent>
                    <Typography variant="h5">Track Your Emotions</Typography>
                    <Typography variant="body2">
                      Keep track of your emotions and feelings.
                    </Typography>
                    <Link to="/track-emotions">
                      <Button variant="contained">Track</Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="card" id="learn-more">
                  <CardContent>
                    <Typography variant="h5">Learn More</Typography>
                    <Typography variant="body2">
                      Want to learn more about our services? Click below.
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                  </CardContent>
                </Card>
              </Container>
            }
          />
          {/* Add a Route for the emotion page */}
          <Route path="/track-emotions" element={<EmotionTracker />} />
          <Route path="/schedule" element={<MeetingMain />} />
        </Routes>
      </Router>
      <Box className="app-footer" component="footer">
        © 2023 Our App
      </Box>
    </Box>
  );
};

export default HomePage;
