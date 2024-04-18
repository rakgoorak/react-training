import react from "react";
import { useTableList } from "./TableListProvider";

function Pagination() {
  const { paginationOptions, onChangePage } = useTableList();
  const { page, pageSize, total } = paginationOptions;
  const totalPage = Math.ceil(total / pageSize);

  const getPageNumbers = () => {
    const currentPage = page;
    const lastPage = totalPage;

    if (lastPage <= 5) {
      return Array.from({ length: lastPage }, (_, index)=> index + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, "...", lastPage];
    }
    if (currentPage >= lastPage - 2) {
      return [1, "...", lastPage - 4, lastPage -3, lastPage -2, lastPage -1, lastPage];
    }

    return [1, "...", currentPage -2, currentPage -1, currentPage, currentPage +1, currentPage +2];
  }
  
  return (
    <div>
      <button disabled={page - 1 <= 0} onClick={() => onChangePage(page - 1)}>
        {"<"}
      </button>
      {/* {Array.from({ length: totalPage }).map((_, index) => (
        <button
        key={index}
        onClick={() => onChangePage(index + 1)} */}
        {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onChangePage(pageNumber)}
          style={{ fontWeight: pageNumber === page ? 900 : 400 }}
        >
          {pageNumber}
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
//

// onClick={onChangePage} =>  onClick={()=> void}
// onClick={()=> onChangePage()} =>  onClick={()=> ()=> void}
// onChangePage()