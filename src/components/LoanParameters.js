import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import LoanContext from '../modules/Loan/Context';

export default function LoanInputs() {
  const { amount, duration, setAmount, setDuration } = useContext(LoanContext);

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Amount Requested</InputLabel>
        <Input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          startAdornment={<InputAdornment position="start">£</InputAdornment>}
          inputProps={{
            'data-testid': 'amountInput'
          }}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Duration</InputLabel>
        <Input
          type="number"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          endAdornment={<InputAdornment position="end">months</InputAdornment>}
          inputProps={{
            'data-testid': 'durationInput'
          }}
        />
      </FormControl>
    </div>
  );
}