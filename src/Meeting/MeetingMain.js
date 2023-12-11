import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { DurationInput, createEvent } from 'ics';
import React, { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { LocalizationProvider } from "@mui/x-date-pickers";
import MeetingScheduler from "./MeetingScheduler";
import dayjs from "dayjs";

const MeetingMain = () => {
  const [meetings, setMeetings] = useState([]);
  const [editingMeeting, setEditingMeeting] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteMeetingIndex, setDeleteMeetingIndex] = useState(null);

  
  function addMeeting(date, counselor, note) {
    setMeetings([...meetings, { date: date, counselor: counselor, note: note }]);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClickDeleteOpen = () => {
    setOpenDeleteDialog(true);
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

  const handleDeleteConfirmation = (index) => {
    handleDelete(index);
    setOpenDeleteDialog(false);
  };
  
  const handleCancelDelete = () => {
    // Close delete dialog without performing delete action
    setOpenDeleteDialog(false);
  };

  function handleSave(date, counselor, note) {
    if (editingMeeting) {
      const index =meetings.findIndex(meeting => meeting === editingMeeting);
      const newMeetings = [...meetings];
      newMeetings[index] = {date, counselor, note};
      
      setMeetings(newMeetings);
      setEditingMeeting(null);
    } else {
      addMeeting(date, counselor, note);
    }
  }

  function downloadIcsFile(meeting) {
    const event = {
      start: [meeting.date.year(), meeting.date.month() + 1, meeting.date.date(), meeting.date.hour(), meeting.date.minute()],
      duration: { hours: 1 }, // adjust as needed
      title: 'Meeting with ' + meeting.counselor,
      description: meeting.note,
      organizer: { name: 'Meeting Scheduler', email: 'scheduler@example.com' }, // adjust as needed
      attendees: [
        { name: meeting.counselor, email: 'counselor@example.com' } // adjust as needed
      ],
    };
  
    createEvent(event, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }
  
      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'meeting.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <Container sx={{ padding: '20px' }} maxWidth="sm">
        <MeetingScheduler open={open} setOpen={setOpen} saveMeeting={handleSave} meeting={editingMeeting}/>
        <Tooltip title="Schedule Meeting">
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
            sx={{ marginBottom: '20px' }}
            >
            Schedule Meeting
          </Button>
        </Tooltip>
        <TableContainer component = {Paper}>
          <Table sx={{ minWidth:500}} >
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Counselor</TableCell>
                <TableCell></TableCell>
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
                    <Tooltip title="Add to Calendar">
                      <IconButton onClick={() => downloadIcsFile(meeting)}>
                        <InsertInvitationIcon/>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell component="th" scope="meeting">
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEditOpen(index)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell component="th" scope="meeting">
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleClickDeleteOpen(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Dialog
                      open={openDeleteDialog}
                      onConfirm={handleDeleteConfirmation}
                      onCancel={handleCancelDelete}
                      index={deleteMeetingIndex}
                    >
                      <DialogTitle>Delete Meeting</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Are you sure you want to delete this meeting?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCancelDelete}>Cancel</Button>
                        <Button onClick={() => handleDeleteConfirmation(deleteMeetingIndex)}>Delete</Button>
                      </DialogActions>
                    </Dialog>
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
