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
import { Grid, Paper } from "@mui/material";

const StyledCard = styled(Card)({
  display: "flex",
  maxWidth: 345,
  margin: "auto",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  "&:hover": { transform: "scale(1.02)" },
});
const AvatarContainer = styled("div")({ display: "flex", alignItems: "center" });
const AvatarText = styled(Typography)({ marginLeft: "16px" });
const VoteButton = styled(Button)({
  backgroundColor: "#4caf50",
  color: "white",
  "&:hover": { backgroundColor: "#388e3c" },
});
const StarButton = styled(Button)({
  padding: "0",
  minWidth: "unset",
  "&:hover": { backgroundColor: "transparent" },
});

function VotingCard(props) {
  const [rating, setRating] = useState(0);
  const handleClick = (value) => {
    setRating(value);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
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
              <div>
                {[...Array(5)].map((star, index) => {
                  const car1 = index + 1;
                  return (
                    <StarButton key={car1} onClick={() => handleClick(car1)}>
                      {car1 <= rating ? <StarIcon color="primary" /> : <StarBorderIcon />}
                    </StarButton>
                  );
                })}
              </div>
              {/* <ThumbUpIcon color="primary" sx={{ fontSize: 40 }} /> */}
            </CardContent>
            <CardActions>
              <VoteButton size="large"> Vote </VoteButton>
            </CardActions>
          </StyledCard>
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
              <div>
                {[...Array(5)].map((star, index) => {
                  const hihi = index + 1;
                  return (
                    <StarButton key={hihi} onClick={() => handleClick(hihi)}>
                      {hihi <= rating ? <StarIcon color="primary" /> : <StarBorderIcon />}
                    </StarButton>
                  );
                })}
              </div>
              {/* <ThumbUpIcon color="primary" sx={{ fontSize: 40 }} /> */}
            </CardContent>
            <CardActions>
              <VoteButton size="large"> Vote </VoteButton>
            </CardActions>
          </StyledCard>
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
              <div>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <StarButton key={ratingValue} onClick={() => handleClick(ratingValue)}>
                      {ratingValue <= rating ? <StarIcon color="primary" /> : <StarBorderIcon />}
                    </StarButton>
                  );
                })}
              </div>
              {/* <ThumbUpIcon color="primary" sx={{ fontSize: 40 }} /> */}
            </CardContent>
            <CardActions>
              <VoteButton size="large"> Vote </VoteButton>
            </CardActions>
          </StyledCard>
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
              <div>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <StarButton key={ratingValue} onClick={() => handleClick(ratingValue)}>
                      {ratingValue <= rating ? <StarIcon color="primary" /> : <StarBorderIcon />}
                    </StarButton>
                  );
                })}
              </div>
              {/* <ThumbUpIcon color="primary" sx={{ fontSize: 40 }} /> */}
            </CardContent>
            <CardActions>
              <VoteButton size="large"> Vote </VoteButton>
            </CardActions>
          </StyledCard>
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
              <div>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <StarButton key={ratingValue} onClick={() => handleClick(ratingValue)}>
                      {ratingValue <= rating ? <StarIcon color="primary" /> : <StarBorderIcon />}
                    </StarButton>
                  );
                })}
              </div>
              {/* <ThumbUpIcon color="primary" sx={{ fontSize: 40 }} /> */}
            </CardContent>
            <CardActions>
              <VoteButton size="large"> Vote </VoteButton>
            </CardActions>
          </StyledCard>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default VotingCard;
