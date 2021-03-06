import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { drawerWidth } from "../layout.style";

const useHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: "rgba(0,0,0,0)",
      zIndex: theme.zIndex.drawer + 1,
      "& $filterButton": {
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
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
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
    filterButton: {
      background: "#0085FF",
      width: 30,
      height: 30,
      marginRight: 7,
      borderRadius: 5,
    },
    columnButton: {
      background: "#EDF3FF",
      width: 10,
      height: 10,
      borderRadius: 4,
      color: "#0C1446",
      marginLeft: 10,
    },
    headerTitle: {
      transition: "all 0.3s ease",
      fontSize: theme.spacing(2),
      textTransform: "capitalize",
      fontWeight: 700,
      color: "#000",
    },
    columnContainer: {
      width: 350,
      height: 300,
      position: "relative",

      "& .titleheader": {
        width: "100%",
        height: 70,
        background: "#F2F6F9",
        padding: theme.spacing(1, 2),
        display: "flex",
        alignItems: "center",
        "& .title": {
          color: "#0085FF",
        },
      },
      "& .selectColumn": {
        padding: theme.spacing(2),
        "& .MuiChip-root": {
          color: "#0C1446 !important",
          height: 20,
          background: "#fff",
          border: "1px solid #ddd",
        },
        "& .MuiSvgIcon-root": {
          display: "none",
        },
      },
      "& .actions": {
        display: "flex",
        justifyContent: "flex-end",
        padding: 10,
        position: "absolute",
        bottom: 10,
        right: 5,
        "& button:first-child": {
          marginRight: 10,
        },
      },
    },
    filterText: {
      marginLeft: theme.spacing(2),
    },
    clearFilterButton: {
      fontSize: 14,
      color: "red",
      "&:hover": {
        background: "#fff",
      },
      "& svg": {
        fill: "red",
        "&:hover": {
          fill: "#ccc",
        },
      },
    },
  })
);

export { useHeaderStyle };
