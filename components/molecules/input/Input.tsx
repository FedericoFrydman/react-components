import { cloneElement, DetailedHTMLProps, forwardRef, ReactElement, Ref, useEffect, useState } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import cn from 'classnames';

import { Button } from '../button/Button';
import { Icon, IconNames, IconProps } from '../../atoms/icon/Icon';
import { IconColors } from '../../../components/assets/icons';
import './input.scss';

export type InputValidationStatus = '' | 'valid' | 'warning' | 'invalid';

export type InputType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'currency';

export interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  /**
   * Triggers error | warning | success styles on the component. Important for accessibility.
   */
  status?: InputValidationStatus;
  /**
   * Determines the type of the Input.
   * @default text
   */
  type?: InputType;
  /**
   * Determines which icon should be shown on the right; if a password type this property is managed internally with the hide/show icons.
   * @deprecated Please use `iconLeft` and `iconRight` instead.
   */
  icon?: IconNames;
  /**
   * Icon on the left side of the input
   */
  iconLeft?: ReactElement<IconProps>;
  /**
   * Icon on the right side of the input
   */
  iconRight?: ReactElement<IconProps>;
  /**
   * Applies a color to the icon.  This could be for the icon on the right or a search icon when type is search.
   * @default BRAND200
   */
  iconColor?: IconColors;
  /**
   * Custom class names for the Input.
   */
  classNames?: cn.Argument;
  /**
   * Format uses the NumberFormat component instead of Input. It allows for input masking.
   */
  format?: string;
  /**
   * Placeholder value for the input field.
   */
  placeholder?: string;
  /**
   * Prefix value for the input field. Only displays when `NumberFormat` component is rendered.
   */
  prefix?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLInputElement>;
}

const InputComponent = (
  {
    status = '',
    type = 'text',
    icon,
    iconColor = 'BRAND200',
    format,
    placeholder,
    prefix,
    iconLeft,
    iconRight = icon ? <Icon name={icon} color={iconColor} /> : null,
    classNames = [],
    ...props
  }: InputProps,
  ref: InputProps['ref'],
) => {
  const [iconColorState, setIconColorState] = useState(iconColor);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const classInputContainer = `lsux-input-container`;
  const cnInputContainer = cn(classInputContainer);

  const classInput = 'lsux-input-container__input';
  const cnInput = cn(
    {
      [`${classInput}`]: true,
      [`${classInput}--${status}`]: status,
      [`${classInput}--icon-left`]: type === 'search' || iconLeft,
      [`${classInput}--icon-right`]: type === 'password' || iconRight,
    },
    classNames,
  );

  const classInputIcon = 'lsux-input__icon';

  useEffect(() => {
    switch (status) {
      case 'invalid': {
        setIconColorState('R200');
        break;
      }
      case 'warning': {
        setIconColorState('Y200');
        break;
      }
      case 'valid': {
        setIconColorState('G200');
        break;
      }
      default: {
        setIconColorState(iconColor);
        break;
      }
    }
  }, [status, iconColor]);

  if (type === 'password' && !iconColor) {
    setIconColorState('BRAND200');
  }

  if (iconLeft) {
    iconLeft = cloneElement(iconLeft, {
      classNames: [iconLeft.props?.classNames, classInputIcon, `${classInputIcon}-left`],
      color: iconColorState,
    });
  }

  if (iconRight) {
    iconRight = cloneElement(iconRight, {
      classNames: [iconRight.props?.classNames, classInputIcon, `${classInputIcon}-right`],
      color: iconColorState,
    });
  }

  if (type === 'search') {
    iconLeft = (
      <Icon
        name="interface_search_magnifying_glass"
        classNames={[classInputIcon, `${classInputIcon}-search-icon`]}
        color={iconColorState}
      />
    );
  }

  if (type != 'password' && icon) {
    iconRight = <Icon name={icon} color={iconColorState} classNames={classInputIcon} />;
  }

  const handleIconClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { ref: removedRef, ...other } = props;

  // Set default format value for `tel` input
  if (type === 'tel' && !format) {
    format = '(###) ###-####';
  }

  // Set default placeholder value for `tel` input
  if (type === 'tel' && !placeholder) {
    placeholder = '(___) ___-____';
  }

  const content = (
    <div className={cnInputContainer}>
      {iconLeft}
      {format && (type === 'password' || type === 'tel' || type === 'text') && (
        <NumberFormat
          className={cnInput}
          format={format}
          mask="_"
          placeholder={placeholder}
          prefix={prefix}
          type={type}
          {...(props as NumberFormatProps)}
        />
      )}
      {type === 'currency' && (
        <NumberFormat
          allowLeadingZeros={false}
          className={cnInput}
          format={format}
          placeholder={placeholder ?? `${prefix ?? '$'}0.00`}
          prefix={prefix ?? '$'}
          thousandSeparator={true}
          type="text"
          {...(props as NumberFormatProps)}
        />
      )}
      {!format && type !== 'currency' && (
        <input
          {...(props as DetailedHTMLProps<unknown, unknown>)}
          type={type === 'password' && passwordVisible ? 'text' : type}
          placeholder={placeholder}
          className={cnInput}
          ref={ref}
        />
      )}
      {type === 'password' && (
        <Button
          classNames={[classInputIcon, `${classInputIcon}-hide-icon`]}
          iconColor={iconColorState}
          iconLeft={passwordVisible ? 'action_eye_closed' : 'action_eye_open'}
          onClick={handleIconClick}
          variant="tertiary"
        />
      )}
      {type !== 'password' && iconRight}
    </div>
  );

  return content;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent);
