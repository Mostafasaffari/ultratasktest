import { Drawer } from "../../../components/ui-kit/appBar";

import { useSidebarStyles } from "../layout.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}
const SideBar: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const classes = useSidebarStyles();

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
      <div className={classes.swipeDrawerPaper}></div>
    </Drawer>
  );
};

export { SideBar };
