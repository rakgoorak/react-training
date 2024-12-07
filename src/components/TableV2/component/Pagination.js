import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPages = 1, onChangePage }) => {
    // console.log("currentPages:", currentPages);
    // console.log("itemsPerPage:", itemsPerPage);
    // console.log("totalItems:", totalItems);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const createPageRange = () => {
        const totalPageNumbers = currentPages * 2 + 5;

        if (totalPages > totalPageNumbers) {
            const startPage = Math.max(2, currentPage - currentPages);
            const endPage = Math.min(totalPages - 1, currentPage + currentPages);
            const hasLeftEllipsis = startPage > 2;
            const hasRightEllipsis = endPage < totalPages - 1;

            let pages = [];

            if (hasLeftEllipsis) {
                pages.push(1, "...");
            } else {
                pages.push(...Array.from({ length: startPage - 1 }, (_, i) => i + 1));
            }

            pages.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));

            if (hasRightEllipsis) {
                pages.push("...", totalPages);
            } else {
                pages.push(...Array.from({ length: totalPages - endPage }, (_, i) => endPage + i + 1));
            }

            return pages;
        } else {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
    };

    const pageRange = createPageRange();

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        onChangePage(pageNumber);
    };

    return (
        <div>
            {pageRange.map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === "number" && handlePageChange(page)}
                    disabled={page === currentPage || typeof page !== "number"}
                    style={{
                        margin: "0 5px",
                        padding: "5px 10px",
                        backgroundColor: page === currentPage ? "#000" : "#fff",
                        color: page === currentPage ? "#fff" : "#000",
                        border: "1px solid #000",
                        cursor: typeof page === "number" ? "pointer" : "default",
                    }}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;