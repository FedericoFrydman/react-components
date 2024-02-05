import { forwardRef, HTMLProps, ReactElement, Ref } from 'react';
import cn from 'classnames';

import './Table.scss';
import { TableCellProps } from './TableCell';

export type TableRowSize = 'small' | 'medium' | 'large' | 'auto';

export interface TableRowProps extends Omit<HTMLProps<HTMLDivElement>, 'css' | 'size'> {
  /**
   * Column description; if left out the number of children is used
   */
  columns?: string;
  /**
   * Children; typically the cells
   */
  children: ReactElement<TableCellProps>[] | ReactElement<TableCellProps>;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Indicates the row is intended as a header row
   */
  isHeader?: boolean;
  /**
   * Indicates an odd row for alternative background shading
   */
  isOdd?: boolean;
  /**
   * Size of the row
   */
  size?: TableRowSize;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}
const TableRowComponent = (
  {
    isHeader = false,
    size = 'auto',
    classNames = [],
    children,
    isOdd = false,
    columns,
    disabled,
    ...props
  }: TableRowProps,
  ref: TableRowProps['ref'],
) => {
  const childrenLength = Array.isArray(children) ? children.length : 1;

  const classTableRow = 'lsux-table__row';

  return (
    <div
      {...props}
      className={cn(
        {
          [`${classTableRow}`]: true,
          [`${classTableRow}--${size}`]: size,
          [`${classTableRow}--header`]: isHeader,
          [`${classTableRow}--odd`]: isOdd,
          [`${classTableRow}--disabled`]: disabled,
        },
        classNames,
      )}
      style={{ gridTemplateColumns: columns ? columns : '1fr '.repeat(childrenLength), ...props.style }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export const TableRow = forwardRef<HTMLDivElement, TableRowProps>(TableRowComponent);
