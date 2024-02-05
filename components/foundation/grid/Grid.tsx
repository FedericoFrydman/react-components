import { Ref, HTMLProps, ReactElement, useRef, forwardRef } from 'react';
import cn from 'classnames';

import './grid-component.scss';
import '../../assets/styles/utilities.scss';
import '../../assets/styles/grid.scss';

export interface GridProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Width of the grid
   * @default 100%
   */
  width?: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Children Grid Rows
   */
  children?: ReactElement | ReactElement[];
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
}

const GridComponent = (
  { children, classNames = [], width = '100%', ...props }: Partial<GridProps>,
  ref: GridProps['ref'],
) => {
  const innerRef = useRef();

  return (
    <div {...props} className={cn('lsux-grid', classNames)} style={{ width: width, ...props.style }} ref={ref}>
      <div ref={innerRef} className="container-fluid">
        {children}
      </div>
    </div>
  );
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(GridComponent);
