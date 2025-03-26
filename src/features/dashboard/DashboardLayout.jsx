import styled from "styled-components";
import { useRecentBookings } from '../../hooks/bookings/useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from '../../hooks/bookings/useRecentStays';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isPendingBookings, bookings } = useRecentBookings();
  const { isPending: isPendingStays, stays, confirmedStay } = useRecentStays();

  if (isPendingBookings || isPendingStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

