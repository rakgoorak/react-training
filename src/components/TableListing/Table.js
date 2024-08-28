// @type
/**
 *
 * @param {{
 * dataSource: {
 *    title: React.ReactNode,
 *    dataIndex: string,
 *    align: 'center'| 'left'| 'right',
 *    sorter: function | boolean,
 *    width: string | number,
 *    render: function(text, record, index): React.ReactNode
 * }[],
 * onRow: function(columns, index): {
 * onClick: (event) => {}, // click row
 * onDoubleClick: (event) => {}, // double click row
 * onContextMenu: (event) => {}, // right button click row
 * onMouseEnter: (event) => {}, // mouse enter row
 * onMouseLeave: (event) => {}, // mouse leave row
 * },
 * onHeaderRow: function(record, index): {onClick: () => {}, // click header row},
 * footer: function(currentPageData),
 * pagination: object | false
 * }} props
 * @returns
 */
function Table({ dataSource = [], ...props }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
