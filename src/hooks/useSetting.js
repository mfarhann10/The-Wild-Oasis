import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../services/apiSettings';

export function useSetting() {
  const { isPending, data: setting } = useQuery({
    queryKey: ['setting'],
    queryFn: getSettings,
  });

  return { isPending, setting };
}
