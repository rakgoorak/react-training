import Pagination from "./Pagination";
import Table from "./Table";
import TableListProvider from "./TableListProvider";

function TableList({ data = [], columns = [], paginationOptions = {} }) {
  return (
    <TableListProvider data={data} paginationOptions={paginationOptions}>
      <Table columns={columns} />
      <Pagination />
    </TableListProvider>
  );
}

export default TableList;
