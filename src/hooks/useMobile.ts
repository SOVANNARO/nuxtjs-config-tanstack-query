import { IMobileResponse } from "@/types/mobile";
import { createMobileData, fetchMobileData } from "@/utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useMobile = () => {
  return useQuery<IMobileResponse[]>({
    queryKey: ["mobile-list"],
    queryFn: fetchMobileData,
    select: (data) => data,
    enabled: true,
  });
};

export const useCreateMobile = () => {
  const queryClient = useQueryClient();
  return useMutation<IMobileResponse, Error, IMobileResponse>({
    mutationFn: createMobileData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mobile-list"] });
    },
  });
};
