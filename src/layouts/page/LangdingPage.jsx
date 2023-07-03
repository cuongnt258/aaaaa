import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Container, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeaderUnthor from "layouts/header/headerUnthor";
import Iconify from "assets/theme/components/icon/Iconify";
import logo from "assets/images/logos/LogoFVS.svg";
import ImageSlider from "components/Control/Silbar";
import Footer from "components/Footer/Footer";
//----------------------------------------------------------------

export default function PrimarySearchAppBar() {
  const footer = ["FPT Hồ Chí Minh", "FPT Hồ Chí Minh", "FPT Hồ Chí Minh", "FPT Hồ Chí Minh"];
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box>
        <HeaderUnthor />
        <Box
          sx={{
            height: "5%",
            backgroundColor: "#FFFFFF",
            width: "99%",
          }}
        ></Box>
        <Box>
          <h3 style={{ textAlign: "center", fontStyle: "normal" }}> Vì sao nên chọn chúng tôi ?</h3>
          <h1 style={{ textAlign: "center", maxWidth: "300" }}>
            Chúng tôi để để lại những chiến dịch bình chọn ứng cử viên không thể quên.
          </h1>
          <Container sx={{ display: "flex", marginTop: "2rem" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    borderRadius: "50%",
                    height: "4rem",
                    width: "4rem",
                    marginTop: "0.5rem",
                    marginLeft: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                  image="https://static.thenounproject.com/png/4038155-200.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bảo mật thông tin
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Thông tin của các bên liên quan sẽ được bảo mật tyệt đối
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, marginLeft: "3%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    borderRadius: "50%",
                    height: "4rem",
                    width: "4rem",
                    marginTop: "0.5rem",
                    marginLeft: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                  image="https://cdn.icon-icons.com/icons2/2066/PNG/512/check_mark_circle_icon_125343.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lựa chọn dễ dàng
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Với giao diện trực quan. Lựa chọn ứng củ viên thật dễ dàng.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, marginLeft: "3%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    height: "4rem",
                    width: "4rem",
                    marginTop: "0.5rem",
                    marginLeft: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                  image="https://cdn-icons-png.flaticon.com/512/684/684833.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Thông tin xác thực
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Người tham gia và các ứng cử viên đều là người thật.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, marginLeft: "3%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    height: "4.5rem",
                    width: "4rem",
                    marginTop: "0.5rem",
                    marginLeft: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                  image="https://img.uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-checkmark-line-icon.svg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tính chính xác kết quả
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Kết quả của các cuộc bình chọn là chính xác. Không có sự can thiệp
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
          <Box
            sx={{
              height: "5%",
              backgroundColor: "#FFFFFF",
              width: "99%",
              marginTop: "2%",
            }}
          ></Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card
                  sx={{
                    maxWidth: 400,
                    marginTop: "2%",
                    backgroundColor: "#5BD1D5",
                    marginLeft: "20%",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h2" component="div" color="#EFFAFB">
                        8000+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Biểu Mẫu
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card
                  sx={{
                    maxWidth: 400,
                    marginTop: "2%",
                    backgroundColor: "#FDF8EB",
                    marginLeft: "35%",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h2" component="div" color="#E8B63A">
                        10500+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Người dùng
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card
                  sx={{
                    maxWidth: 400,
                    marginTop: "2%",
                    backgroundColor: "#FFEEE9",
                    marginLeft: "22%",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h2" component="div" color="#FF5522">
                        500+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Chiến dịch
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ marginTop: "2%" }} variant="h3" component="div">
                  Tại sao nên dùng hệ thống VFS
                </Typography>
                <Typography gutterBottom variant="h5" color="text.secondary">
                  Chúng tôi mang đến sự thoải mái phù hợp nhu cầu cho bạn
                </Typography>
                <Typography
                  sx={{ marginTop: "2%", maxWidth: 500 }}
                  variant="body2"
                  color="text.secondary"
                >
                  Hệ thống bình chọn của chúng tôi cam kết mang đến sự thoải mái và phù hợp với nhu
                  cầu của bạn. Chúng tôi luôn tìm cách cải thiện trải nghiệm của người dùng và đưa
                  ra các giải pháp tốt nhất để đáp ứng nhu cầu của khách hàng.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              height: "5%",
              backgroundColor: "#FFFFFF",
              width: "99%",
              marginTop: "2%",
            }}
          ></Box>
          <Box></Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h5"
                color="text.secondary"
                sx={{ marginTop: "2%" }}
                textAlign={"center"}
              >
                Những ứng cử viên hàng đầu trong các chiến dịch
              </Typography>
              <Typography
                textAlign={"center"}
                sx={{ marginTop: "2%", maxWidth: 400, marginLeft: "38%" }}
                variant="body2"
                color="text.secondary"
              >
                Trong hệ thống bình chọn, chúng tôi luôn tìm kiếm những ứng cử viên hàng đầu để đảm
                bảo rằng quyền lợi và mong muốn của cộng đồng được đại diện một cách tốt nhất. Chúng
                tôi đánh giá các ứng cử viên dựa trên kinh nghiệm, năng lực, và cam kết của họ đối
                với các vấn đề quan trọng đang diễn ra. Sự lựa chọn của chúng tôi đảm bảo sự đa dạng
                và sự phù hợp với nhu cầu của cộng đồng.
              </Typography>
            </Grid>
            <Container sx={{ display: "flex" }}>
              <ImageSlider />
            </Container>
          </Grid>
          <Box sx={{ marginLeft: "20%" }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
}
