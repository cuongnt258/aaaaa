import { Link as RouterLink, useLocation, useNavigate, useParams } from "react-router-dom";
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
  Icon,
} from "@mui/material";
import QRPopUp from "components/Popup/QRPopUp";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Page from "components/Layout/Page";
import { useContext } from "react";
import { Authen } from "context/authenToken/AuthenToken";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPIgetListCampaigns, handleGetCampaignById } from "context/redux/action/action";
import NewPopUp from "components/Popup/NewPopUp";
import { useCallback } from "react";
import BadgeAvatars from "./icontop/icontop";
import Iconify from "assets/theme/components/icon/Iconify";

export const createAction = ({ type, payload }) => {
  return { type, payload };
};

export default function CampaignList() {
  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  const param = useParams();
  const location = useLocation;
  const navigate = useNavigate();
  const [qrCodeUrl, setQRCodeUrl] = useState("");
  const [Link, setLink] = useState(window.location.href);
  const [open, setopen] = useState(false);

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
  const dispatch = useDispatch();
  useEffect(() => {
    const callAPI = async () => {
      await dispatch(callAPIgetListCampaigns(token));
    };
    callAPI();
  }, [dispatch, token]);

  const campaigns = useSelector((state) => {
    return state.campaigns;
  });
  const handleGetQR = (id) => {
    setopen(true);
    setLink(window.location.href + "/" + id);
  };
  console.log(campaigns.campaignId);

  const handleClickOpen = useCallback(() => {
    SetOpenPopUp(true);
  }, []);
  console.log(location.pathname);

  const handleCampaignStage = async (id, navigate) => {
    await dispatch(handleGetCampaignById(id, navigate));
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

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
          {campaigns.map((item) => {
            return (
              <Card sx={{ maxWidth: 1000, maxHeight: 400, paddingLeft: "1rem" }}>
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
                    value={10}
                    sx={{ borderRadius: 10, bgcolor: "primary.main", height: 10 }}
                  />
                  <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                    50%
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <BadgeAvatars
                      BadgeAvatars={getIcon("icon-sl:square")}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oYLzVhre_UBu4mPsjYf9EUh9mhvwXApssaTHmLjyfw&s"
                    />
                    <BadgeAvatars
                      BadgeAvatars={getIcon("icon-park-outline:gold-medal")}
                      src="https://cdn.pixabay.com/photo/2016/06/05/01/41/african-american-1436661_960_720.jpg"
                    />

                    <BadgeAvatars
                      BadgeAvatars={getIcon("icon-park-outline:gold-medal")}
                      src="https://congluan-cdn.congluan.vn/files/content/2022/03/02/1-09505723.jpg"
                    />
                  </Box>
                </CardContent>
                <CardActions sx={{ marginLeft: "80%" }}>
                  <Button
                    sx={{ marginLeft: "-4%" }}
                    onClick={() => handleGetQR(item.campaignId)}
                    size="small"
                  >
                    <ColorButton>Chia sẻ</ColorButton>
                  </Button>
                  <Button
                    type="button"
                    size="small"
                    onClick={() => {
                      handleCampaignStage(item.campaignId, navigate);
                    }}
                  >
                    <ColorButton>Tham gia</ColorButton>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
      <QRPopUp OpenPopUp={open} SetOpenPopUp={setopen} link={Link} />;
      <NewPopUp OpenPopUp={OpenPopUp} SetOpenPopUp={SetOpenPopUp} />
    </Page>
  );
}
