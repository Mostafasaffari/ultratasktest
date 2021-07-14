import clsx from "clsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IColumnUser } from "../../../entities/user";

import { AppState } from "../../../redux/store";
import userActions from "../../../redux/user/actions";

import {
  FilterListIcon,
  ExpandMoreIcon,
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
} from "../../../components/ui-kit/icons";
import { Popover } from "../../../components/ui-kit/popover";
import { Typography } from "../../../components/ui-kit/typography";
import { Button, IconButton } from "../../../components/ui-kit/button";
import { AppBar, Toolbar } from "../../../components/ui-kit/appBar";
import {
  TextField,
  Checkbox,
  Autocomplete,
} from "../../../components/ui-kit/input";

import { useHeaderStyle } from "../layout.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}

const Header: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const [columnsFilterPopover, setColumnsFilterPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [newColumnValue, setNewColumnValue] = useState<string[]>([]);

  const dispatch = useDispatch();
  const { userColumns } = useSelector((state: AppState) => {
    return {
      userColumns: Object.keys(state.User.columns),
    };
  });

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
  console.log(newColumnValue);
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
              <div className="selectColumn">
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={userColumns}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option}
                  value={newColumnValue.length ? newColumnValue : userColumns}
                  onChange={(event, value) => setNewColumnValue(value)}
                  renderOption={(option, { selected }) => (
                    <>
                      <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </>
                  )}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="columns"
                      placeholder="Select columns"
                    />
                  )}
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
