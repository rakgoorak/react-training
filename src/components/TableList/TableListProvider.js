import { createContext, useContext, useEffect, useState } from "react";

const DEFAULT_PAGINATION_OPTIONS = {
  page: 1,
  pageSize: 10,
  total: 0,
};

export const TableListContext = createContext();

export function useTableList() {
  const context = useContext(TableListContext);

  return context;
}

export default function TableListProvider({
  data = [],
  paginationOptions = {},
  children,
}) {
  const [pagination, setPagination] = useState(DEFAULT_PAGINATION_OPTIONS);

  const onChangePage = (page = 1) => {
    setPagination((prev) => {
      return {
        ...prev,
        page: page,
      };
    });
  };

  useEffect(() => {
    setPagination((prev) => {
      return {
        ...prev,
        total: data.length,
        ...paginationOptions,
      };
    });
  }, [data.length]);

  return (
    <TableListContext.Provider
      value={{
        data: data,
        paginationOptions: pagination,
        onChangePage: onChangePage,
      }}
    >
      {children}
    </TableListContext.Provider>
  );
}

//   const x = [1,2,3,4,5]
//   const y = [6,7,8,9,x] => [6,7,8,9,[1,2,3,4,5]]
//   const y = [6,7,8,9,...x] => [6,7,8,9,1,2,3,4,5]
//   const x = {a:'ee',b:'oo'}
//   const y = {a:'nn',d:'hh',p:x, ...x} => {
// d:'hh',
// p:{a:'ee',b:'oo'},
// a:'ee',
// b:'oo'
// }
