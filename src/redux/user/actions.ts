import { CHANGE_COLUMNS, IUserActions, SET_USERS } from "./types";

const actions: IUserActions = {
  changeColumns: (columns) => ({
    type: CHANGE_COLUMNS,
    columns,
  }),
  setUsers: (users) => ({
    type: SET_USERS,
    users,
  }),
};

export default actions;
