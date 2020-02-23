import React, { useState, useContext } from 'react';
import {
  FormControl, Input, InputLabel, InputAdornment, Typography, makeStyles
} from '@material-ui/core';
import { bool } from 'prop-types';

import Table from './Table';
import repaymentCalculator from '../utils/repaymentCalculator';
import isValidLoan from '../utils/validLoan';
import LoanContext from '../modules/Loan/Context';

export default function Calculator({ isBl }) {
  const title = isBl ? 'Business Loan' : 'Revolving Credit Facility';
  const [interestRate, setInterestRate] = useState(3);
  const { amount, duration } = useContext(LoanContext);

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  if (!isValidLoan(amount, duration, isBl)) {
    return (
      <Typography variant="h6" className={classes.margin}>
        Sorry {title} isn't available for that duration / amount
      </Typography>
    );
  }

  const rows = repaymentCalculator(amount, duration, interestRate, isBl);

  return (
    <div>
      <Typography variant="h6" className={classes.margin}>
        {title}
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

Calculator.propTypes = {
  isBl: bool,
};

Calculator.defaultProps = {
  isBl: false,
};