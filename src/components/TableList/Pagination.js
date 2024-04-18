import { useState } from "react";
import { useTableList } from "./TableListProvider";

function Pagination() {
  const { paginationOptions, onChangePage } = useTableList();
  const { page, pageSize, total } = paginationOptions;
  const totalPage = Math.ceil(total / pageSize);
  //

  // onClick={onChangePage} =>  onClick={()=> void}
  // onClick={()=> onChangePage()} =>  onClick={()=> ()=> void}
  // onChangePage()

  return (
    <div>
      <button disabled={page - 1 <= 0} onClick={() => onChangePage(page - 1)}>
        {"<"}
      </button>
      {Array.from({ length: totalPage }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChangePage(index + 1)}
          style={{ fontWeight: index + 1 === page ? 900 : 400 }}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={page + 1 > totalPage}
        onClick={() => onChangePage(page + 1)}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
