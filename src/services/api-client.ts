// import axios, { CanceledError } from "axios";

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "1193e8b5f3424ba1a2d7396aa74a2214",
//   },
// });

// export { CanceledError };

import axios, { AxiosRequestConfig, CanceledError } from "axios";
import { GameQuery } from "../App";

export interface FetchResponse<T> {
  count: string;
  results: T[];
}

const axiosInstanse = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1193e8b5f3424ba1a2d7396aa74a2214",
  },
});

export class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = <T>(requestConfig?: AxiosRequestConfig) =>
    axiosInstanse
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data.results);
  postAll = (data: string) =>
    axiosInstanse
      .post<FetchResponse<T>>(this.endpoint, data)
      .then((res) => res.data.results);
}
export { CanceledError }