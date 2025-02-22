import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting as updateSettingApi } from '../services/apiSettings';
import toast from 'react-hot-toast';

export function useUpdateSetting() {
  const queryCLient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting succesfuly updated');
      queryCLient.invalidateQueries({
        queryKey: ['setting'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSetting, isUpdating };
}
