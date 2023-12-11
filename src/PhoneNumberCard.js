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
  const { category, phoneNumber, website } = props;

  return (
    <div>
      <Card>
        <CardHeader title={category} />
        <CardActions>
          <Button size="small" startIcon={<PhoneIcon />}>
            {phoneNumber}
          </Button>
          {website && (
            <Button size="small" href={website} target="_blank">
              Visit Website
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default PhoneNumberCard;
