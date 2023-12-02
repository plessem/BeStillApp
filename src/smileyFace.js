import React, { useState } from "react";
import "./smileyFace.css";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Container,
  Box,
} from "@mui/material";

const SmileyFace = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const [selectedWord, setSelectedWord] = useState(null);

  const handleInputChange = (event) => {
    setSelectedEmotion(event.target.value);
  };

  const highEnergyPleasantEmotions = [
    "Joyful",
    "Excited",
    "Energetic",
    "Happy",
    "Cheerful",
    "Enthusiastic",
    "Lively",
    "Passionate",
    "Vibrant",
    "Radiant",
  ];

  const highEnergyUnpleasantEmotions = [
    "Stressed",
    "Anxious",
    "Angry",
    "Frustrated",
    "Overwhelmed",
    "Irritated",
    "Upset",
    "Nervous",
    "Agitated",
    "Tense",
  ];

  const lowEnergyUnpleasantEmotions = [
    "Sad",
    "Depressed",
    "Tired",
    "Bored",
    "Lonely",
    "Drained",
    "Gloomy",
    "Dull",
    "Lethargic",
    "Uninterested",
  ];

  const lowEnergyPleasantEmotions = [
    "Calm",
    "Relaxed",
    "Peaceful",
    "Satisfied",
    "Content",
    "Comfortable",
    "Mellow",
    "Restful",
    "Tranquil",
    "Serene",
  ];

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const getEmotionWords = (emotion) => {
    switch (emotion) {
      case "Happy":
        return highEnergyPleasantEmotions;
      case "Normal":
        return lowEnergyPleasantEmotions;
      case "Angry":
        return lowEnergyUnpleasantEmotions;
      case "Furious":
        return highEnergyUnpleasantEmotions;
      default:
        return [];
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <input
            id="happy"
            type="radio"
            name="smiley"
            value="Happy"
            onChange={handleInputChange}
          />
          <label htmlFor="happy">high energy pleasant</label>
          <input
            id="normal"
            type="radio"
            name="smiley"
            value="Normal"
            onChange={handleInputChange}
          />
          <label htmlFor="normal">low energy pleasant</label>
          <br />
          <br />
          <br />
          <br />
          <input
            id="angry"
            type="radio"
            name="smiley"
            value="Angry"
            onChange={handleInputChange}
          />
          <label htmlFor="angry">low energy unpleasant</label>
          <input
            id="furious"
            type="radio"
            name="smiley"
            value="Furious"
            onChange={handleInputChange}
          />
          <label htmlFor="furious">high energy unpleasant</label>

          <div className="smiley">
            <div className="steam-container">
              <div className="squiggle-container squiggle-container-1">
                <div className="squiggle">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28.1 80.6"
                    style={{ enableBackground: "new 0 0 28.1 80.6" }}
                    xmlSpace="preserve"
                  >
                    <path
                      className=""
                      fill="none"
                      stroke-width="11"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
                    />
                  </svg>
                </div>
              </div>
              <div className="squiggle-container squiggle-container-2">
                <div className="squiggle">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28.1 80.6"
                    style={{ enableBackground: "new 0 0 28.1 80.6" }}
                    xmlSpace="preserve"
                  >
                    <path
                      className=""
                      fill="none"
                      stroke="#fff"
                      stroke-width="11"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
                    />
                  </svg>
                </div>
              </div>
              <div className="squiggle-container squiggle-container-3">
                <div className="squiggle">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28.1 80.6"
                    style={{ enableBackground: "new 0 0 28.1 80.6" }}
                    xmlSpace="preserve"
                  >
                    <path
                      className=""
                      fill="none"
                      stroke="#fff"
                      stroke-width="11"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth"></div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "73%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {selectedEmotion && (
            <Box>
              <h2>
                Select a word that best describes your current emotional state:
              </h2>
              <Table>
                <TableBody>
                  {chunkArray(getEmotionWords(selectedEmotion), 2).map(
                    ([word1, word2]) => (
                      <TableRow>
                        <TableCell onClick={() => setSelectedWord(word1)}>
                          {word1}
                        </TableCell>
                        <TableCell onClick={() => setSelectedWord(word2)}>
                          {word2}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
              <div
                style={{
                  position: "absolute",
                  top: "106%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {selectedWord && typeof selectedWord === "string" && (
                  <h3>It's okay to feel {selectedWord.toLowerCase()} today.</h3>
                )}
              </div>
            </Box>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SmileyFace;
