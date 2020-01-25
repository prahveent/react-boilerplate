import Axios, { AxiosInstance } from "axios";
import ApiConstants  from "../config/api-constant"

export class APIHelper {

  static _axiosInstance: AxiosInstance = null;

  constructor() {
  }

  static api(accessToken): AxiosInstance {
    if (!APIHelper._axiosInstance) {

      APIHelper._axiosInstance = Axios.create({
        baseURL: ApiConstants.SERVER_BASE_URL,
        timeout: (1000 * 60),
      });

      APIHelper._axiosInstance.interceptors.request.use(
        config => {

          config.headers["Authorization"] = "Bearer " + accessToken;
          return config;
        },
        error => {
          Promise.reject(error);
        }
      );

    }

    return this._axiosInstance;
  }

}
