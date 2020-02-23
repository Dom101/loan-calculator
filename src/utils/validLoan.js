const restrictions = {
  rcf: {
    amountMin: 1000,
    amountMax: 150000,
    durationMin: 1,
    durationMax: 12,
  },
  bl: {
    amountMin: 10000,
    amountMax: 200000,
    durationMin: 1,
    durationMax: 60,
  },
};

export default function isValidLoan(amount, duration, businessLoan) {
  const i = businessLoan ? 'bl' : 'rcf';

  if (amount < restrictions[i].amountMin) {
    return false;
  }
  if (amount > restrictions[i].amountMax) {
    return false;
  }
  if (duration < restrictions[i].durationMin) {
    return false;
  }
  if (duration > restrictions[i].durationMax) {
    return false;
  }

  return true;
}