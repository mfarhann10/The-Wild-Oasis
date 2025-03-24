import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  /* using query client to display updating state in UI */
  const queryClient = useQueryClient();

  /* edit cabin */
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success('User account successfuly updated');
      queryClient.setQueryData(['user'], user);
      /*  queryClient.invalidateQueries({
        queryKey: ['user'],
      }); */
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
}
