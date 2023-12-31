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
  get = () => {
    return axiosInstanse.get<T>(this.endpoint).then((res) => res.data);
  };
}
export { CanceledError };
