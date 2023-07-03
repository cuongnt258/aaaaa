import React from "react";
import {
  Card,
  Button,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
  Box,
} from "@mui/material";
import ListQuestion from "../List Question/ListQuetion";
import Scrollbar from "components/Layout/Scrollbar";
import ListCandidate from "../List Candidate/ListCandidate";

function DetailCandidate() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <ListCandidate />
        </Paper>
      </Grid>
      {/* <Grid item xs={4}>
        <Paper>
          <Scrollbar>
            <ListQuestion />
          </Scrollbar>
        </Paper>
      </Grid> */}
    </Grid>
  );
}

export default DetailCandidate;
