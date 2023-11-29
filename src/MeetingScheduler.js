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
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const MeetingScheduler = () => {
  const [meetings, setMeetings] = useState([]);


  function addMeeting(date) {
    setMeetings([...meetings, { date: date.format("YYYY-MM-DD HH:mm") }]);
  }
  
  function handleAccept(e) {
    addMeeting(e)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <Container maxWidth="sm">
        <h1>Meeting Scheduler</h1>
        <StaticDateTimePicker onAccept={(e) => handleAccept(e)} defaultValue={dayjs('2022-04-17T15:30')} label="When to schedule" />
        <TableContainer component = {Paper}>
          <Table sx={{ minWidth: 650}} >
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {meetings.map((meeting) => (
                <TableRow
                  key={meeting.date}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="meeting">
                    {meeting.date}
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

export default MeetingScheduler;
