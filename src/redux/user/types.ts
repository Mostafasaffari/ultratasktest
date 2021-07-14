import { IColumnUser } from "../../entities/user";

export const CHANGE_COLUMNS = "CHANGE_COLUMNS";

export interface IUserState {
  columns: Required<{ [key in keyof IColumnUser]: boolean }>;
}

interface IChangeColumns {
  type: typeof CHANGE_COLUMNS;
  columns: IUserState["columns"];
}

export interface IUserActions {
  changeColumns: (columns: IUserState["columns"]) => IChangeColumns;
}

export type UserActionTypes = IChangeColumns;
