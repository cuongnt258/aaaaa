import { Link as RouterLink, useNavigate } from "react-router-dom";
import React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
// material
import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  LinearProgress,
} from "@mui/material";
import Page from "components/Layout/Page";
import { useContext } from "react";
import { Authen } from "context/authenToken/AuthenToken";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewPopUp from "components/Popup/NewPopUp";
import { useCallback } from "react";
import { GetCampaignbyUserId } from "context/redux/action/action";
import jwt_decode from "jwt-decode";

export default function CampaignOwenrList() {
  //   const handleinvite = () => {
  //     navigate("/user/allcampaign");
  //   };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#FFCC32"),
    backgroundColor: "#FFCC33",
    "&:hover": {
      backgroundColor: "#ffee32",
    },
    display: "center",
  }));

  const [OpenPopUp, SetOpenPopUp] = useState(false);

  const { token } = useContext(Authen);
  const decode = jwt_decode(token);
  // console.log(token + "token");
  // console.log(decode + "decode");
  const dispatch = useDispatch();
  useEffect(() => {
    const callAPI = async () => {
      await dispatch(GetCampaignbyUserId(decode.Username, token));
    };
    callAPI();
  }, [dispatch, token]);

  const campainOwner = useSelector((state) => {
    return state.campainOwner;
  });

  const handleClickOpen = useCallback(() => {
    SetOpenPopUp(true);
  }, []);

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <ColorButton
              variant="contained"
              // component={RouterLink}
              // to="#"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Thêm Chiến Dịch
            </ColorButton>
          </Typography>
        </Stack>
        <Box>
          {campainOwner.map((item) => {
            return (
              <Card sx={{ maxWidth: 1000, maxHeight: 400, paddingLeft: "1rem", marginTop: "2%" }}>
                <CardMedia
                  sx={{ height: 70 }}
                  image="https://media.istockphoto.com/id/165515133/vi/vec-to/voting-hands-and-ballot-box.jpg?s=1024x1024&w=is&k=20&c=VKlxd59_HCpxXXTHjcVsUK_IMEgw4D8yGtYkE5CIUgo="
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.userName}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    sx={{ borderRadius: 10, bgcolor: "primary.main", height: 10 }}
                  />
                  <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                    50%
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: "70%" }}>
                  <Button sx={{ marginLeft: "-4%" }} size="small">
                    <ColorButton>Chia sẻ</ColorButton>
                  </Button>
                  <Button type="button" size="small">
                    <ColorButton>Tham gia</ColorButton>
                  </Button>
                  <Button type="button" size="small">
                    <ColorButton>Cài đặt</ColorButton>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
      <NewPopUp OpenPopUp={OpenPopUp} SetOpenPopUp={SetOpenPopUp} />
    </Page>
  );
}
