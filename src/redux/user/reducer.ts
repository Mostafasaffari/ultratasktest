import { storage } from "../../helpers/localStorage";

import {
  CHANGE_COLUMNS,
  IUserState,
  SET_FILTERS,
  SET_USERS,
  UserActionTypes,
} from "./types";

const initState: IUserState = {
  columns: {
    firstName: true,
    lastName: true,
    jobTitle: true,
    location: true,
    employmentType: true,
    hourlyRate: true,
  },
  users: [],
  filters: JSON.parse(storage.get("userFilters") ?? "{}"),
};

const taskReducer = (state = initState, action: UserActionTypes) => {
  switch (action.type) {
    case CHANGE_COLUMNS: {
      return {
        ...state,
        columns: {
          ...action.columns,
        },
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_FILTERS: {
      storage.set(
        "userFilters",
        JSON.stringify({
          ...state.filters,
          ...action.filters,
        })
      );
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.filters,
        },
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
