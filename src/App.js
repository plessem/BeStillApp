import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import EmotionTracker from "./EmotionTracker";

const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Box className="app">
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div">
                    Welcome to Our App
                  </Typography>
                </Toolbar>
              </AppBar>
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
                    <Button variant="contained">Schedule</Button>
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
              <Box className="app-footer" component="footer">
                © 2023 Our App
              </Box>
            </Box>
          }
        />
        {/* Add a Route for the emotion page */}
        <Route path="/track-emotions" element={<EmotionTracker />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
