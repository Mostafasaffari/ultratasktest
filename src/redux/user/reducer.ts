import { storage } from "../../helpers/localStorage";

import {
  CHANGE_COLUMNS,
  CLEAR_FILTERS,
  IUserState,
  SET_FILTERS,
  SET_USERFILTER_COUNT,
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
  userFilterCount: Number(storage.get("countOfFilterUser")) ?? 0,
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
    case CLEAR_FILTERS: {
      storage.clear("userFilters");
      return {
        ...state,
        filters: {},
        userFilterCount: 0,
      };
    }
    case SET_USERFILTER_COUNT: {
      storage.set("countOfFilterUser", JSON.stringify(action.count));
      return {
        ...state,
        userFilterCount: action.count,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
