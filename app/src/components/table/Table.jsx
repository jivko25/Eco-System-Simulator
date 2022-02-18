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
    console.log(data);
    console.log('test');
  return (
    <table>
            {
                data.map(element => {
                    return (
                    <tr>
                        <th>{element.label}</th>
                        {
                            element.data.map(el => {
                                return(
                                    <th>{el}</th>
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