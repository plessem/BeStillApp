import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const MeetingScheduler = (props) => {
  const { saveMeeting, meeting, open, setOpen } = props;
  const [date, setDate] = useState(meeting ? meeting.date : dayjs());
  const [counselor, setCounselor] = useState(meeting ? meeting.counselor : "");
  const [note, setNote] = useState(meeting ? meeting.note : "");

  const counselors = [
    "Camryn Bailey",
    "Trevor McGeer",
    "Karsyn Perkins",
    "Paige Weaver",
    "Kylee Holmes",
    "Erik Velez",
  ];
  // Inside MeetingScheduler component
  useEffect(() => {
    setCounselor(meeting ? meeting.counselor : "");
  }, [meeting]);
  
  const handleSave = () => {
    saveMeeting(date, counselor, note);
  };

  const handleClose = () => {
    setDate(dayjs());
    setCounselor("");
    setNote("");
    setOpen(false);
  };

  function handleAccept(date, counselor, note) {
    handleSave(date, counselor);
    setDate(dayjs());
    setCounselor("");
    handleClose();
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Fragment>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Schedule Meeting</DialogTitle>
          <DialogContent>
            <StaticDateTimePicker
              defaultValue={dayjs()}
              onChange={(date) => setDate(date)}
              slotProps={{
                actionBar: {
                  actions: [],
                },
              }}
              minDateTime={dayjs()}
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Counselor
              </InputLabel>
              <NativeSelect
                value={counselor}
                inputProps={{
                  name: "counselor",
                  id: "uncontrolled-native",
                }}
                onChange={(e) => setCounselor(e.target.value)}
              >
                <option value="" disabled hidden></option>
                {counselors.map((listcounselor) => (
                  <option value={listcounselor}>{listcounselor}</option>
                ))}
              </NativeSelect>
            </FormControl>
            <TextField
              sx={{ mt: 2 }}
              multiline
              rows={4}
              fullWidth
              label="Appointment notes"
              defaultValue={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleAccept(date, counselor)}>OK</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </LocalizationProvider>
  );
};

export default MeetingScheduler;
