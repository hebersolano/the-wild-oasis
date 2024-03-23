import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSettings, updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useGetSettings() {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  return { settings, isLoading, error };
}

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successful create");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { updateSetting, isUpdating };
}
