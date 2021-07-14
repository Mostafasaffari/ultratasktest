import { useSelector } from "react-redux";

import { AppState } from "../../../redux/store";

import { Drawer } from "../../../components/ui-kit/appBar";
import { FilterListIcon, CloseIcon } from "../../../components/ui-kit/icons";
import { Typography } from "../../../components/ui-kit/typography";
import { IconButton } from "../../../components/ui-kit/button";

import { useSidebarStyles } from "../layout.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}
const SideBar: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const classes = useSidebarStyles();

  const { usersList } = useSelector((state: AppState) => {
    return {
      usersList: state.User.users,
    };
  });

  return (
    <Drawer
      onClose={toggleDrawer}
      open={showSidebar}
      anchor="left"
      className={classes.drawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.swipeDrawerPaper}>
        <div className={classes.headerDrawer}>
          <IconButton
            className={classes.filterButton}
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <FilterListIcon />
          </IconButton>

          <Typography component="h1" variant="h5">
            Filters
            <Typography component="h6" variant="caption">
              Pick or search by the filters below.
            </Typography>
          </Typography>
          <IconButton
            className={classes.closeButton}
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </Drawer>
  );
};

export { SideBar };
