import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import LoanProvider from './modules/Loan/Provider';
import LoanParameters from './components/LoanParameters';
import RcfCalculator from './components/RcfCalculator';
import Table from './components/Table';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  grid: {
    paddingTop: 20
  }
}));

const rows = [
  { date: '01/01/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
  { date: '01/02/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
  { date: '01/03/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
  { date: '01/04/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
  { date: 'Total', principle: '£10,000', interest: '£750', repayment: '£10,750' },
];

function App() {
  const classes = useStyles();

  return (
    <LoanProvider>

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Loan Calculator
          </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <LoanParameters />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <RcfCalculator />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Table rows={rows} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </LoanProvider>
  );
}

export default App;
