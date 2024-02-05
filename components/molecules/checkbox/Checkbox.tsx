import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Icon } from '../../../components/atoms/icon/Icon';
import { Text } from '../../../components/atoms/text/Text';
import './Checkbox.scss';

export type CheckboxVariant = 'filled' | 'outlined';

export interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'css' | 'name'> {
  /**
   * Determines if input is checked or not.
   * @default false
   */
  checked?: boolean;
  /**
   * Determines if the input can be of mixed state ('minus' icon when checked).
   * @default false
   */
  mixed?: boolean;
  /**
   * Determines if the checkbox displays an error state.
   * @default false
   */
  error?: boolean;
  /**
   * Determines if the checkbox is disabled or not.
   * @default false
   */
  disabled?: boolean;
  /**
   * Left label text for the checkbox.
   */
  leftLabel?: string;
  /**
   * Right label text for the checkbox.
   */
  rightLabel?: string;
  /**
   * Style of the checkbox. Either filled or outlined.
   * @default filled
   */
  variant?: CheckboxVariant;
  /**
   * Name of the input.
   */
  name: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Additional data that is dispatched with the tracking event.
   */
  onClick?: (e: React.MouseEvent) => void | unknown;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLInputElement>;
}

const CheckboxComponent = (
  {
    checked = false,
    classNames = [],
    disabled = false,
    error = false,
    leftLabel,
    mixed = false,
    name,
    rightLabel,
    onClick,
    variant = 'filled',
    ...props
  }: CheckboxProps,
  ref: CheckboxProps['ref'],
) => {
  const classCheckboxContainer = 'lsux-cb-container';
  const classCheckboxElement = `${classCheckboxContainer}__cb`;
  const cnCheckbox = cn(classCheckboxElement, {
    [`${classCheckboxElement}--mixed`]: mixed,
    [`${classCheckboxElement}--${variant}`]: variant,
    [`${classCheckboxElement}--${variant}${error ? '--error' : ''}`]: variant,
    ['ml-3']: leftLabel,
    ['mr-3']: rightLabel,
  });

  return (
    <label onClick={onClick} className={cn('lsux-cb-container', classNames)} data-testid="lsux-cb-container">
      <input
        {...props}
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        type="checkbox"
        checked={checked}
        name={name}
        disabled={disabled}
        className="lsux-cb-container__input"
      />
      {leftLabel && <Text text={leftLabel} />}
      <div className={cnCheckbox} data-testid="lsux-cb-container__icon">
        {checked && <Icon name={mixed ? 'edit_remove_minus' : 'interface_check'} alt={name} size="large" />}
      </div>
      {rightLabel && <Text text={rightLabel} />}
    </label>
  );
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxComponent);
