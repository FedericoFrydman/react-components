import React, { ReactElement } from 'react';
import { useForm, IFields } from './useForm';
import { Button } from '../../molecules/button/Button';
import { SelectOption } from '../../molecules/multi-select/MultiSelect';

export const FormTest: React.FC = ({}) => {
  const onPreRender = (): ReactElement => {
    return <span>PreRender</span>;
  };

  const onCustomRender = (): ReactElement => {
    return <span>Custom Render</span>;
  };

  const isLuhnValid = (cardNo: string) => {
    cardNo = cardNo.replaceAll('-', '');
    let sum = 0,
      even = false;
    cardNo
      .split('')
      .reverse()
      .forEach(function (dstr) {
        const d = parseInt(dstr);
        if (!even) {
          sum += d;
        } else {
          if (d < 5) {
            sum += d * 2;
          } else {
            sum += d * 2 - 9;
          }
        }
        even = !even;
      });

    return sum % 10 == 0;
  };

  const ccValidate = (value: string) => {
    const vmcd = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
    const amex = /^\d{4}-?\d{6}-?\d{5}$/;
    if (value.startsWith('3') && !vmcd.test(value)) return false;
    else if (!value.startsWith('3') && !amex.test(value)) return false;
    if (!isLuhnValid(value)) return false;

    return true;
  };

  const ccExpValidate = (value: string) => {
    try {
      const [month, year] = value.split('/');
      const now = new Date();
      const expiration = new Date(2000 + parseInt(year), parseInt(month));
      if (now > expiration) return false;
    } catch {
      return false;
    }
  };

  const onGlobalValidate = (values: Record<string, IFields>) => {
    if (values['cc'].value.startsWith('3')) {
      values = { ...values, cc: { ...values['cc'], format: '####-######-#####', regEx: amexRegEx } };
    } else {
      values = { ...values, cc: { ...values['cc'], format: '####-####-####-####', regEx: vmcdRegEx } };
    }
    return values;
  };

  const selectOptions: SelectOption[] = [
    {
      label: 'United States',
      value: 'US',
    },
    {
      label: 'Germany',
      value: 'DE',
    },
    {
      label: 'France',
      value: 'FR',
    },
    {
      label: 'Canada',
      value: 'CAN',
    },
    {
      label: 'Ireland',
      value: 'IRE',
    },
    {
      disabled: true,
      label: 'Costa Rica',
      value: 'CR',
    },
  ];

  const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const vmcdRegEx = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
  const amexRegEx = /^\d{4}-?\d{6}-?\d{5}$/;
  const ssnRegEx = /^\d{3}-?\d{2}-?\d{4}$/;
  const ccExpRegEx = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/;

  const [formValues, formObject] = useForm(
    {
      cc: {
        errorMessage: 'A valid credit card number is required',
        format: '####-####-####-####',
        label: 'Credit Card',
        onValidate: ccValidate,
        placeHolder: 'Credit Card',
        regEx: vmcdRegEx,
        required: true,
        type: 'text',
        value: '',
      },
      ccexp: {
        errorMessage: 'A valid credit card expiration is required',
        format: '##/##',
        label: 'CCEXP',
        onValidate: ccExpValidate,
        regEx: ccExpRegEx,
        required: true,
        type: 'text',
        value: '',
      },
      custom: { label: 'Custom', onRender: onCustomRender, type: 'custom', value: '' },
      email: {
        errorMessage: 'A valid email is required',
        label: 'Email',
        placeHolder: 'e.g., user@example.com',
        required: true,
        type: 'text',
        value: '',
      },
      name: {
        errorMessage: 'Name is required',
        inputMode: 'email',
        label: 'Name',
        onPreRender: onPreRender,
        placeHolder: 'e.g., John Smith',
        required: true,
        type: 'text',
        value: '',
      },
      phone: {
        errorMessage: 'A valid phone number is required',
        format: '(###) ###-####',
        label: 'Phone',
        regEx: phoneRegEx,
        required: true,
        type: 'text',
        value: '',
      },
      range: { label: 'Range', max: 5, min: 2, type: 'number', value: '3' },
      select: {
        errorMessage: 'An option is required',
        label: 'Select your country',
        options: selectOptions,
        required: true,
        type: 'select',
        value: 'FR',
      },
      select2: {
        errorMessage: 'An option is required',
        label: 'Select multiple countries',
        options: selectOptions,
        optionsSelected: [selectOptions[0], selectOptions[1], selectOptions[2]],
        required: true,
        type: 'select',
        value: '',
      },
      select3: {
        errorMessage: 'An option is required',
        label: 'Select country',
        options: selectOptions,
        required: true,
        type: 'select',
        value: 'DE',
      },
      ssn: {
        errorMessage: 'A valid SSN is required',
        format: '###-##-####',
        label: 'SSN',
        regEx: ssnRegEx,
        required: true,
        type: 'text',
        value: '',
      },
    },
    onGlobalValidate,
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const message =
      'Single select value: ' +
      formValues['select'].value +
      '\n' +
      'Multiple select value: ' +
      formValues['select2'].value +
      '\n' +
      'Native select value: ' +
      formValues['select3'].value;

    alert(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formObject.renderForm()}
      <Button label="Submit" stretch type="submit" classNames={['mt-5']} />
    </form>
  );
};
