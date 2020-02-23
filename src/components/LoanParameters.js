import React from 'react';
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function LoanInputs() {
  const [values, setValues] = useState({
    amount: '',
    duration: ''
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
          value={values.amount}
          onChange={handleChange('amount')}
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
          value={values.duration}
          onChange={handleChange('duration')}
          endAdornment={<InputAdornment position="end">months</InputAdornment>}
          inputProps={{
            'data-testid': 'durationInput'
          }}
        />
      </FormControl>
    </div>
  );
}