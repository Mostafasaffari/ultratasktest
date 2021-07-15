import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IUser } from "../../entities/user";

import { NoPhoto } from "../../helpers/imagesPack";
import { filterArray } from "../../helpers/filterArray";

import { getAllUsersApi } from "../../services/userApi";

import { AppState } from "../../redux/store";
import userActions from "../../redux/user/actions";

import { Modal } from "../../components/ui-kit/modal";
import { Button } from "../../components/ui-kit/button";
import { AddCircleIcon, SaveIcon } from "../../components/ui-kit/icons";
import { Typography } from "../../components/ui-kit/typography";
import { TextField, Select } from "../../components/ui-kit/input";
import { MaterialTable, tableIcons } from "../../components/ui-kit/table";

import { useStyles, BootstrapInput } from "./user.style";

const User: React.FC = () => {
  const [usersWithFilters, setUsersWithFilters] = useState<IUser[]>([]);
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const dispatch = useDispatch();
  const { userColumns, usersList, userFilters } = useSelector(
    (state: AppState) => {
      return {
        userColumns: state.User.columns,
        usersList: state.User.users,
        userFilters: state.User.filters,
      };
    }
  );

  useEffect(() => {
    const fetchUserData = async () => {
      let data = await getAllUsersApi();
      dispatch(userActions.setUsers(data));
    };
    fetchUserData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (Object.keys(userFilters).length) {
      const users = filterArray(usersList, userFilters);
      setUsersWithFilters(users);
    } else {
      setUsersWithFilters(usersList);
    }
  }, [userFilters, usersList]);

  const classes = useStyles();
  const columns = [
    {
      title: "First name",
      field: "firstName",
      hidden: !userColumns.firstName,
      cellStyle: () => ({
        border: "none",
      }),
      render: (rowData: IUser) => (
        <div className={classes.avatar}>
          <img
            src={rowData.picture || NoPhoto}
            alt=""
            className={classes.avatarIcon}
          />{" "}
          <Typography variant="body1">{rowData.firstName}</Typography>
        </div>
      ),
    },
    {
      title: "Last name",
      field: "lastName",
      hidden: !userColumns.lastName,
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Job title",
      field: "jobTitle",
      hidden: !userColumns.jobTitle,
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Location",
      field: "location",
      hidden: !userColumns.location,
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Employment type",
      field: "employmentType",
      hidden: !userColumns.employmentType,
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Hourly rate(USD)",
      field: "hourlyRate",
      hidden: !userColumns.hourlyRate,
      cellStyle: () => ({
        border: "none",
      }),
    },
  ];
  return (
    <div>
      <MaterialTable
        columns={columns}
        icons={tableIcons}
        options={{
          toolbar: false,
          search: false,
          sorting: true,
          paging: false,
          actionsColumnIndex: -1,
          paginationType: "normal",
          showTitle: false,
          rowStyle: (rowData) => ({
            backgroundColor:
              rowData.tableData.id % 2 === 0
                ? undefined
                : "rgba(210, 217, 226,0.15)",
          }),
        }}
        data={usersWithFilters}
      />
      <div className={classes.buttonActions}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={() => setShowModalAddUser(true)}
        >
          Add a new user
        </Button>
        <Modal
          open={showModalAddUser}
          onClose={() => setShowModalAddUser(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          <div className={classes.paper}>
            <div className="addUserHeader">
              <Typography component="h5" variant="h5" color="primary">
                Add new user
              </Typography>
              <Typography component="span" variant="caption">
                Complete profile blow
              </Typography>
            </div>
            <div className="row">
              <div className="col">
                <TextField
                  required
                  id="outlined-required"
                  label="First name"
                  variant="outlined"
                  placeholder="e.g. Mostafa"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Hourly rate"
                  variant="outlined"
                  placeholder="e.g. 199"
                />
                <div>
                  <label className={classes.label} htmlFor="jobtitle">
                    Job title
                  </label>
                  <Select
                    id="demo-customized-select-native"
                    input={<BootstrapInput />}
                    native
                    label="Job title"
                    inputProps={{
                      id: "jobtitle",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value="Frontend">Frontend</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Backend">Backend</option>
                  </Select>
                </div>
              </div>
              <div className="col">
                <TextField
                  required
                  id="outlined-required"
                  label="Last name"
                  variant="outlined"
                  placeholder="e.g. Saffari"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="location"
                  variant="outlined"
                  placeholder="e.g. Yerevan"
                />
                <div>
                  <label htmlFor="employmentType" className={classes.label}>
                    Employment type
                  </label>
                  <Select
                    native
                    id="demo-customized-select-native"
                    input={<BootstrapInput />}
                    label="Employment type"
                    inputProps={{
                      id: "employmentType",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value="FullTime">FullTime</option>
                    <option value="PartTime">PartTime</option>
                    <option value="Contract">Contract</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className={classes.buttonActions}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
              >
                Save User
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default User;
