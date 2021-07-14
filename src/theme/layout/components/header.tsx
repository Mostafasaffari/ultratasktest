import clsx from "clsx";
import { useState } from "react";

import {
  FilterListIcon,
  ExpandMoreIcon,
} from "../../../components/ui-kit/icons";
import { Popover } from "../../../components/ui-kit/popover";
import { Typography } from "../../../components/ui-kit/typography";
import { Button, IconButton } from "../../../components/ui-kit/button";
import { AppBar, Toolbar } from "../../../components/ui-kit/appBar";

import { useHeaderStyle } from "../layout.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}

const Header: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const [columnsFilterPopover, setColumnsFilterPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const classes = useHeaderStyle();

  const handleColumnsShow = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setColumnsFilterPopover(true);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setColumnsFilterPopover(false);
    setAnchorEl(null);
  };

  const handleApplyColumns = () => {};

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppBar
      className={clsx(classes.appBar, { [classes.appBarShift]: showSidebar })}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.wrap}>
          <IconButton
            className={classes.filterButton}
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <FilterListIcon />
          </IconButton>

          <Typography component="h1" className={classes.headerTitle}>
            Expert list
          </Typography>
        </div>
        <div></div>
        <div>
          <Typography component="strong" className={classes.headerTitle}>
            Columns
          </Typography>
          <IconButton
            className={classes.columnButton}
            aria-label="Menu"
            onClick={handleColumnsShow}
          >
            <ExpandMoreIcon />
          </IconButton>

          <Popover
            id={id}
            open={columnsFilterPopover}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className={classes.columnContainer}>
              <div className="titleheader">
                <Typography component="h4" className="title">
                  Show or hide columns
                </Typography>
              </div>
              <div></div>
              <div className="actions">
                <Button onClick={handlePopoverClose}>Cancel</Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleApplyColumns}
                >
                  Apply
                </Button>
              </div>
            </div>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export { Header };
