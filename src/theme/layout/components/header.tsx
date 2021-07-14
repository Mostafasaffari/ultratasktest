import clsx from "clsx";

import { FilterListIcon } from "../../../components/ui-kit/icons";
import { Typography } from "../../../components/ui-kit/typography";
import { AppBar, Toolbar } from "../../../components/ui-kit/appBar";
import { IconButton } from "../../../components/ui-kit/button";

import { useHeaderStyle } from "../layout.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}

const Header: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const classes = useHeaderStyle();
  return (
    <AppBar
      className={clsx(classes.appBar, { [classes.appBarShift]: showSidebar })}
    >
      <Toolbar>
        <div className={classes.wrap}>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <FilterListIcon />
          </IconButton>

          <Typography component="h1" className={classes.headerTitle}>
            Expert list
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export { Header };
