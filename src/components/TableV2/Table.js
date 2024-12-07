import React, { useEffect, useState } from 'react'
import Pagination from './component/Pagination';

function Table({ pagination = { page: 1, onChangePage: () => null, limitPage: 10 }, data = [], column = [], ...props }) {
    console.log('column:', column)
    // console.log('data:', data)
    // function Table(props) {}
    // function Table(...props) {}
    // const {data = [], column = []} = props
    // const n = {data: [], column: []}
    // useState=[state,setState]
    // const [state , setState] = useState()
    // const n  = useState()

    const [dataSource, setDataSource] = useState([]);
    const [sortItem, setSortItem] = useState({ sortname: '', sortorder: 0 });
    const [page, setPage] = useState(pagination.page);
    console.log('page:', page)

    const sortorder = [
        "ASC",
        "DESC",
        "NULL"
    ]

    useEffect(() => {
        setData(data);
    }, [data, page])

    useEffect(() => {
        setPage(pagination.page)
    }, [pagination.page])

    const onSort = (item, type) => {
        let ordercount = sortItem.sortorder + 1
        if (sortItem.sortorder >= 2 || sortItem.sortname !== item) {
            ordercount = 0;
        }
        const d = data.sort((a, b) => {
            let dateA = new Date(a[item])
            let dateB = new Date(b[item])

            // console.log('a:', dateA)
            // console.log('b:', dateB)
            // console.log('a:', dateA.valueOf())
            // console.log('b:', dateB.valueOf())

            if (sortorder[ordercount] === "ASC") {
                if (type === "date") {
                    // console.log('type:', type)
                    return (dateA.valueOf()) - (dateB.valueOf());
                }
            }
            if (sortorder[ordercount] === "DESC") {
                if (type === "date") {
                    return (dateB.valueOf()) - (dateA.valueOf());
                }
            }
            return 0
        })

        const n = data.sort((a, b) => {

            // console.log('a:', a[item])
            // console.log('b:', b[item])

            if (sortorder[ordercount] === "ASC") {
                if (type === "text") {
                    // console.log('type:', type)
                    return (a[item] ?? "").toLowerCase().localeCompare((b[item] ?? "").toLowerCase())
                }
                return a[item] - b[item];
            }
            if (sortorder[ordercount] === "DESC") {
                if (type === "text") {
                    return (b[item] ?? "").toLowerCase().localeCompare((a[item] ?? "").toLowerCase())
                }
                return b[item] - a[item];
            }
            return 0
        })
        console.log('sortorder[sortItem.sortorder]:', sortorder[ordercount])
        setSortItem(prve => {
            return ({
                ...prve,
                sortname: item,
                sortorder: ordercount,
            })
        })
        setData(n, d)
    };

    const setData = (data) => {
        // const temple = data.map((item) => {
        //     let rendertemple = () => null
        //     if (item.render) {
        //         rendertemple = item.render
        //     }
        //     return { ...item, render: rendertemple(item) }
        // })
        // console.log('temple:', temple)
        const start = (page - 1) * (pagination.limitPage)
        console.log('start:', start)
        const end = start + pagination.limitPage
        console.log('end:', end)
        setDataSource(data.slice(start, end));
    }

    const onChangePage = (page) => {
        setPage(page)
        if (pagination.onChangePage) {
            pagination.onChangePage(page)
        }
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        {column.map((value, index) => (
                            <th onClick={() => onSort(value.dataindex, value.datatype)} key={index}>
                                <span>{value.title}</span>
                                <span>&#8593;</span>
                                <span>&#8595;</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((e, index1) => (
                        <tr key={index1}>
                            {column.map((event, index2) => (
                                <td key={index2}>{event.render ? event.render(e[event.dataindex], e) : e[event.dataindex]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={page} onChangePage={onChangePage} itemsPerPage={pagination.limitPage} totalItems={data.length} />
        </div>
    )
}

export default Table