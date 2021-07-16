import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../../../redux/store";
import userActions from "../../../redux/user/actions";

import { Drawer } from "../../../components/ui-kit/appBar";
import { IconButton } from "../../../components/ui-kit/button";
import { Typography } from "../../../components/ui-kit/typography";
import { FilterListIcon, CloseIcon } from "../../../components/ui-kit/icons";
import { SelectItems } from "../../../components/shared/selectItems/selectItems";

import { useSidebarStyles } from "./sidebar.style";

interface IProps {
  toggleDrawer: () => void;
  showSidebar: boolean;
}
const SideBar: React.FC<IProps> = ({ toggleDrawer, showSidebar }) => {
  const dispatch = useDispatch();
  const classes = useSidebarStyles();

  const { usersList, userFilters } = useSelector((state: AppState) => {
    return {
      usersList: state.User.users,
      userFilters: state.User.filters,
    };
  });

  const handleChangeFilter =
    (key: string) => (event: React.ChangeEvent<{}>, value: any) => {
      dispatch(
        userActions.setFilters({
          [key]: value,
        })
      );
    };
  const handleChangehourlyRateFilter =
    (key: "hourlyRateMin" | "hourlyRateMax") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = userFilters.hourlyRate || [];
      if (key === "hourlyRateMin") {
        value[0] = e.target.value;
      }
      if (key === "hourlyRateMax") {
        value[1] = e.target.value;
      }
      dispatch(
        userActions.setFilters({
          hourlyRate: value,
        })
      );
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
            <Typography component="p" variant="caption">
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
            value={userFilters["firstName"] || []}
          />
          <SelectItems
            id="lastname-filter"
            label="Lastname"
            placeholder=""
            multiple={true}
            options={Array.from(new Set(usersList.map((s) => s.lastName)))}
            onChange={handleChangeFilter("lastName")}
            value={userFilters["lastName"] || []}
          />
          <SelectItems
            id="jobtitle-filter"
            label="Jobtitle"
            placeholder=""
            multiple={false}
            options={Array.from(new Set(usersList.map((s) => s.jobTitle)))}
            onChange={handleChangeFilter("jobTitle")}
            {...(userFilters["jobTitle"] && {
              value: userFilters["jobTitle"],
            })}
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
            {...(userFilters["employmentType"] && {
              value: userFilters["employmentType"],
            })}
          />
          <div className={classes.hourlyRateFilter}>
            <label htmlFor="min">Horly rate (USD)</label>
            <div>
              <input
                type="number"
                id="min"
                placeholder="min"
                onChange={handleChangehourlyRateFilter("hourlyRateMin")}
                {...(userFilters["hourlyRate"] > 0 && {
                  value: userFilters["hourlyRate"][0],
                })}
              />{" "}
              to{" "}
              <input
                type="number"
                id="max"
                placeholder="max"
                onChange={handleChangehourlyRateFilter("hourlyRateMax")}
                {...(userFilters["hourlyRate"] > 0 && {
                  value: userFilters["hourlyRate"][1],
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export { SideBar };
