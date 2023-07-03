import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StyledCard = styled(Card)({
  display: "flex",
  maxWidth: 345,
  margin: "auto",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const AvatarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const AvatarText = styled(Typography)({
  marginLeft: "16px",
});

const VoteButton = styled(Button)({
  backgroundColor: "#4caf50",
  color: "white",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

function VotingCardLike(props) {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <StyledCard>
      <AvatarContainer>
        <Avatar src={props.avatar} alt={props.name} />
        <AvatarText variant="h6" component="h3" gutterBottom>
          {props.name}
        </AvatarText>
      </AvatarContainer>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: "20%" }}>
        <ThumbUpIcon color="primary" sx={{ fontSize: 40 }} />
      </CardActions>
    </StyledCard>
  );
}

export default VotingCardLike;
