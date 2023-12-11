import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Tab,
  Tabs,
  List,
  ListItem,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ResourcesMain = () => {
  const resources = [
    {
      name: "Addressing Mental Health",
      type: "talk",
      concerns: ["depression", "anxiety", "companion has mental illness"],
      author: "Elder Erich W. Kopischke",
      link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/25kopischke?lang=eng",
    },
    {
      name: "How We Feel",
      type: "app",
      concerns: ["practice healthy habits"],
      author: "An emotion tracking app",
      link: "https://howwefeel.org/",
    },
    {
      name: "It is better to look up",
      type: "talk",
      concerns: ["lonliness", "faith crises"],
      author: "Carl B Cook",
      link: "https://www.churchofjesuschrist.org/study/general-conference/2011/10/it-is-better-to-look-up?lang=eng",
    },
    {
      name: "Broken things to mend",
      type: "talk",
      concerns: ["depression", "anxiety"],
      author: "Jeffery R Holland",
      link: "https://www.churchofjesuschrist.org/study/general-conference/2006/04/broken-things-to-mend?lang=eng",
    },
    {
      name: "Like a Broken Vessel",
      type: "talk",
      concerns: ["depression", "anxiety", "companion has mental illness"],
      author: "Jeffery R Holland",
      link: "https://www.churchofjesuschrist.org/study/general-conference/2013/10/like-a-broken-vessel?lang=eng",
    },
    {
      name: "The Infinite Power of Hope",
      type: "talk",
      concerns: ["faith crises", "depression", "anxiety"],
      author: "Dieter F Uchtdorf",
      link: "https://www.churchofjesuschrist.org/study/general-conference/2008/10/the-infinite-power-of-hope?lang=eng",
    },
    {
      name: "Christ: The Light that shines in the darkness",
      type: "talk",
      concerns: ["faith crises", "depression", "anxiety"],
      author: "Sharon Eubank",
      link: "https://www.churchofjesuschrist.org/study/general-conference/2019/04/42eubank?lang=eng",
    },
    {
      name: "Alma 36:27",
      type: "scripture",
      concerns: ["need comfort"],
      link: "https://www.churchofjesuschrist.org/study/general-conference/2016/04/the-healing-power-of-christ?lang=eng",
    },
  ];

  const concerns = [
    "homesickness",
    "lonliness",
    "contention with companion",
    "companion has mental illness",
    "faith crises",
    "depression",
    "anxiety",
    "panic attacks",
    "practice healthy habits",
    "need comfort",
  ];

  function getResourcesByConcern(concern) {
    return resources.filter((resource) => resource.concerns.includes(concern));
  }

  function groupResourcesByType(resources) {
    return resources.reduce((groups, resource) => {
      const group = (groups[resource.type] = groups[resource.type] || []);
      group.push(resource);
      return groups;
    }, {});
  }

  function toTitleCase(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Box className="app">
        <Box className="app-header"></Box>
        <Box className="app-main">
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="All" />
                <Tab label="By Concern" />
              </Tabs>
            </Grid>
            <Grid item>
              {selectedTab === 0 && (
                <Grid container spacing={2}>
                  {Object.entries(groupResourcesByType(resources)).map(
                    ([type, resources], index) => (
                      <Grid item xs={4} key={index}>
                        <Card>
                          <CardContent>
                            <Typography variant="h5" component="div">
                              {type.toUpperCase()}
                            </Typography>
                            <List>
                              {resources.map((resource, index) => (
                                <ListItem key={index}>
                                  <div>
                                    <a
                                      href={resource.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        color: "black",
                                        textDecoration: "none",
                                      }}
                                    >
                                      <Typography variant="h6">
                                        {resource.name}
                                      </Typography>
                                    </a>
                                    <br />
                                    {resource.author && (
                                      <Typography variant="body2">
                                        {resource.author}
                                      </Typography>
                                    )}
                                  </div>
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  )}
                </Grid>
              )}

              {selectedTab === 1 && (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {concerns.slice(0, concerns.length / 2).map((concern) => (
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6" align="left">
                            {toTitleCase(concern)}
                          </Typography>{" "}
                        </AccordionSummary>
                        <AccordionDetails>
                          <List>
                            {getResourcesByConcern(concern).map((resource) => (
                              <ListItem>
                                <div>
                                  <a
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <Typography variant="h6">
                                      {resource.name}
                                    </Typography>
                                  </a>
                                </div>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Grid>
                  <Grid item xs={6}>
                    {concerns.slice(concerns.length / 2).map((concern) => (
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6" align="left">
                            {toTitleCase(concern)}
                          </Typography>{" "}
                        </AccordionSummary>
                        <AccordionDetails>
                          <List>
                            {getResourcesByConcern(concern).map((resource) => (
                              <ListItem>
                                <div>
                                  <a
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <Typography variant="h6">
                                      {resource.name}
                                    </Typography>
                                  </a>
                                </div>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box className="app-footer">© 2023 Our App</Box>
      </Box>
    </Container>
  );
};

export default ResourcesMain;
