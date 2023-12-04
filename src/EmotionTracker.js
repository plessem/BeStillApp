import React from "react";
import { Box, Container } from "@mui/material";
import SmileyFace from "./smileyFace";

const EmotionTracker = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        className="app-main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box style={{ minHeight: "50vh" }}>
          <SmileyFace />
        </Box>
      </Box>
    </Container>
  );
};

/* //   return (
//     <Container>
//       <Box className="app">
//         <Box className="app-header">
//           <Typography variant="h6">Emotion Tracker</Typography>
//         </Box>
//         <Box className="app-main">
//           {!emotion ? (
//             <Box onClick={() => handleEmotionClick("SmileyFace")}>
//               <SmileyFace />
//             </Box>
//           ) : (
//             <Box>
//               <Typography variant="h5">
//                 Get more specific about this {emotion} mood.{" "}
//               </Typography>
//               {emotion === "High Energy / Pleasant Emotions" && (
//                 <Table>
//                   <TableBody>
//                     {highEnergyPleasantEmotions.map((emotion, index) => (
//                       <TableRow
//                         key={index}
//                         onClick={() => handleDetailedEmotionClick(emotion)}
//                       >
//                         <TableCell>{emotion}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               )}
//               {emotion === "High Energy / Unpleasant Emotions" && (
//                 <Table>
//                   <TableBody>
//                     {highEnergyUnpleasantEmotions.map((emotion, index) => (
//                       <TableRow
//                         key={index}
//                         onClick={() => handleDetailedEmotionClick(emotion)}
//                       >
//                         <TableCell>{emotion}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               )}
//               {emotion === "Low Energy / Unpleasant Emotions" && (
//                 <Table>
//                   <TableBody>
//                     {lowEnergyUnpleasantEmotions.map((emotion, index) => (
//                       <TableRow
//                         key={index}
//                         onClick={() => handleDetailedEmotionClick(emotion)}
//                       >
//                         <TableCell>{emotion}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               )}
//               {emotion === "Low Energy / Pleasant Emotions" && (
//                 <Table>
//                   <TableBody>
//                     {lowEnergyPleasantEmotions.map((emotion, index) => (
//                       <TableRow
//                         key={index}
//                         onClick={() => handleDetailedEmotionClick(emotion)}
//                       >
//                         <TableCell>{emotion}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               )}
//               {detailedEmotion && (
//                 <Typography variant="h6">
//                   You're feeling: {detailedEmotion}
//                 </Typography>
//               )}
//             </Box>
//           )}
//         </Box>
//         <Box className="app-footer">© 2023 Our App</Box>
//       </Box>
//     </Container>
//   );
// };
 */

export default EmotionTracker;
