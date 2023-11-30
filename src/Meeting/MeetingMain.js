import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MeetingScheduler from "./MeetingScheduler";
import dayjs from "dayjs";

const MeetingMain = () => {
  const [meetings, setMeetings] = useState([]);
  const counselors = [
    "Camryn Bailey",
    "Trevor McGeer",
    "Karsyn Perkins",
    "Paige Weaver",
    "Kylee Holmes",
    "Erik Velez",
  ];

  
  function addMeeting(date, counselor) {
    setMeetings([...meetings, { date: date, counselor: counselor }]);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <Container maxWidth="sm">
        <MeetingScheduler addMeeting={addMeeting}/>
        <TableContainer component = {Paper}>
          <Table sx={{ minWidth:500}} >
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Counselor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {meetings.map((meeting) => (
                <TableRow
                  key={meeting.date}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="meeting">
                    {meeting.date.format("dddd, MMMM D, YYYY")}
                  </TableCell>
                  <TableCell component="th" scope="meeting">
                    {meeting.date.format("h:mm A")}
                  </TableCell>
                  <TableCell component="th" scope="meeting">
                    {meeting.counselor}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </LocalizationProvider>
  );
};

export default MeetingMain;
