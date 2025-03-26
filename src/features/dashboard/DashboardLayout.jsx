import styled from "styled-components";
import { useRecentBookings } from '../../hooks/bookings/useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from '../../hooks/bookings/useRecentStays';
import Stats from './Stats';
import { useGetCabins } from '../../hooks/cabins/useGetCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isPendingBookings, bookings } = useRecentBookings();
  const {
    isPending: isPendingStays,
    confirmedStay,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useGetCabins();

  if (isPendingBookings || isPendingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStay={confirmedStay}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStay={confirmedStay} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

