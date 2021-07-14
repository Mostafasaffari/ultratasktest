import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
  })
);

export { useStyles };
