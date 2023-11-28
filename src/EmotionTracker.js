import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

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

const EmotionTracker = () => {
  const [emotion, setEmotion] = useState(null);
  const [detailedEmotion, setDetailedEmotion] = useState(null);

  const handleEmotionClick = (emotion) => {
    setEmotion(emotion);
  };

  const handleDetailedEmotionClick = (emotion) => {
    setDetailedEmotion(emotion);
  };

  return (
    <Box className="app">
      <Box className="app-header">
        <Typography variant="h6">Emotion Tracker</Typography>
      </Box>
      <Box className="app-main">
        {!emotion ? (
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridTemplateRows="repeat(2, 1fr)"
            gap={2}
          >
            <Box
              bgcolor="green"
              borderRadius="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() =>
                handleEmotionClick("High Energy / Pleasant Emotions")
              }
            >
              <Typography>High Energy / Pleasant Emotions</Typography>
            </Box>
            <Box
              bgcolor="red"
              borderRadius="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() =>
                handleEmotionClick("High Energy / Unpleasant Emotions")
              }
            >
              <Typography>High Energy / Unpleasant Emotions</Typography>
            </Box>
            <Box
              bgcolor="blue"
              borderRadius="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() =>
                handleEmotionClick("Low Energy / Pleasant Emotions")
              }
            >
              <Typography>Low Energy / Pleasant Emotions</Typography>
            </Box>
            <Box
              bgcolor="yellow"
              borderRadius="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() =>
                handleEmotionClick("Low Energy / Unpleasant Emotions")
              }
            >
              <Typography>Low Energy / Unpleasant Emotions</Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography variant="h5">
              Get more specific about this {emotion} mood.{" "}
            </Typography>
            {emotion === "High Energy / Pleasant Emotions" && (
              <Table>
                <TableBody>
                  {highEnergyPleasantEmotions.map((emotion, index) => (
                    <TableRow
                      key={index}
                      onClick={() => handleDetailedEmotionClick(emotion)}
                    >
                      <TableCell>{emotion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            {emotion === "High Energy / Unpleasant Emotions" && (
              <Table>
                <TableBody>
                  {highEnergyUnpleasantEmotions.map((emotion, index) => (
                    <TableRow
                      key={index}
                      onClick={() => handleDetailedEmotionClick(emotion)}
                    >
                      <TableCell>{emotion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            {emotion === "Low Energy / Unpleasant Emotions" && (
              <Table>
                <TableBody>
                  {lowEnergyUnpleasantEmotions.map((emotion, index) => (
                    <TableRow
                      key={index}
                      onClick={() => handleDetailedEmotionClick(emotion)}
                    >
                      <TableCell>{emotion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            {emotion === "Low Energy / Pleasant Emotions" && (
              <Table>
                <TableBody>
                  {lowEnergyPleasantEmotions.map((emotion, index) => (
                    <TableRow
                      key={index}
                      onClick={() => handleDetailedEmotionClick(emotion)}
                    >
                      <TableCell>{emotion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            {detailedEmotion && (
              <Typography variant="h6">
                You're feeling: {detailedEmotion}
              </Typography>
            )}
          </Box>
        )}
      </Box>
      <Box className="app-footer">© 2023 Our App</Box>
    </Box>
  );
};

export default EmotionTracker;
