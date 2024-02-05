import { HTMLProps, Ref, ReactElement, Children, forwardRef } from 'react';
import cn from 'classnames';

export type GridRowVariants =
  | 'plain'
  | 'center'
  | 'pillar'
  | 'mobile-full' // Note: Use `halves` instead.
  | 'half' // Note: Use `halves-fixed` instead.
  | 'halves'
  | 'halves-fixed'
  | 'four-eight'
  | 'eight-four'
  | 'nine-three'
  | 'thirds'
  | 'quarters';

export interface GridRowProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Layout of the Grid Row.
   */
  variant?: GridRowVariants;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Children Grid Cells
   */
  children?: ReactElement | ReactElement[];
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
}

const GridRowComponent = (
  { variant = 'plain', children, classNames = [], ...props }: Partial<GridRowProps>,
  ref: GridRowProps['ref'],
) => {
  const count = 'children' + String(Children.toArray(children).length);

  if (variant === 'mobile-full') variant = 'halves';
  else if (variant === 'half') variant = 'halves-fixed';

  const cnGridRow = cn(
    {
      'lsux-row': true,
      [`${variant}`]: variant,
      [`${count}`]: count,
    },
    classNames,
  );

  return (
    <div className={cnGridRow} ref={ref} {...props}>
      {children}
    </div>
  );
};

export const GridRow = forwardRef<HTMLDivElement, GridRowProps>(GridRowComponent);
