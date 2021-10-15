import React, { Fragment, useState } from 'react';
import './Pagination.css';

const Pagination = ({postsPerPage, totalPosts, paginate, chapter}) => {
    const [onFocus, setOnFocus] = useState(1)

    const pageNumbers = [];
    //lấy tổng số trang = làm tròn lên (tổng số sp / số sp 1 trang)
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginationHandler = (number) => {
        paginate(number);
        setOnFocus(number)
    }

    return (
        <Fragment>
            <ul className="chapter-film">
                {pageNumbers.map((number, index) => (
                    <li key={number} onClick={() => paginationHandler(number)} className={onFocus === number ? "chapter-film--focus" : ''}>
                        tập {chapter + index}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Pagination;