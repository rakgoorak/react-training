import { useMemo } from "react";
import { useTableList } from "./TableListProvider";

function Table({ columns = [] }) {
  const { data, paginationOptions } = useTableList();
  const { page, pageSize } = paginationOptions;

  const startData = useMemo(() => {
    return (page - 1) * pageSize;
  }, [page]);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>No.</th>
          {columns.map((item, index) => (
            <th key={index}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(startData, page * pageSize).map((item, index) => (
          <tr key={index}>
            <td>{index + 1 + startData}</td>
            <td>{item.animal}</td>
            <td>{item.family}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;