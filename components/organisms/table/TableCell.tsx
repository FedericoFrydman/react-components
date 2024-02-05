import { forwardRef, HTMLProps, ReactElement, Ref } from 'react';
import cn from 'classnames';

import './Table.scss';

export type TableCellAlign = 'left' | 'right' | 'center';

export interface TableCellProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Content of the cell
   */
  children: ReactElement[] | ReactElement | string | number;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Define the flex-direction
   */
  alignContent?: 'top' | 'center' | 'bottom';
  /**
   * Turns off text wrapping
   */
  noTextWrap?: boolean;
  /**
   * Sets the text align attribute to left/right/center
   */
  textAlign?: TableCellAlign;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const TableCellComponent = (
  { children, classNames = [], noTextWrap = false, textAlign = 'left', alignContent = 'top' }: TableCellProps,
  ref: TableCellProps['ref'],
) => {
  return (
    <div
      className={cn(
        {
          ['lsux-table__row__cell']: true,
          ['lsux-table__row__cell--nowrap']: noTextWrap,
          [`lsux-table__row__cell--text--${textAlign}`]: textAlign,
          [`lsux-table__row__cell--content--${alignContent}`]: alignContent,
        },
        classNames,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

export const TableCell = forwardRef<HTMLDivElement, TableCellProps>(TableCellComponent);
