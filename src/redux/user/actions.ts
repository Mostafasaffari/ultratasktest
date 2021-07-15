import { CHANGE_COLUMNS, IUserActions, SET_FILTERS, SET_USERS } from "./types";

const actions: IUserActions = {
  changeColumns: (columns) => ({
    type: CHANGE_COLUMNS,
    columns,
  }),
  setUsers: (users) => ({
    type: SET_USERS,
    users,
  }),
  setFilters: (filters) => ({
    type: SET_FILTERS,
    filters,
  }),
};

export default actions;
