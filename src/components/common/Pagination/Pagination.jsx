import React from 'react';

const Pagination = ({currentPage, onPageChanged, pageSize, totalUsersCount}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }
    return (
        <ul className="pagination">
            {pagesArr.map((page) => {
                return (
                    <li
                        onClick={() => {
                            onPageChanged(page);
                        }}
                        key={page}
                        className={currentPage === page ? "active" : null}
                    >
                        {page}
                    </li>
                );
            })}
        </ul>
    );
}

export default Pagination;