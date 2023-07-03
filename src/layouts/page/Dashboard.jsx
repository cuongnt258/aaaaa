// import { filter } from "lodash";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Card,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Box,
} from "@mui/material";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
export default function CampaignCard() {
  const navigate = useNavigate();
  const handleinvite = () => {
    navigate("/user/detailcandidate");
  };
  const items = [
    {
      title: "Phạm Ngọc Long",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: " Chúng ta là siêu nhân !",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
    {
      title: "Huỳnh Ngọc Linh",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: "Dũng cảm lên, mọi thứ sẽ tốt thôi.",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
    {
      title: "Nguyễn Thanh Liêm",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: "Hãy làm nó theo cách của bạn.",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
    {
      title: "Nguyễn Xuân Thuân",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: "Chúng ta sẽ chiến thắng khi chúng ta muốn nó.",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
    {
      title: "Phạm Ngọc Long 1",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: " Chúng ta là siêu nhân !",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
    {
      title: "Huỳnh Ngọc Linh 1",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: "Dũng cảm lên, mọi thứ sẽ tốt thôi.",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
    {
      title: "Nguyễn Thanh Liêm 1",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: "Hãy làm nó theo cách của bạn.",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
    {
      title: "Nguyễn Xuân Thuân 1",
      subtitle: "Kĩ Thuật Phần Mềm",
      slogan: "Chúng ta sẽ chiến thắng khi chúng ta muốn nó.",
      image: "https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp",
    },
  ];
  return (
    <Box>
      <Box
        sx={{ marginLeft: "10%", marginTop: "2%", display: "flex", alignItems: "center", gap: 20 }}
      >
        <ButtonCustomize
          nameButton="Dễ thương"
          border="23px"
          borderRadius={"1px"}
          bgColor="#F6911B"
          width="100px"
          height="2.2rem"
          boxShadow="2"
          color="white"
        />
        <ButtonCustomize
          nameButton="Dễ thương"
          border="10px"
          borderRadius={"1px"}
          bgColor="#F6911B"
          width="100px"
          height="2.2rem"
          boxShadow="2"
          color="white"
        />
        <ButtonCustomize
          nameButton="Dễ thương"
          border="10px"
          borderRadius={"1px"}
          bgColor="#F6911B"
          width="100px"
          height="2.2rem"
          boxShadow="2"
          color="white"
        />
        <ButtonCustomize
          nameButton="Dễ thương"
          border="10px"
          borderRadius={"1px"}
          bgColor="#F6911B"
          width="100px"
          height="2.2rem"
          boxShadow="2"
          color="white"
        />
        <ButtonCustomize
          nameButton="Dễ thương"
          border="10px"
          borderRadius={"1px"}
          bgColor="#F6911B"
          width="100px"
          height="2.2rem"
          boxShadow="2"
          color="white"
        />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 2,
        }}
      >
        {items.map((card, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 356,
                padding: "1rem 1rem 1rem 1rem",
                borderRadius: "18px",
              }}
            >
              <CardMedia
                sx={{
                  height: 200,
                  display: "cover",
                }}
                image={card.image}
                title="green iguana"
              />
              <CardContent
                sx={{
                  height: 120,
                }}
              >
                <Typography gutterBottom variant="h4" component="div">
                  {card.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {card.subtitle}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  "{card.slogan}"
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
                  onClick={handleinvite}
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
    </Box>
  );
}
