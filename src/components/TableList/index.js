import Pagination from "./Pagination";
import Table from "./Table";
import TableListProvider from "./TableListProvider";

function TableList({ data = [], columns = [], paginationOptions = {}, onClickRow=()=> null }) {
  return (
    <TableListProvider data={data} paginationOptions={paginationOptions}>
      <Table columns={columns} onClickRow={onClickRow}/>
      <Pagination />
    </TableListProvider>
  );
}

export default TableList;