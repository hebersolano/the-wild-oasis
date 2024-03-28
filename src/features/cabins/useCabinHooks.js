import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createEditCabin,
  deleteCabin as deleteCabinApi,
  getCabins,
} from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useGetCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabins, isLoading, error };
}

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabins successful deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteCabin };
}

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successful create");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { createCabin, isCreating };
}

export function useDuplicateCabin() {
  const { createCabin, isCreating: isDuplicating } = useCreateCabin();
  function duplicateCabin(cabin) {
    delete cabin.id;
    createCabin({ ...cabin, name: `${cabin.name}-copy` });
  }

  return { duplicateCabin, isDuplicating };
}

export function useEditCabin(reset) {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      toast.success("New cabin successful create");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { editCabin, isEditing };
}
