import { compose } from 'ramda';

const getInstallmentValue = antecipation => {
  const { amount, installmentQt } = antecipation;
  const result = amount / installmentQt;
  return { ...antecipation, installmentValue: parseFloat(result.toFixed(2)) };
};

const getInstallmentWithMdr = antecipation => {
  const { installmentValue, mdrRate } = antecipation;
  const result = installmentValue - (mdrRate / 100) * installmentValue;
  return { ...antecipation, installmentWithMdr: parseFloat(result.toFixed(2)) };
};

const getInstallmentAntecipation = antecipation => {
  const { installmentWithMdr, mdrRate, daysAntecipation = [] } = antecipation;
  const mdrPercent = mdrRate / 100;
  const dailyRate = mdrPercent / 30;
  const result = daysAntecipation.map(day => {
    return {
      [day]: installmentWithMdr - [day * dailyRate * installmentWithMdr],
    };
  });
  return { ...antecipation, installmentAntecipation: result };
};

/**
 * @param {Object} antecipation - antecipation data for installment calculation [Required]
 * @returns {Object} - object containing the antecipation data with the amount receivable for the number of days entered
 */
export const getValueAntecipation = antecipation => {
  return compose(
    getInstallmentAntecipation,
    getInstallmentWithMdr,
    getInstallmentValue
  )(antecipation);
};
