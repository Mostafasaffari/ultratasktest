import {
  CHANGE_COLUMNS,
  IUserState,
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
    default:
      return state;
  }
};

export default taskReducer;
