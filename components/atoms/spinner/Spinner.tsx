import { forwardRef, HTMLProps, Ref } from 'react';
import cn from 'classnames';

import './Spinner.scss';

export type SpinnerSize = 'small' | 'medium' | 'large' | 'xlarge';
export type SpinnerColor = 'neutral' | 'brand';

export interface SpinnerProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Sets the size of the spinner
   * @default medium
   */
  spinnerSize?: SpinnerSize;
  /**
   * Spinner color
   * @default neutral
   */
  color?: SpinnerColor;
  /**
   * Blocks the screen
   * @default false
   */
  blocking?: boolean;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const SpinnerComponent = (
  {
    blocking = false,
    spinnerSize = blocking ? 'large' : 'medium',
    color = 'neutral',
    classNames = [],
    ...props
  }: SpinnerProps,
  ref: SpinnerProps['ref'],
) => {
  const classSpinner = 'lsux-spinner';
  const cnSpinner = cn(
    {
      [`${classSpinner}`]: true,
      [`${classSpinner}--${spinnerSize}`]: spinnerSize,
      [`${classSpinner}--${color}`]: color,
      [`spin`]: true,
    },
    classNames,
  );

  const classSpinnerCenter = `${classSpinner}__center`;
  const cnCircle = cn({
    [classSpinnerCenter]: true,
    [`${classSpinnerCenter}--${color}`]: true,
  });

  const spinnerEl = (
    <div {...props} className={cnSpinner} ref={ref}>
      <div className={cnCircle}></div>
    </div>
  );

  if (blocking) {
    return <div className="lsux-spinner-blocker">{spinnerEl}</div>;
  } else {
    return spinnerEl;
  }
};

/**
 * Use our circular spinner to show users a task is loading or in progress, and will take an indeterminate amount of time. There should only be a single spinner on a page at one time.
 */

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(SpinnerComponent);
