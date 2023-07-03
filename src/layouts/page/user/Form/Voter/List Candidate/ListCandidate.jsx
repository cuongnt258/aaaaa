// import { filter } from "lodash";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import {
  Card,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Iconify from "assets/theme/components/icon/Iconify";
import Box from "@mui/material/Box";
import Select from "components/Control/Select";
import { styled } from "@mui/material/styles";
import QuestionPopUp from "components/Popup/QuestionPopUp";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetQuestByIdCampaign } from "context/redux/action/action";
import { Authen } from "context/authenToken/AuthenToken";

export default function ListCandidate() {
  const [OpenPopUp, SetOpenPopUp] = useState(false);
  const [idForm, setIdForm] = useState();
  const { token } = useContext(Authen);
  const dipatch = useDispatch();
  const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(["box-shadow", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": { width: 320, boxShadow: theme.customShadows.z8 },
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  }));
  const candidateList = useSelector((state) => {
    return state.candidateList;
  });

  const state = useSelector((state) => {
    return state.campaignStage;
  });

  const hanlleAuthenVote = () => {
    const token = localStorage.getItem("token");
    try {
      const decoded = jwt_decode(token);
      if (token === null) {
        // popups ' ban chua dang nhap cam ==> login
      } else if (token && !decoded.RoleName) {
        // popups 'authention ban khong xin' ==> login
      } else if (roles.includes(decoded.RoleName)) {
        // vote goi api vote o day
      }
    } catch (error) {
      // error sommingthing
    }
  };

  // lấy ID form
  const getIdForm = () => {
    for (let index = 0; index < state.length; index++) {
      return state[0].formId;
    }
  };

  const hanldeGetQuestion = async (token) => {
    await dipatch(handleGetQuestByIdCampaign(getIdForm(), token));
    SetOpenPopUp(true);
  };

  const navigate = useNavigate();
  const handleinvite = () => {
    navigate("/user/detailcandidate");
  };

  const getOptions = () => [
    { id: "active", title: "Đang hoạt động" },
    { id: "inActive", title: "Trạng thái ẩn" },
    { id: "All", title: "Không hoạt động" },
  ];
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchStyle
          value=""
          onChange=""
          placeholder="Tìm kiếm..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
        <Pagination sx={{ ml: 25 }} count={4} color="primary" />

        <Box sx={{ marginTop: "1%", marginLeft: "20%" }}>
          <Select
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
        </Box>
      </Box>
      <Grid container spacing={1}>
        {candidateList.map((card, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 356,
                padding: "1rem 2rem 1rem 1rem",
                borderRadius: "18px",
                border: "1px solid #ccc",
              }}
            >
              <CardMedia
                sx={{
                  height: 340,
                  display: "cover",
                }}
                image={card?.avatarUrl}
                title="green iguana"
                border="2px red"
              />
              <CardContent
                sx={{
                  height: 120,
                }}
              >
                <Typography gutterBottom variant="h4" component="div">
                  {card.fullName}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {/* {card.email}SE140842 */}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {/* "{card.gender}" */}"Đẹp trai nhất lớp"
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    position: "relative",
                    left: "-1rem",
                    bottom: "-1rem",
                    display: "inline - flex",
                    width: "9rem",
                    height: "3rem",
                    background: "var(--10)",
                    color: "var(--badge-text)",
                    backgroundColor: "#ffcc33",
                    boxShadow: "0 0 0.2rem 0.1rem var(--card-bg)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "30px",
                    marginLeft: "1rem",
                    fontSize: "1rem",
                    fontWeight: "700",
                    border: "0",
                  }}
                  onClick={() => {
                    hanldeGetQuestion(token);
                  }}
                >
                  Bình chọn
                </Button>
                <Button
                  sx={{
                    right: "-4rem",
                    bottom: "-1rem",
                  }}
                  size="small"
                >
                  Chi tiết
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <QuestionPopUp SetOpenPopUp={SetOpenPopUp} OpenPopUp={OpenPopUp} />
    </Box>
  );
}
