import clsx from "clsx";

import { useState } from "react";
import { Header } from "./components/header";
import { SideBar } from "./components/sidebar";

import { useStyles } from "./layout.style";

interface IProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<IProps> = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setSidebar((p) => !p);
  };

  return (
    <div className={classes.root}>
      <Header toggleDrawer={toggleDrawer} showSidebar={sidebar} />
      <SideBar showSidebar={sidebar} toggleDrawer={toggleDrawer} />
      <main
        className={clsx(classes.mainContent, {
          [classes.mainContentShift]: sidebar,
        })}
      >
        <div className={classes.contentContainer}>{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
