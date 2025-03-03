import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useGetCabins } from '../../hooks/cabins/useGetCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

function CabinTable() {
  const { isLoading, cabins } = useGetCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins) return <Empty resourceName="cabin" />;

  //1. Filter
  const filteredValue = searchParams.get('discount') || 'all';
  let filteredCabins;
  /* conditioning of cabins filter */
  if (filteredValue === 'all') filteredCabins = cabins;

  if (filteredValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filteredValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  /* conditioning of cabins filter */

  //2. Sort
  const sortBy = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedCabins = [...filteredCabins].sort((a, b) => {
    if (typeof a[field] === 'number') {
      return (a[field] - b[field]) * modifier;
    } else {
      return a[field].localeCompare(b[field]) * modifier;
    }
  });

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
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
