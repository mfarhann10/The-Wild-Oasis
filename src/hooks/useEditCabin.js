import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../services/apiCabins';
import toast from 'react-hot-toast';

export function useEditCabin() {
  /* using query client to display updating state in UI */
  const queryClient = useQueryClient();

  /* edit cabin */
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfuly edited');
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editCabin, isEditing };
}
