import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

import { InputBase } from "../../components/ui-kit/input";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      display: "flex",
      alignItems: "center",
    },
    avatarIcon: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      borderRadius: "50%",
      marginRight: theme.spacing(1),
    },
    buttonActions: {
      display: "flex",
      padding: theme.spacing(3, 3, 3, 0),
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 500,
      height: 450,
      "& $buttonActions": {
        justifyContent: "flex-end",
        paddingRight: theme.spacing(2),
      },
      "& .row": {
        display: "flex",
        width: "100%",
        height: 280,
        "& .col": {
          display: "flex",
          padding: theme.spacing(2),
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90%",
          "& div": {
            width: "100%",
          },
        },
      },
    },
    label: {
      display: "block",
      fontWeight: "bold",
    },
  })
);

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(0.5),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);
export { useStyles, BootstrapInput };
