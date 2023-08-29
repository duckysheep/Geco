import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardTemplate({ card }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Name: {card.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} component="div">
          Date of Birth: {card.dob}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>Email: {card.email}</Typography>
        <Typography sx={{ mb: 1.5 }}>Contact: {card.contact}</Typography>
        <Typography variant="body2">Information: {card.infoText}</Typography>
      </CardContent>
    </Card>
  );
}
