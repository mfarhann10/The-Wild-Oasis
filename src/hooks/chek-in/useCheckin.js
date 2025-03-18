import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckin(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate: checkin, isPending: isCheckingIn } = useMutation({
      mutationFn: ({ bookingId, breakfast }) =>
        updateBooking(bookingId, {
          status: 'checked-in',
          isPaid: true,
          ...breakfast,
        }),
      onSuccess: (data) => {
        toast.success(`Booking ${data.id} succesfully checked in`);
        queryClient.invalidateQueries({ active: true });
        navigate('/');
      },
      onError: () => {
        toast.error('there was an error while cheking in');
      },
    });

    return {checkin, isCheckingIn}
}