import { IColumnUser, IUser } from "../../entities/user";

export const CHANGE_COLUMNS = "CHANGE_COLUMNS";
export const SET_USERS = "SET_USERS";
export const SET_FILTERS = "SET_FILTERS";

export interface IUserState {
  columns: Required<{ [key in keyof IColumnUser]: boolean }>;
  users: IUser[];
  filters: Partial<{ [key in keyof IColumnUser]: any }>;
}

interface IChangeColumns {
  type: typeof CHANGE_COLUMNS;
  columns: IUserState["columns"];
}
interface ISetUsers {
  type: typeof SET_USERS;
  users: IUserState["users"];
}

interface ISetFilters {
  type: typeof SET_FILTERS;
  filters: IUserState["filters"];
}

export interface IUserActions {
  changeColumns: (columns: IUserState["columns"]) => IChangeColumns;
  setUsers: (users: IUserState["users"]) => ISetUsers;
  setFilters: (filters: IUserState["filters"]) => ISetFilters;
}

export type UserActionTypes = IChangeColumns | ISetUsers | ISetFilters;
