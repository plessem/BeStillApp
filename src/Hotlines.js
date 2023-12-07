import { Container, Grid } from '@mui/material'

import PhoneNumberCard from './PhoneNumberCard';
import React from "react";

const HotlinesPage = () => {
  const phoneNumbers = [
    {
      category: "Mission President",
      phoneNumber: "111-111-1111"
    },
    {
      category: "Mission President's Wife",
      phoneNumber: "222-222-2222"
    },
    {
      category: "Mission Nurses",
      phoneNumber: "333-333-3333"
    },
    {
      category: "Church Family Services",
      phoneNumber: "444-444-4444"
    }
  ];

  const hotlineNumbers = [
    {
      category: "Suicide Hotline",
      phoneNumber: "988"
    },
    {
      category: "Crisis Text Line",
      phoneNumber: "Text HOME to 741741"
    },
    {
      category: "National Mental Health Hotline",
      phoneNumber: "866-903-3787"
    }
  ];

  const handleRedirect = () => {
    window.location.href = "https://www.apa.org/topics/crisis-hotlines";
  };

  return (
    <Container className="container">
      
      <h1>Hotlines</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {hotlineNumbers.map((number, index) => (
          <Grid item xs={6}>
            <PhoneNumberCard key={index} category={number.category} phoneNumber={number.phoneNumber} />
          </Grid>
        ))}
      </Grid>
      <button onClick={() => window.open("https://www.apa.org/topics/crisis-hotlines", "_blank")}>Explore More Hotlines</button>
      <h2>Mission Phone Numbers</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {phoneNumbers.map((number, index) => (
          <Grid item xs={6}>
            <PhoneNumberCard key={index} category={number.category} phoneNumber={number.phoneNumber} />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default HotlinesPage;
