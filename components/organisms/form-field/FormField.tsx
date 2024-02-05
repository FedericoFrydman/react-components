import { Children, forwardRef, ReactElement, Ref, useEffect, useState } from 'react';
import cn from 'classnames';

import './form-field.scss';
import { Text } from '../../atoms/text/Text';
import { Icon, IconNames } from '../../atoms/icon/Icon';
import { InputValidationStatus } from '../../molecules/input/Input';
import { IconColors } from '../../../components/assets/icons';

export interface FormFieldProps {
  /**
   * A unique identifier for the input field.
   */
  id?: string;
  /**
   * A clear and concise description of the form-field purpose.
   */
  label?: string;
  /**
   * A label to the left of the FormField
   */
  leftLabel?: string;
  /**
   * A label to the right of the FormField
   */
  rightLabel?: string;
  /**
   * Warning or error message.
   */
  validationHint?: string;
  /**
   * Triggers error | warning | success styles on the component. Important for accessibility.
   */
  status?: InputValidationStatus;
  /**
   * Brief description under the component
   */
  description?: string;
  /**
   * Removes the default margin below the text
   */
  noMargin?: boolean;
  /**
   * Children components
   */
  children?: ReactElement[] | ReactElement;
  /**
   * Stretch the component across the full width of its parent.
   */
  stretch?: boolean;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Define if the input is required
   */
  required?: boolean;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

/**
 * The FormField component is a container that adds the labels; validation messages, hints and colors for the different controls in a form (inputs, selects, checkbox, radio).
 */
const FormFieldComponent = (
  {
    id,
    label,
    leftLabel,
    rightLabel,
    validationHint,
    description,
    status,
    noMargin,
    children,
    stretch,
    classNames = [],
    required = false,
    ...props
  }: FormFieldProps,
  ref: FormFieldProps['ref'],
) => {
  const classFormField = 'lsux-form-field';
  const classContainer = `${classFormField}-container`;
  const cnContainer = cn(
    classContainer,
    {
      [`${classContainer}--stretch`]: stretch,
      [`${classContainer}--no-margin`]: noMargin,
    },
    classNames,
  );

  const cnValidation = {
    [`${classContainer}__hint_text`]: status == 'valid' || status == 'warning',
    [`${classContainer}__hint_text--invalid`]: status == 'invalid',
    ['pl-2']: true,
  };

  const [validationIcon, setValidationIcon] = useState<IconNames>(null);
  const [validationColor, setValidationColor] = useState<IconColors>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (validationHint) {
      switch (status) {
        case 'valid':
          setValidationIcon('alert_success');
          setValidationColor('G200');
          break;
        case 'warning':
          setValidationIcon('alert_warning');
          setValidationColor('Y300');
          break;
        case 'invalid':
          setValidationIcon('alert_information');
          setValidationColor('R300');
          break;
        default:
          setValidationIcon(null);
          setValidationColor(null);
          break;
      }
    }
  }, [status, validationHint]);

  const elements = Children.toArray(children);

  useEffect(() => {
    if (elements.length > 0) {
      const element = elements[0] as ReactElement;
      setDisabled(element.props.disabled);
    }
  }, [elements]);

  return (
    <div {...props} ref={ref} className={cnContainer}>
      {label && (
        <label className={cn(`${classContainer}__label`, { disabled: disabled })} htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {rightLabel || leftLabel ? (
        <div style={{ alignItems: 'center', display: 'flex' }}>
          {leftLabel && <div className="mr-3">{leftLabel}</div>}
          {children}
          {rightLabel && <div className="ml-3">{rightLabel}</div>}
        </div>
      ) : (
        <>{children}</>
      )}
      {description && (
        <Text textSize="small" classNames={[`${classContainer}__description`, 'pt-3']} text={description} />
      )}
      {validationHint && (
        <div className={cn(`${classContainer}__hint`, `pt-3`)}>
          <Icon name={validationIcon} color={validationColor} size="small" />
          <Text textSize="small" classNames={cnValidation} text={validationHint} />
        </div>
      )}
    </div>
  );
};

export const FormField = forwardRef(FormFieldComponent);
