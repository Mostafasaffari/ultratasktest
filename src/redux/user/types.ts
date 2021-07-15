import { IColumnUser, IUser } from "../../entities/user";

export const CHANGE_COLUMNS = "CHANGE_COLUMNS";
export const SET_USERS = "SET_USERS";
export const SET_FILTERS = "SET_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const SET_USERFILTER_COUNT = "SET_USERFILTER_COUNT";

export interface IUserState {
  columns: Required<{ [key in keyof IColumnUser]: boolean }>;
  users: IUser[];
  filters: Partial<{ [key in keyof IColumnUser]: any }>;
  userFilterCount: number;
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

interface IClearFilter {
  type: typeof CLEAR_FILTERS;
}

interface ISetUserFilterCount {
  type: typeof SET_USERFILTER_COUNT;
  count: IUserState["userFilterCount"];
}

export interface IUserActions {
  changeColumns: (columns: IUserState["columns"]) => IChangeColumns;
  setUsers: (users: IUserState["users"]) => ISetUsers;
  setFilters: (filters: IUserState["filters"]) => ISetFilters;
  clearFilters: () => IClearFilter;
  setUserFilterCount: (
    count: IUserState["userFilterCount"]
  ) => ISetUserFilterCount;
}

export type UserActionTypes =
  | IChangeColumns
  | ISetUsers
  | ISetFilters
  | IClearFilter
  | ISetUserFilterCount;
