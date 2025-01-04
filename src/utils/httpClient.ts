import axios, { AxiosRequestConfig } from "axios";

const httpClient = axios.create({
  baseURL: "https://api.restful-api.dev",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await httpClient.get<T>(url, config);
    return response.data;
  } catch {
    throw new Error("Network response was not ok");
  }
};

export const post = async <T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  try {
    const response = await httpClient.post<R>(url, data, config);
    return response.data;
  } catch {
    throw new Error("Network response was not ok");
  }
};

export const put = async <T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  try {
    const response = await httpClient.put<R>(url, data, config);
    return response.data;
  } catch {
    throw new Error("Network response was not ok");
  }
};
