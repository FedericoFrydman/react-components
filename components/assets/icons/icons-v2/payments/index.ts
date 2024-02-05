import payments_amazon from './payments-amazon.svg';
import payments_amex from './payments-amex.svg';
import payments_apple_pay from './payments-apple-pay.svg';
import payments_diners from './payments-diners.svg';
import payments_discover from './payments-discover.svg';
import payments_jcb from './payments-jcb.svg';
import payments_mastercard from './payments-mastercard.svg';
import payments_paypal from './payments-paypal.svg';
import payments_visa from './payments-visa.svg';

export const V2_PAYMENTS_ICONS: { [char: string]: string } = {
  payments_amazon,
  payments_amex,
  payments_apple_pay,
  payments_diners,
  payments_discover,
  payments_jcb,
  payments_mastercard,
  payments_paypal,
  payments_visa,
};

export const V2_PAYMENTS_ICON_NAMES: string[] = Object.keys(V2_PAYMENTS_ICONS);
