import clsx from "clsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IColumnUser } from "../../../entities/user";

import { hasFilter } from "../../../helpers/filterArray";

import { AppState } from "../../../redux/store";
import userActions from "../../../redux/user/actions";

import {
  FilterListIcon,
  ExpandMoreIcon,
  CancelIcon,
} from "../../../components/ui-kit/icons";
import { Popover } from "../../../components/ui-kit/popover";
import { Typography } from "../../../components/ui-kit/typography";
import { AppBar, Toolbar } from "../../../components/ui-kit/appBar";
import { Button, IconButton } from "../../../components/ui-kit/button";
import { SelectItems } from "../../../components/shared/selectItems/selectItems";

import { useHeaderStyle } from "./header.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}

const Header: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const [columnsFilterPopover, setColumnsFilterPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [newColumnValue, setNewColumnValue] = useState<string[]>([]);

  const dispatch = useDispatch();
  const { userColumns, userFilterCount, filters } = useSelector(
    (state: AppState) => {
      return {
        userColumns: Object.keys(state.User.columns),
        userFilterCount: state.User.userFilterCount,
        filters: state.User.filters,
      };
    }
  );

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

  const handleApplyColumns = () => {
    if (newColumnValue.length) {
      const newColumns: Required<{ [key in keyof IColumnUser]: boolean }> = {
        firstName: false,
        lastName: false,
        jobTitle: false,
        location: false,
        employmentType: false,
        hourlyRate: false,
      };
      for (let c of newColumnValue) {
        newColumns[c as keyof IColumnUser] = true;
      }
      dispatch(userActions.changeColumns(newColumns));
      handlePopoverClose();
    }
  };
  const handleClearFilter = () => {
    dispatch(userActions.clearFilters());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppBar
      className={clsx(classes.appBar, { [classes.appBarShift]: showSidebar })}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.wrap}>
          {!showSidebar && (
            <IconButton
              className={classes.filterButton}
              aria-label="Menu"
              onClick={toggleDrawer}
            >
              <FilterListIcon />
            </IconButton>
          )}
          <Typography component="h1" className={classes.headerTitle}>
            Users list
          </Typography>
          {hasFilter(filters) && (
            <>
              <Typography
                component="h5"
                variant="subtitle2"
                color="primary"
                className={classes.filterText}
              >
                Filterd Results{" "}
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="textPrimary"
                >
                  ({userFilterCount})
                </Typography>
              </Typography>
              <IconButton
                aria-label="upload picture"
                component="span"
                className={classes.clearFilterButton}
                onClick={handleClearFilter}
              >
                <CancelIcon fontSize="small" /> Clear all filters
              </IconButton>
            </>
          )}
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
              <div className="selectColumn">
                <SelectItems
                  id="checkboxes-columns"
                  value={newColumnValue.length ? newColumnValue : userColumns}
                  options={userColumns}
                  onChange={(event, value) => setNewColumnValue(value)}
                  multiple={true}
                  placeholder="Select columns"
                  label="Columns"
                />
              </div>
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
