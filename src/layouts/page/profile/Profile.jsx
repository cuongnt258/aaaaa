import React from "react";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
// import { useState } from "react";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "components/Card/Card";
import CardAvatar from "components/Card/CardAvatar";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import GridItem from "components/Grid/GridItem";
import Input from "components/Control/Input";
import CardHeader from "components/Card/CardHeader";
import Controls from "components/Control/Controls";
import CardFooter from "components/Card/CardFooter";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
};

const schema = yup.object().shape({
  fullName: yup.string().required().trim(),
  phone: yup.string().required().trim(),
  email: yup.string().required().trim(),
});

const useStyles = makeStyles(styles);
export default function Profile() {
  const navigate = useNavigate();
  const [valueStarTime, setValueStarTime] = React.useState(dayjs("2022-10-23T21:11:5"));
  const [input, setInput] = useState([]);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function _treat(e) {
    formik.setFieldValue("image", e.target.files[0]);

    setInput(URL.createObjectURL(e.target.files[0]));
  }

  // React.useEffect(() => {
  //   const callAPI = async () => {
  //     await dispatch(callAPIProfile(token));
  //   };
  //   callAPI();
  // }, [dispatch, token]);

  //   const profiles = useSelector((state) => {
  //     return state.userReducer.profiles;
  //   });

  const formData = new FormData();

  //   React.useEffect(() => {
  //     formik.setFieldValue("fullName", profiles.profile?.fullName);
  //     formik.setFieldValue("phone", profiles.phone);
  //     formik.setFieldValue("email", profiles.profile?.email);
  //     formik.setFieldValue("image", setInput(profiles.profile?.avatar));
  //     formik.setFieldValue("DOB", setValueStarTime(profiles.profile?.DOB));
  //   }, []);
  const formik = useFormik({
    //gắn schema để so sánh
    validationSchema: schema,
    validateOnMount: true,
    validateOnBlur: true,
    //khởi tạo kho để bỏ data vào
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      image: null,
    },

    onSubmit: async (values) => {
      const b = new Date(valueStarTime).toLocaleDateString().split("/");
      formData.append("avatar", formik.values.image);

      const data = {
        fullName: formik.values.fullName,
        email: formik.values.email,
        DOB: `${b[2]}-${b[1]}-${b[0]}`,
      };
    },
  });

  const classes = useStyles();
  return (
    <Paper>
      {/* <form onClick={formik.onSubmit} */}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4} sx={{ marginTop: "3%", marginLeft: "2%" }}>
              <Card profile>
                <CardAvatar profile>
                  {input != null ? (
                    <img src={input} alt="" width="220%" height="220%" object-fit="cover" />
                  ) : (
                    <img
                      src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg"
                      alt="hihi"
                    />
                    // <img src={formik.values.image} alt="hihi" />
                  )}
                </CardAvatar>

                <CardBody profile>
                  <h6 className={classes.cardCategory}>Hình đại diện</h6>
                  {/* <h4
                  className={classes.cardTitle}
                >{`${profiles.profile?.fullName}`}</h4>
                <p className={classes.description}>
                  Số điện thoại:{`${profiles.phone}`}
                </p>
                <p className={classes.description}>
                  Email:{`${profiles.profile?.email}`}
                </p>
                <p className={classes.description}>
                  DOB:
                  {`${new Date(profiles.profile?.DOB).toLocaleDateString()}`}
                </p> */}
                  <label htmlFor="contained-button-file">
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      name="image"
                      type="file"
                      display="none"
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      onChange={_treat}
                    />

                    <ButtonCustomize
                      variant="contained"
                      component="span"
                      nameButton="Tải ảnh"
                      sx={{
                        marginLeft: "20%",
                      }}
                    />
                  </label>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={7.5} sx={{ marginTop: "3%" }}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Chỉnh sửa trang cá nhân</h4>

                  <p>FVS Voting System</p>
                </CardHeader>
                <CardBody>
                  <Box
                    sx={{
                      float: "left",
                      width: "50%",
                      flexGrow: 1,
                      mt: "2rem",
                      marginLeft: "8rem",
                    }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid container spacing={1.5}>
                      <Grid item xs={12}>
                        <Controls.Input
                          variant="outlined"
                          name="phone"
                          label="Số điện thoại"
                          width="24rem"
                          disabled
                          value={formik.values.phone || ""}
                          /// để nó ghi nhận sự thay đổi
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                        />
                        {/* nếu sai thì nó đỏ */}
                        {formik.touched.phone && formik.errors.phone && (
                          <FormHelperText error id="standard-weight-helper-text-username-login">
                            {formik.errors.phone}
                          </FormHelperText>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Controls.Input
                          variant="outlined"
                          name="fullName"
                          label="Họ và tên"
                          width="24rem"
                          value={formik.values.fullName || ""}
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                        />
                        {/* nếu sai thì nó đỏ */}
                        {formik.touched.fullName && formik.errors.fullName && (
                          <FormHelperText error id="standard-weight-helper-text-username-login">
                            {formik.errors.fullName}
                          </FormHelperText>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Controls.Input
                          variant="outlined"
                          name="email"
                          label="Email"
                          width="24rem"
                          value={formik.values.email}
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <FormHelperText
                            error={false}
                            id="standard-weight-helper-text-username-login"
                          >
                            {formik.errors.email}
                          </FormHelperText>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Controls.DatePicker
                          label="Ngày tháng năm sinh"
                          name="DOB"
                          width="28rem"
                          inputFormat="DD-MM-YYYY"
                          value={valueStarTime}
                          onChange={(e) => {
                            setValueStarTime(e);
                          }}
                        />
                      </Grid>

                      <Box>
                        <Stack width="200px" marginTop={"2rem"} ml={"4rem"} mb={"1rem"}>
                          <ButtonCustomize
                            variant="contained"
                            type="submit"
                            nameButton="Cập nhập"
                          />
                        </Stack>
                      </Box>
                    </Grid>
                  </Box>
                </CardBody>
                <CardFooter>{/* <Button color="primary">Update Profile</Button> */}</CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </form>
      </div>
    </Paper>
  );
}
