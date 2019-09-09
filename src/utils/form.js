import VMasker from 'vanilla-masker';

export const validateForm = form => {
  for (const element in form) {
    if (Object.prototype.hasOwnProperty.call(form, element)) {
      if (!form[element].value) return false;
      if (form[element].id === 'installments' && form[element].value > 12) {
        form[element].value = 12;
      }
    }
  }
  return true;
};

export const ocurrencesCount = (string, char) => {
  const ocurrences = string.reduce((acc, current) => {
    if (current === char) acc += 1;
    return acc;
  }, 0);
  return ocurrences;
};

export const currencyToFloat = value => {
  const moneyValue = value
    .split('R$')
    .join('')
    .replace(',', '.')
    .replace(' ', '');
  if (ocurrencesCount(moneyValue.split(''), '.') > 1) {
    return moneyValue.replace(moneyValue.charAt(moneyValue.indexOf('.')), '');
  }
  return moneyValue;
};

export const formatReal = value => {
  VMasker(value).maskMoney({
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$',
    zeroCents: false,
  });
};
