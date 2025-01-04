import { IMobileResponse } from "@/types/mobile";
import { get, post } from "./httpClient";

export const fetchMobileData = async (): Promise<IMobileResponse[]> => {
  return get<IMobileResponse[]>("/objects");
};

export const createMobileData = async (
  data: IMobileResponse
): Promise<IMobileResponse> => {
  return post<IMobileResponse, IMobileResponse>("/objects", data);
};
