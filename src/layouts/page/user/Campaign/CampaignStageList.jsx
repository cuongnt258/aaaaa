// import { filter } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { Card, Button, Typography, CardMedia, CardContent, CardActions, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCandidateByIdCampaign } from "context/redux/action/action";
import { Authen } from "context/authenToken/AuthenToken";
import { useContext } from "react";
import { handleGetCampaignById } from "context/redux/action/action";

export default function CampaignStageList() {
  //------------
  const { token } = useContext(Authen);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  //------------
  const stateList = useSelector((state) => {
    return state.campaignStage;
  });

  useEffect(() => {
    const callAPIgetList = async () => {
      dispatch(handleGetCampaignById(id, navigate));
    };
    callAPIgetList();
  }, [id]);

  const handleinvite = (id, token) => {
    dispatch(handleGetCandidateByIdCampaign(id, token));
    navigate("/user/detailcandidate");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: 2,
      }}
    >
      {stateList.map((card, index) => (
        <Grid item xs={6} md={4} key={index}>
          <Card
            sx={{
              maxWidth: 500,
              padding: "1rem 1rem 1rem 1rem",
              borderRadius: "18px",
            }}
          >
            <CardMedia
              sx={{
                height: 200,
                display: "cover",
              }}
              image="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/10/hinh-nen-dep-dien-thoai.jpg"
              title="green iguana"
            />
            <CardContent
              sx={{
                height: 120,
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {card.subtitle}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                "Hãy giúp chúng tôi bình chọn 1 người xứng đáng cho vị trí lớp trưởng"
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
                  handleinvite(card.campaignId, token);
                }}
              >
                Tham Gia
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
  );
}
