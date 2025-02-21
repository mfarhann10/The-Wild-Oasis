import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../services/apiCabins';

export function useCreateCabin() {
  /* using query client to display updating state in UI */
  const queryClient = useQueryClient();

  /* inserting is a mutation, then use a useMutation, and use
    useQueryClient to get a new UI 
  */

  /* create cabin */
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('success creating a new cabins');
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createCabin, isCreating };
}
