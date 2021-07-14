import { CHANGE_COLUMNS, IUserState, UserActionTypes } from "./types";

const initState: IUserState = {
  columns: {
    id: true,
    firstName: true,
    lastName: true,
    jobTitle: true,
    location: true,
    employmentType: true,
    hourlyRate: true,
    picture: true,
  },
};

const taskReducer = (state = initState, action: UserActionTypes) => {
  switch (action.type) {
    case CHANGE_COLUMNS: {
      return {
        ...state,
        columns: {
          ...state.columns,
          ...action.columns,
        },
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
