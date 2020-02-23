import React, { useState, useContext } from 'react';
import {
  FormControl, Input, InputLabel, InputAdornment, Typography, makeStyles
} from '@material-ui/core';

import Table from './Table';
import repaymentCalculator from '../utils/repaymentCalculator';
import LoanContext from '../modules/Loan/Context';

export default function RcfCalculator() {
  const [interestRate, setInterestRate] = useState(3);
  const { amount, duration } = useContext(LoanContext);

  const rows = repaymentCalculator(amount, duration, interestRate);

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" className={classes.margin}>
        Revolving Credit Facility
      </Typography>
      <FormControl className={classes.margin} >
        <InputLabel htmlFor="standard-adornment-amount">Interest Rate</InputLabel>
        <Input
          type="number"
          value={interestRate}
          onChange={(event) => setInterestRate(event.target.value)}
          endAdornment={<InputAdornment position="start">%</InputAdornment>}
          inputProps={{
            'data-testid': 'interestInput'
          }}
        />
      </FormControl>
      <Table rows={rows} />
    </div>
  );
};
