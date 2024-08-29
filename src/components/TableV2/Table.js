import React, { useEffect, useState } from 'react'

function Table({ data = [], column = [], ...props }) {
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

    useEffect(() => {
        const setData = () => {
            // const temple = data.map((item) => {
            //     let rendertemple = () => null
            //     if (item.render) {
            //         rendertemple = item.render
            //     }
            //     return { ...item, render: rendertemple(item) }
            // })
            // console.log('temple:', temple)
            setDataSource(data);
        }
        setData();
    }, [data])

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        {column.map((value, index) => (
                            <th key={index}>{value.title}</th>
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
        </div>
    )
}

export default Table