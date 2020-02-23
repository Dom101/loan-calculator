import React from 'react';
import { arrayOf, string, shape } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

export default function LoanTable({ rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Repayment Date</TableCell>
            <TableCell align="right">Principle</TableCell>
            <TableCell align="right">Interest</TableCell>
            <TableCell align="right">Total Repayment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.principle}</TableCell>
              <TableCell align="right">{row.interest}</TableCell>
              <TableCell align="right">{row.repayment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

LoanTable.propTypes = {
  rows: arrayOf(shape({
    date: string.isRequired,
    principle: string.isRequired,
    interest: string.isRequired,
    repayment: string.isRequired,
  })).isRequired,
};
