import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: "#fff",
    },
    mainContent: {
      flexGrow: 0,
      margin: "70px 20px",
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

const useHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: "rgba(0,0,0,0)",
      zIndex: theme.zIndex.drawer + 1,
      "& $menuButton": {
        zIndex: 10,
      },
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    wrap: {
      display: "flex",
      alignItems: "center",
      "& svg": {
        fill: "#fff",
        "&:hover": {
          fill: "#000",
        },
      },
    },
    menuButton: {
      background: "#0085FF",
      width: 30,
      height: 30,
      marginRight: 7,
      borderRadius: 5,
    },
    headerTitle: {
      transition: "all 0.3s ease",
      fontSize: theme.spacing(2),
      textTransform: "capitalize",
      fontWeight: 700,
      color: "#000",
    },
  })
);

const useSidebarStyles = makeStyles(() =>
  createStyles({
    swipeDrawerPaper: {
      width: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

export { useStyles, useHeaderStyle, useSidebarStyles };
