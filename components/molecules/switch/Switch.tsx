import { Ref, HTMLProps, forwardRef } from 'react';
import cn from 'classnames';

import './Switch.scss';

export interface SwitchProps extends Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type' | 'css'> {
  /**
   * Indicates that the switch is checked (turned on)
   */
  isChecked?: boolean;
  /**
   * Indicates that the switch control is currently disabled
   */
  disabled?: boolean;
  /**
   * Indicates the size of the switch control
   */
  switchSize?: 'small' | 'large';
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLButtonElement>;
  /**
   * Action trigger when switch is pressed
   */
  onClick?: (e: React.MouseEvent) => void | unknown;
}

const SwitchComponent = (
  { isChecked = false, onClick, disabled = false, switchSize = 'large', classNames = [], ...props }: SwitchProps,
  ref: SwitchProps['ref'],
) => {
  const classSwitch = 'lsux-switch';
  const cnSwitch = cn(
    classSwitch,
    `${classSwitch}--${switchSize}`,
    {
      checked: isChecked,
      disabled: disabled,
    },
    classNames,
  );

  const classKnob = `${classSwitch}__knob`;
  const cnKnob = cn(classKnob, `${classKnob}--${switchSize}`);
  const ariaLabel = props['aria-label'] || 'Switch';

  return (
    <button {...props} onClick={onClick} className={cnSwitch} ref={ref} disabled={disabled} aria-label={ariaLabel}>
      <span className="lsux-switch__slider"></span>
      <span className={cnKnob}></span>
    </button>
  );
};

/**
 * Switch switchs between an binary action, "on" and "off" state. The response should be instant and requires no button to confirm selection.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(SwitchComponent);
/**
 * Toggle backwards compatible.
 */
//export const Toggle = forwardRef(SwitchComponent);
export const Toggle = forwardRef<HTMLButtonElement, SwitchProps>(SwitchComponent);
export type ToggleProps = SwitchProps;
