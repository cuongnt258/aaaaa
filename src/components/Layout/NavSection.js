import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";
// material
import { useTheme, styled } from "@mui/material/styles";
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from "@mui/material";
import Iconify from "assets/theme/components/icon/Iconify";
import { Authen } from "../../context/authenToken/AuthenToken";
import jwt_decode from "jwt-decode";
// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: "relative",
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    ":hover": {
      backgroundColor: "#f0ff23",
      color: "black",
    },
  })
);

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
};

function NavItem({ item, active }) {
  const theme = useTheme();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info, children, subItems } = item;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: "white",
    fontWeight: "fontWeightMedium",
    bgcolor: "#FFCC33",
  };

  const activeSubStyle = {
    color: "#FFCC33",
    fontWeight: "fontWeightMedium",
  };

  if (children || subItems) {
    return (
      <>
        {/* menu multipe  */}
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>
        {/* map với navConfig */}
        {(children || subItems) && (
          <Collapse in={open} timeout="auto">
            {children && (
              <List component="div" disablePadding sx={{ left: "3%" }}>
                {children.map((child) => (
                  <NavItem key={child.title} item={child} active={active} />
                ))}
              </List>
            )}
            {subItems && (
              <List component="div" disablePadding sx={{ left: "6%" }}>
                {subItems.map((subItem) => (
                  <ListItemStyle
                    key={subItem.title}
                    component={RouterLink}
                    to={subItem.subPath}
                    sx={{
                      ...(active(subItem.subPath) && activeSubStyle),
                      // ...active(subItem.subPath),
                    }}
                  >
                    <ListItemIconStyle>
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          display: "flex",
                          borderRadius: "50%",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "text.disabled",
                          transition: (theme) => theme.transitions.create("transform"),
                          ...(active(subItem.subPath) && {
                            transform: "scale(2)",
                            bgcolor: "primary.main",
                          }),
                        }}
                      />
                      <ListItemIconStyle>{subItem.icons && subItem.icons}</ListItemIconStyle>
                    </ListItemIconStyle>
                    <ListItemText disableTypography primary={subItem.title} />
                  </ListItemStyle>
                ))}
              </List>
            )}
          </Collapse>
        )}
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
};

//NavSection
export default function NavSection({ navConfig, navConfigUser, ...other }) {
  const { pathname } = useLocation();
  const checkRole = () => {
    const { token, decode } = useContext(Authen);

    switch (decode.RoleName) {
      case "admin":
        return navConfig.navConfig;
      case "user":
        return navConfig.navConfigUser;
      default:
        return navConfig.navConfigUser;
    }
  };

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {checkRole()?.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
