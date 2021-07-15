import { IUser } from "../entities/user";

import { MyAPI } from "../helpers/api";

const getAllUsersApi = async (): Promise<IUser[]> => {
  const api = new MyAPI<IUser>();
  const response = await api.get("user");
  return response;
};

const saveUsersApi = async (data: IUser): Promise<IUser[]> => {
  const api = new MyAPI<IUser>();
  await api.post("user", data);
  const response = await getAllUsersApi();
  return response;
};
export { getAllUsersApi, saveUsersApi };
