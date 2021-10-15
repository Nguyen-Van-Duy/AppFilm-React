import React from 'react';
import ReactPaginate from 'react-paginate';
import './PaginationPage.css';

const PaginationPage = ({paginate, totalPages}) => {

    const handlePageClick = (data) => {
        paginate(data.selected + 1);
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={totalPages}//số trang
                marginPagesDisplayed={2}//só trang cuối
                pageRangeDisplayed={3}//phạm vi hiển thị
                onPageChange={handlePageClick}
                containerClassName={"container-pagination"}
                pageClassName={"container-pagination__item"}
                pageLinkClassName={"container-pagination__link"}
                previousClassName={"container-pagination__item"}
                previousLinkClassName={"container-pagination__link"}
                nextClassName={"container-pagination__item"}
                nextLinkClassName={"container-pagination__link"}
                breakClassName={"container-pagination__item"}
                breakLinkClassName={"container-pagination__link"}
                activeClassName={"pagination-active"}
            />
    </div>
    );
};

export default PaginationPage;