// import axios, { CanceledError } from "axios";

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "1193e8b5f3424ba1a2d7396aa74a2214",
//   },
// });

// export { CanceledError };

import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: string;
  next: string | null;
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
  getAll = (requestConfig: AxiosRequestConfig) => {
    return axiosInstanse
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstanse
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
export { CanceledError };
