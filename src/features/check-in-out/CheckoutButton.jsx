/* eslint-disable react/prop-types */
import { useCheckout } from '../../hooks/check-out/useCheckout';
import Button from '../../ui/Button';

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      $variation="primary"
      $size="small"
      disabled={isCheckingOut}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
