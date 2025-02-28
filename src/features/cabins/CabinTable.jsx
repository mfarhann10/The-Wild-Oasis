import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useGetCabins } from '../../hooks/useGetCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

function CabinTable() {
  const { isLoading, cabins } = useGetCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filteredValue = searchParams.get('discount') || 'all';

  let filteredCabins;

  /* conditioning of cabins filter */
  if (filteredValue === 'all') filteredCabins = cabins;

  if (filteredValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filteredValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  /* conditioning of cabins filter */

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Image</div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          //data={cabins}
          data={filteredCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
