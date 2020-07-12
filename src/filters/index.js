import Vue from 'vue';
import moment from 'moment';
import TranslateSvc from '../services/Translate';

const SI_SYMBOL = [
  '',
  '',
  'Million',
  'Billion',
  'Trillion',
  'Quadrillion',
  'Quintillion',
  'Sextillion',
];

Vue.filter('translate', (key) => {
  const translation = TranslateSvc.getTranslation();
  return TranslateSvc.translate(translation, key);
});

Vue.filter('abbreviateNumber', (number) => {
  const tier = Math.log10(number) / 3;
  if (tier === 0 || tier === 1) {
    return number;
  }

  const suffix = SI_SYMBOL[tier];
  const scale = 10 ** 3;
  const scaled = number / scale;

  return `${scaled.toFixed(2)} ${suffix}`;
});

Vue.filter('currency', (value) => {
  if (typeof value === 'number') {
    const val = value.toFixed(2)
      .replace('.', ',');
    return `Rp ${val.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }
  return value;
});

Vue.filter('percentage', (value, decimal = 0) => {
  if (typeof value === 'number') {
    const val = value.toFixed(decimal);
    return `${val.toString()}%`;
  }
  return value;
});

Vue.filter('formatDate', (value) => moment(String(value))
  .format('MM/DD/YYYY hh:mm'));

Vue.filter('numberFormat', (value, decimal = 0, init = 0) => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return init;
  }
  if (typeof value === 'number') {
    const val = value.toFixed(decimal)
      .replace('.', ',');
    return val.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return value;
});
