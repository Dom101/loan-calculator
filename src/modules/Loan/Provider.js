import React, { useMemo, useState } from 'react';
import { node } from 'prop-types';

import LoanContext from './Context';

export default function LoanProvider({ children }) {
  const [amount, setAmount] = useState();
  const [duration, setDuration] = useState();

  const context = useMemo(
    () => ({
      amount,
      duration,
      setAmount,
      setDuration
    }),
    [amount, duration],
  );

  return <LoanContext.Provider value={context}>{children}</LoanContext.Provider>;
}

LoanProvider.propTypes = {
  children: node.isRequired,
};