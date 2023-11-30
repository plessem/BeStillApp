import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MeetingScheduler from "./MeetingScheduler";
import dayjs from "dayjs";

const MeetingMain = () => {
  const [meetings, setMeetings] = useState([]);
  const [editingMeeting, setEditingMeeting] = useState(null);
  const [open, setOpen] = useState(false);

  
  function addMeeting(date, counselor) {
    setMeetings([...meetings, { date: date, counselor: counselor }]);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  function handleEditOpen(index) {
    const meetingToEdit = meetings[index];
    setEditingMeeting(meetingToEdit);
    setOpen(true);
  }

  function handleDelete(index) {
    const newMeetings = [...meetings];
    newMeetings.splice(index, 1);
    setMeetings(newMeetings);
    setEditingMeeting(null);
  }

  function handleSave(date, counselor) {
    if (editingMeeting) {
      const index =meetings.findIndex(meeting => meeting === editingMeeting);
      const newMeetings = [...meetings];
      newMeetings[index] = {date, counselor};
      
      setMeetings(newMeetings);
      setEditingMeeting(null);
    } else {
      addMeeting(date, counselor);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <Container sx={{ padding: '20px' }} maxWidth="sm">
        <MeetingScheduler open={open} setOpen={setOpen} saveMeeting={handleSave} meeting={editingMeeting}/>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{ marginBottom: '20px' }}
          >
          Schedule Meeting
        </Button>
        <TableContainer component = {Paper}>
          <Table sx={{ minWidth:500}} >
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Counselor</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {meetings.map((meeting, index) => (
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
                  <TableCell component="th" scope="meeting">
                    <IconButton onClick={() => handleEditOpen(index)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="meeting">
                    <IconButton onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
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
