import { useContext, useEffect, useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from "@mui/material";
import MenuPopover from "./MenuPopover";
import { useDispatch, useSelector } from "react-redux";
import { Authen } from "../../context/authenToken/AuthenToken";
// ----------------------------------------------------------------------
import jwt_decode from "jwt-decode";
import { isFirstDayOfMonth } from "date-fns/esm";
const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    linkTo: "/",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    linkTo: "/user/profile",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
    linkTo: "#",
  },
];

// ----------------------------------------------------------------------

const WIDTH = 170;

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const dispatch = useDispatch();
  const { token } = useContext(Authen);

  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const hanldenullToken = () => {
    const isNonPeople = "Ẩn danh";
    const arr = [];
    if (token === null || token === undefined || !token) {
      return isNonPeople;
    } else {
      const decode = jwt_decode(token);
      arr.push(decode);
      return arr;
    }
  };
  hanldenullToken();

  console.log(hanldenullToken()[0]);

  const handleClose = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleCloseNotion = (event) => {
    setOpen(!open);
  };
  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        disableRipple
        sx={{
          variant: "contained",
          py: "-200px",

          ...(open && {
            "&:before": {
              variant: "contained",
            },
          }),
          "&.MuiIconButton-root": {
            ":hover": { backgroundColor: "transparent" },
          },
        }}
      >
        <Avatar
          src="/"
          alt="photoURL"
          sx={{
            zIndex: "modal",
            position: "absolute",
            left: `${
              (hanldenullToken()[0]?.Username || hanldenullToken()[0]?.Email)?.length * 0.03
            }%`,
            // left: 3,
          }}
        />
        <Box
          paddingLeft="3rem"
          paddingTop="0.4em"
          sx={{
            // width: `${(decode?.Username || decode?.Email)?.length * 20}%`,
            height: 40,
            borderRadius: 4,
            zIndex: "toolip",
            marginRight: "2%",
          }}
        >
          <Typography variant="h5">
            {hanldenullToken()[0]?.Username || hanldenullToken()[0]?.Email}
          </Typography>
        </Box>
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseNotion}
        sx={{
          p: 0,
          mt: 1.5,
          ml: -5,
          "&.MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {hanldenullToken()[0]?.Username}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {hanldenullToken()[0]?.RoleName}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={handleCloseNotion}
            >
              {option.label}
            </MenuItem>
          ))}
          {/* <MenuItem component={RouterLink} to="/profile">
            Profile
          </MenuItem> */}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
