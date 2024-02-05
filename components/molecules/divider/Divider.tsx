import { Ref, forwardRef } from 'react';
import cn from 'classnames';

import { Text } from '../../atoms/text/Text';
import './divider.scss';

export type DividerTint = 'light' | 'medium' | 'dark';

export interface DividerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Define the text that would be displayed in divider
   */
  label?: string;
  /**
   * Tint of the divider. Defaults to `light`.
   */
  tint?: DividerTint;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
}

const DividerComponent = (
  { label, tint = 'light', classNames = [], ...props }: DividerProps,
  ref: DividerProps['ref'],
) => {
  const classDivider = 'lsux-divider';
  const cnDivider = cn(
    {
      [`${classDivider}`]: true,
      [`${classDivider}__text`]: label,
      [`${classDivider}__line`]: !label,
      [`${classDivider}--tint-${tint}`]: tint,
    },
    classNames,
  );

  return (
    <div {...props} className={cnDivider} ref={ref}>
      <Text text={label} as="p" />
    </div>
  );
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(DividerComponent);
