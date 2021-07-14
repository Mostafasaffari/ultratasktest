import { IUser } from "../entities/user";

import { MyAPI } from "../helpers/api";

//TODO set types later.

const getAllUsersApi = async (): Promise<IUser[]> => {
  const api = new MyAPI<IUser>();
  const response = await api.get("user");
  return response;
};

export { getAllUsersApi };
