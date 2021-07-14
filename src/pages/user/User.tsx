import { useEffect, useState } from "react";

import { IUser } from "../../entities/user";
import { NoPhoto } from "../../helpers/imagesPack";

import { MaterialTable, tableIcons } from "../../components/ui-kit/table";
import { Typography } from "../../components/ui-kit/typography";

import { useStyles } from "./user.style";
import { getAllUsersApi } from "../../services/userApi";

const User: React.FC = () => {
  const [userData, setUserData] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getAllUsersApi();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  const classes = useStyles();
  const columns = [
    {
      title: "First name",
      field: "firstName",
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
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Job title",
      field: "jobTitle",
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Location",
      field: "location",
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Employment type",
      field: "employmentType",
      cellStyle: () => ({
        border: "none",
      }),
    },
    {
      title: "Hourly rate(USD)",
      field: "hourlyRate",
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
          paging: true,
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
        data={userData}
      />
    </div>
  );
};

export default User;
