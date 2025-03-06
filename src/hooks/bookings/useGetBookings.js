import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constant';

export function useGetBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //1. Filter
  const filteredValue = searchParams.get('status');
  const filter =
    !filteredValue || filteredValue === 'all'
      ? null
      : { field: 'status', value: filteredValue };

  //2 Sort
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  //Pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  //query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  //pre-fetching for next page
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  //pre-fetching for prev page
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, error, count };
}
