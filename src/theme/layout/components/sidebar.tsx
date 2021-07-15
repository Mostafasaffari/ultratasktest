import { useState } from "react";
import { useSelector } from "react-redux";

import { IColumnUser } from "../../../entities/user";

import { AppState } from "../../../redux/store";

import { Drawer } from "../../../components/ui-kit/appBar";
import { IconButton } from "../../../components/ui-kit/button";
import { Typography } from "../../../components/ui-kit/typography";
import { FilterListIcon, CloseIcon } from "../../../components/ui-kit/icons";
import { SelectItems } from "../../../components/shared/selectItems/selectItems";

import { useSidebarStyles } from "../layout.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}
const SideBar: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const [filters, setFilters] = useState<
    Partial<{ [key in keyof IColumnUser]: any }>
  >({});

  const classes = useSidebarStyles();

  const { usersList } = useSelector((state: AppState) => {
    return {
      usersList: state.User.users,
    };
  });

  const handleChangeFilter =
    (key: string) => (event: React.ChangeEvent<{}>, value: any) => {
      setFilters((p) => ({
        ...p,
        [key]: value,
      }));
    };

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
        <div className={classes.filters}>
          <SelectItems
            id="firstname-filter"
            label="Firstname"
            placeholder=""
            multiple={true}
            options={Array.from(new Set(usersList.map((s) => s.firstName)))}
            onChange={handleChangeFilter("firstName")}
          />
          <SelectItems
            id="lastname-filter"
            label="Lastname"
            placeholder=""
            multiple={true}
            options={Array.from(new Set(usersList.map((s) => s.lastName)))}
            onChange={handleChangeFilter("lastName")}
          />
          <SelectItems
            id="jobtitle-filter"
            label="Jobtitle"
            placeholder=""
            multiple={false}
            options={Array.from(new Set(usersList.map((s) => s.jobTitle)))}
            onChange={handleChangeFilter("jobTitle")}
          />
          <SelectItems
            id="employmenttype-filter"
            label="Employment type"
            placeholder=""
            multiple={false}
            options={Array.from(
              new Set(usersList.map((s) => s.employmentType))
            )}
            onChange={handleChangeFilter("employmentType")}
          />
        </div>
      </div>
    </Drawer>
  );
};

export { SideBar };
