import { Button, Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { orange } from "@mui/material/colors";
import Iconify from "assets/theme/components/icon/Iconify";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: orange[500],
    height: "2.5rem",

    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: orange[700],
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const GoogleButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={onClick}
      startIcon={<Iconify icon="ri:google-fill" />}
      sx={{}}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
