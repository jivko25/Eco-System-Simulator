import styles from './Table.module.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function PopulationTable({data}) {
  return (
    <table>
            {
                data.map((element, index) => {
                    return (
                    <tr key={index}>
                        <th>{element.label}</th>
                        {
                            element.data.map((el, inx) => {
                                return(
                                    <th key={inx}>{el.toFixed(0)}</th>
                                )
                            })
                        }
                    </tr>
                    )
                })
            }
    </table>
  );
}