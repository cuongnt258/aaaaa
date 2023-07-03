import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import CampaignStageList from "./CampaignStageList";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function CampaignStage() {
  const [searchTerm, setSearchTerm] = useState("");

  // const stateList = useSelector((state) => {
  //   return state.campaignStage;
  // });

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const { id } = useParams();

  return (
    <>
      <Card sx={{ maxheight: "100px", marginTop: "-2%" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBp3-DrQ2g6NbgtBg0AOobNA1MEY7MC4_OQ&usqp=CAU"
          sx={{ width: 75, height: 75 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Chào mừng bạn đến với chiến dịch này
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tại lớp "Software SE140482" có những ứng củ viên xuất xuất cho vị trí lớp trưởng. Hãy
            giúp chúng tôi bình chọn ra người xứng đáng nhất.
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "-2%" }}>
        {/* <TextField variant="outlined" label="Search by name" sx={{ mr: 1, mt: 1 }} /> */}
        {/* <Button variant="contained" color="primary" sx={{ mr: 1 }}>
        Filter
      </Button> */}
        {/* <Pagination sx={{ ml: 21 }} count={4} color="primary" /> */}

        {/* <Box sx={{ display: "flex", marginLeft: "2%", marginTop: "1%" }}>
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
        </Box> */}
        <CampaignStageList />
      </Box>
    </>
  );
}
