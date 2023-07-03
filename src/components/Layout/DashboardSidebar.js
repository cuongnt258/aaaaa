import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Link, Button, Drawer, Typography, Avatar, Stack, IconButton } from "@mui/material";

import navConfig from "./NavConfig";
import { makeStyles } from "@mui/styles";
import NavSection from "./NavSection";
import useResponsive from "./useResponsive";
import Scrollbar from "./Scrollbar";
import { Authen } from "../../context/authenToken/AuthenToken";
import logo from "../../assets/images/logos/LogoFVS.svg";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
  onOpenSidebar: PropTypes.func,
};

export default function DashboardSidebar({
  onOpenSidebar,
  isOpenSidebar,
  onCloseSidebar,
  handleClickOpen,
  open,
}) {
  const { pathname } = useLocation();

  const { decode } = useContext(Authen);

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": { height: 1, display: "flex", flexDirection: "column" },
      }}
    >
      <Box sx={{ px: 2, py: 3, display: "inline-flex" }}>
        {/* <IconButton onClick={handleClickOpen} sx={{ mr: 1, color: "text.primary" }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton> */}
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="campaign">
          <AccountStyle>
            <Avatar src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="photoURL" />
            <Box sx={{ ml: 4 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                Trang Chủ
              </Typography>
              {/* <Typography variant="body1" sx={{ color: "text.primary" }}>
                {decode?.RoleName}
              </Typography> */}
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ borderRadius: 2, position: "relative" }}>
          <Avatar sx={{ width: 400, height: 200 }} src={logo} />
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && open === false ? (
        <Drawer
          open
          // handleClickOpen
          display="flex"
          isOpenSidebar
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
              position: "absolute",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <></>
      )}
    </RootStyle>
  );
}
