import React, { useState } from "react";
import { Box, Typography, Tab, Tabs, List, ListItem } from "@material-ui/core";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ResourcesMain = () => {
  // Placeholder resources. Replace these with your actual resources.
  const resources = [
    "Resource 1",
    "Resource 2",
    "Resource 3",
    "Resource 4",
    "Resource 5",
  ];

  const concerns = [
    "homesickness",
    "lonliness",
    "contention with companion",
    "companion with mental heatlh challenges",
    "faith crises",
    "depression",
    "anxiety",
    "panic attacks",
    "burn out",
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box className="app">
      <Box className="app-header">
        <Typography variant="h6">Emotion Tracker</Typography>
      </Box>
      <Box className="app-main">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="All" />
          <Tab label="By Concern" />
        </Tabs>
        {selectedTab === 0 && (
          <List>
            {resources.sort().map((resource) => (
              <ListItem>{resource}</ListItem>
            ))}
          </List>
        )}
       {selectedTab === 1 && (
  concerns.map((concern) => (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{concern}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          {/* Replace "Resource 1", "Resource 2", etc. with the actual resources for this concern */}
          <ListItem>Resource 1</ListItem>
          <ListItem>Resource 2</ListItem>
          {/* ... */}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ))
)}
      </Box>
      <Box className="app-footer">© 2023 Our App</Box>
    </Box>
  );
};

export default ResourcesMain;
