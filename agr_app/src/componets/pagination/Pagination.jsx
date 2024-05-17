import classes from '../UI/Pagination_panel/Pagination.module.css'

export default function Pagination({ newsPage, total, paginating}) {
    const pageIndex = [];
    for (let i = 0; i < Math.ceil(total / newsPage); i++) {
        pageIndex.push(i + 1);
    }


    return (
        <>
            <ul className={classes.pagination}>
                {pageIndex.map(number => (
                    <li className={classes.page_item} key={number}>
                        <a href="#" className={classes.page_link} onClick={() => paginating(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}