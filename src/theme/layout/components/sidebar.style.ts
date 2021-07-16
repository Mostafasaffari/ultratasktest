import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { drawerWidth } from "../layout.style";

const useSidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    swipeDrawerPaper: {
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      boxShadow: "5px 0 5px -6px #888",
    },
    headerDrawer: {
      display: "flex",
      position: "relative",
      width: "100%",
      padding: theme.spacing(3),
      "& svg": {
        fill: "#fff",
        "&:hover": {
          fill: "#000",
        },
      },
    },
    filterButton: {
      background: "#0085FF",
      width: 30,
      height: 30,
      marginRight: 7,
      borderRadius: 5,
    },
    closeButton: {
      position: "absolute",
      top: 5,
      right: 5,
      "&:hover": {
        background: "#fff",
      },
      "& svg": {
        fill: "#000",
        "&:hover": {
          fill: "#ccc",
        },
      },
    },
    filters: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
      justifyContent: "space-around",
      "& .MuiAutocomplete-root": {
        padding: "10px 0",
      },
    },
    hourlyRateFilter: {
      display: "flex",
      flexDirection: "column",
      marginTop: theme.spacing(1),
      "& >div": {
        display: "flex",
        marginTop: theme.spacing(1),
        "& input": {
          width: 70,
          height: 30,
          margin: theme.spacing(0, 2),
          "&:first-child": {
            marginLeft: theme.spacing(0),
          },
        },
      },
    },
  })
);

export { useSidebarStyles };
