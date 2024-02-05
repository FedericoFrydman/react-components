import { Ref, forwardRef } from 'react';
import cn from 'classnames';

import './Radio.scss';

export interface RadioProps extends Omit<React.HTMLProps<HTMLInputElement>, 'css'> {
  /**
   * Label to the right of the button
   */
  rightLabel?: string;
  /**
   * Label to the left of the button
   */
  leftLabel?: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLInputElement>;
}

const RadioComponent = ({ rightLabel, leftLabel, classNames = [], ...props }: RadioProps, ref: RadioProps['ref']) => {
  const classContainer = 'lsux-rb-container';
  const cnContainer = cn(
    {
      [`${classContainer}`]: true,
    },
    classNames,
  );

  const classContainerRb = `${classContainer}__rb`;
  const cnContainerRb = cn({
    [`${classContainerRb}`]: true,
    ['margin-left']: leftLabel,
    ['margin-right']: rightLabel,
  });

  return (
    <label className={cnContainer}>
      <input {...props} ref={ref} type="radio" />
      {leftLabel && <span>{leftLabel}</span>}
      <div className={cnContainerRb}></div>
      {rightLabel && <span>{rightLabel}</span>}
    </label>
  );
};

/**
 * A radio button is a quick way to extract a single coded answer from our users by presenting multiple possibilities and allowing only one option to be chosen.
 */

export const Radio = forwardRef<HTMLInputElement, RadioProps>(RadioComponent);
