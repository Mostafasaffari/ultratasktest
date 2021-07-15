import {
  CHANGE_COLUMNS,
  CLEAR_FILTERS,
  IUserActions,
  SET_FILTERS,
  SET_USERFILTER_COUNT,
  SET_USERS,
} from "./types";

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
  clearFilters: () => ({
    type: CLEAR_FILTERS,
  }),
  setUserFilterCount: (count) => ({
    type: SET_USERFILTER_COUNT,
    count,
  }),
};

export default actions;
