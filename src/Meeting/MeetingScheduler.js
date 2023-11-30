import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import React, { Fragment, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const MeetingScheduler = ({ addMeeting, meeting }) => {
  const [date, setDate] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const [counselor, setCounselor] = useState("");

  const counselors = [
    "Camryn Bailey",
    "Trevor McGeer",
    "Karsyn Perkins",
    "Paige Weaver",
    "Kylee Holmes",
    "Erik Velez",
  ];

  const handleAddMeeting = (date, counselor) => {
    addMeeting(date, counselor);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleAccept(date, counselor) {
    handleAddMeeting(date, counselor);
    handleClose();
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Fragment>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Schedule Meeting
        </Button>
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
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Counselor
              </InputLabel>
              <NativeSelect
                defaultValue={""}
                inputProps={{
                  name: "counselor",
                  id: "uncontrolled-native",
                }}
                onChange={(e) => setCounselor(e.target.value)}
              >
                <option value="" disabled hidden>
                </option>
                {counselors.map((listcounselor) => (
                  <option value={listcounselor}>{listcounselor}</option>
                ))}
              </NativeSelect>
            </FormControl>
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
