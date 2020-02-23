export default function repaymentCalculator(amount, duration, interestRate, isBc) {
  const principle = amount / duration;

  const repayments = [];
  const date = new Date();
  let remainingTotal = amount;
  let totalInterest = 0;
  let totalRepayment = 0;

  for (let i = 0; i < duration; i++) {
    date.setMonth(date.getMonth() + 1);
    let interest = (remainingTotal * interestRate) / 100;
    let repayment = interest + principle;

    if (isBc && i === 0) {
      const fee = amount / 10;
      interest += fee;
      repayment += fee;
    }

    repayments.push({
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      principle,
      interest,
      repayment,
    });

    remainingTotal -= principle;
    totalInterest += interest;
    totalRepayment += repayment;
  }

  // Add total 
  repayments.push({
    date: 'Total',
    principle: amount,
    interest: totalInterest,
    repayment: totalRepayment,
  });

  return repayments;
}