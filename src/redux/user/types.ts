import { IColumnUser, IUser } from "../../entities/user";

export const CHANGE_COLUMNS = "CHANGE_COLUMNS";
export const SET_USERS = "SET_USERS";

export interface IUserState {
  columns: Required<{ [key in keyof IColumnUser]: boolean }>;
  users: IUser[];
}

interface IChangeColumns {
  type: typeof CHANGE_COLUMNS;
  columns: IUserState["columns"];
}
interface ISetUsers {
  type: typeof SET_USERS;
  users: IUserState["users"];
}

export interface IUserActions {
  changeColumns: (columns: IUserState["columns"]) => IChangeColumns;
  setUsers: (users: IUserState["users"]) => ISetUsers;
}

export type UserActionTypes = IChangeColumns | ISetUsers;
