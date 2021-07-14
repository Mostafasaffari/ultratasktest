import { IUser } from "../../entities/user";

export const CHANGE_COLUMNS = "CHANGE_COLUMNS";

export interface IUserState {
  columns: Partial<{ [key in keyof IUser]: boolean }>;
}

interface IChangeColumns {
  type: typeof CHANGE_COLUMNS;
  columns: IUserState["columns"];
}

export interface IUserActions {
  changeColumns: (columns: IUserState["columns"]) => IChangeColumns;
}

export type UserActionTypes = IChangeColumns;
