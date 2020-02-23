import React from 'react';
import { arrayOf, string, shape, number } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CurrencyFormat from 'react-currency-format';

const useStyles = makeStyles({
  table: {
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
              <TableCell align="right">
                <CurrencyFormat
                  decimalScale={2}
                  value={row.principle}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'£'}
                />
              </TableCell>
              <TableCell align="right">
                <CurrencyFormat
                  decimalScale={2}
                  value={row.interest}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'£'}
                />
              </TableCell>
              <TableCell align="right">
                <CurrencyFormat
                  decimalScale={2}
                  value={row.repayment}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'£'}
                />
              </TableCell>
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
    principle: number.isRequired,
    interest: number.isRequired,
    repayment: number.isRequired,
  })).isRequired,
};
