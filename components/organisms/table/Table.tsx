import { forwardRef, HTMLProps, ReactElement, Ref } from 'react';
import cn from 'classnames';

import './Table.scss';
import { TableRowProps } from './TableRow';

type RowChildren = [ReactElement<TableRowProps>, ReactElement<TableRowProps>[] | ReactElement<TableRowProps>];

export interface TableProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Indicates that the table should have no border attribute
   */
  noBorder?: boolean;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Children (the TableRows)
   */
  children: ReactElement<TableRowProps>[] | ReactElement<TableRowProps> | RowChildren;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const TableComponent = (
  { noBorder = false, classNames = [], children, ...props }: TableProps,
  ref: TableProps['ref'],
) => {
  const classTable = 'lsux-table';
  const cnTable = cn(classTable, { [`${classTable}--border`]: noBorder }, classNames);

  return (
    <div {...props} className={cnTable} ref={ref}>
      {children}
    </div>
  );
};

/**
 * Tables are used to organize and display structure content or data information in a grid-like format. Tables helps users compare and analyze among a dataset.
 */

export const Table = forwardRef<HTMLDivElement, TableProps>(TableComponent);
