import axios from "axios";

import handleError from "./handleError";

interface IApiConfig {
  baseURL?: string;
  headers?: {
    Authorization?: string;
  };
}
class MyAPI<T> {
  constructor(private config: IApiConfig = {}) {
    this.config.baseURL =
      this.config.baseURL || process.env.REACT_APP_SERVER_BASEURL_API;
  }

  //TODO: response data(any) should be replaced by a structure that we'll get from backend

  public async get(url: string): Promise<T | any> {
    try {
      const response = await axios.get(url, this.config);
      return response.data as T;
    } catch (err) {
      return handleError(err);
    }
  }
  public async post(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.post(url, data, this.config);
      return response.data;
    } catch (err) {
      return handleError(err);
    }
  }

  public async patch(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.put(url, data, this.config);
      return response.data;
    } catch (err) {
      return handleError(err);
    }
  }

  public async put(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.put(url, data, this.config);
      return response.data;
    } catch (err) {
      return handleError(err);
    }
  }

  public async delete(url: string, data: any = {}): Promise<any> {
    try {
      const response = await axios.delete(url, {
        ...this.config,
        data: { ...data },
      });
      return response.data;
    } catch (err) {
      return handleError(err);
    }
  }
}

export { MyAPI };
