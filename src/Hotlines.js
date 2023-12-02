import React from "react";

const HotlinesPage = () => {
  const phoneNumbers = {
    "Mission President": "111-111-1111",
    "Mission President's Wife": "222-222-2222",
    "Mission Nurses": "333-333-3333",
    "Church Family Services": "444-444-4444",
  };

  const hotlineNumbers = {
    "Suicide Hotline": "988",
    "Crisis Text Line": "Text HOME to 741741",
    "National Mental Health Hotline": "866-903-3787",
  };

  const handleRedirect = () => {
    window.location.href = "https://www.apa.org/topics/crisis-hotlines";
  };

  return (
    <div className="container">
      <h1>Hotlines</h1>
      <ul>
        {Object.entries(hotlineNumbers).map(([category, hotlineNumbers]) => (
          <li key={category}>
            <strong>{category}:</strong> {hotlineNumbers}
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={handleRedirect}>More Hotline Infomation</button>
      <br></br>
      <br></br>
      <h2>Mission Phone Numbers</h2>
      <ul>
        {Object.entries(phoneNumbers).map(([category, phoneNumber]) => (
          <li key={category}>
            <strong>{category}:</strong> {phoneNumber}
          </li>
        ))}
      </ul>
      <br></br>
      <br></br>
    </div>
  );
};

export default HotlinesPage;
