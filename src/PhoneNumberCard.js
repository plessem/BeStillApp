import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";

const PhoneNumberCard = (props) => {
  const { category, phoneNumber } = props;

  return (
    <div>
      <Card>
        <CardHeader title={category} />
        <CardContent></CardContent>
        <CardActions>
          <Button size="small" startIcon={<PhoneIcon />}>
            {phoneNumber}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PhoneNumberCard;
