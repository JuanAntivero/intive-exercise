import React from 'react';
import './common.css';

function Table(props){
    return (
        <table className='responsive-table'>
            <thead>
                <tr>
                    {props.tcols.map((col, pos) => {
                        return (<th key={pos}>
                            {col.columnName}
                        </th>);
                    })}
                </tr>
            </thead>
            <tbody>   
            {props.trows.map((rowInfo, pos) => {
                    return (
                        <tr key={pos}>
                            {props.tcols.map((col, colPos) => {
                                return (
                                    <td data-label={col.columnName} key={colPos}>
                                        {rowInfo[col.id]}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
            </table>
    );
}

export default Table;