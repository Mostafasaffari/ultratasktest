import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: "#fff",
    },
    mainContent: {
      flexGrow: 0,
      margin: "80px 20px",
      height: "calc(100vh - 140px)",
      width: "100%",
      marginLeft: -drawerWidth + 20,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    mainContentShift: {
      marginLeft: 20,
    },

    contentContainer: {},
  })
);

export { useStyles };
