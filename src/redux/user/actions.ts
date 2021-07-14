import { CHANGE_COLUMNS, IUserActions } from "./types";

const actions: IUserActions = {
  changeColumns: (columns) => ({
    type: CHANGE_COLUMNS,
    columns,
  }),
};

export default actions;
