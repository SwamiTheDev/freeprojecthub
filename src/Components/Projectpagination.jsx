import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    return (
        <div>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => handlePageClick(currentPage - 1)}>Previous</button>
            <button onClick={() => handlePageClick(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination