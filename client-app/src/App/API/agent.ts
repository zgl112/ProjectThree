import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";
import { ICounter, IJobResult, IListSearchResult } from "../Models/Models";

axios.defaults.baseURL = "/api/search";

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.respone) {
    toast.error("Network error - Servers are currently offline.");
  }
  const { status } = error.response;

  if (status === 404) {
    history.push("/notfound");
  }
  if (status === 500) {
    history.push("/notfound");
  }
});

const responseBody = (response: AxiosResponse) => response.data;

export const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  getEasy: (url: string) => axios.get(url),
  get: (url: string) => axios.get(url).then(sleep(50)).then(responseBody),
  getForm: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(10)).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(url, body).then(sleep(10)).then(responseBody),
  delete: (url: string) => axios.delete(url).then(sleep(10)).then(responseBody),
};

const Jobs = {
  counter: (): Promise<ICounter> => requests.get("/counter"),
  detailedJob: (id: number): Promise<IJobResult> =>
    requests.get(`/result/${id}`),
  listJobs: (params: URLSearchParams): Promise<IListSearchResult> =>
    axios.get("/results", { params: params }).then(responseBody),

  createIndex: () => requests.getEasy("/createIndex"),
};
export default Jobs;
