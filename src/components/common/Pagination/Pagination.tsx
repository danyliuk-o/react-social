import React, {useState} from 'react';

type PropsType = {
    currentPage: number, onPageChanged: (pageNumber: number) => void, pageSize: number, totalPaginationCount: number, portionSize?: number
}

const Pagination: React.FC<PropsType> = (props) => {
    const {
        currentPage,
        onPageChanged,
        pageSize,
        totalPaginationCount,
        portionSize = 10
    } = props
    const [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let pagesCount = Math.ceil(totalPaginationCount / pageSize);

    const pagesArr: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <ul className="pagination">
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            {pagesArr.filter((page) => ((page > leftPortionPageNumber) && (page <= rightPortionPageNumber))).map((page) => {
                return (
                    <li
                        className={currentPage === page ? "active" : ''}
                        onClick={() => {
                            onPageChanged(page);
                        }}
                        key={page}
                    >
                        {page}
                    </li>
                );
            })
            }
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Next</button>}
        </ul>
    );
}

export default Pagination;