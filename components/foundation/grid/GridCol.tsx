import { HTMLProps, Ref, useRef, ReactElement, forwardRef } from 'react';
import cn from 'classnames';

export interface GridColProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Children (the TableRows)
   */
  children?: ReactElement | ReactElement[];
  /**
   * Defines if content should has the same height as column
   */
  contentHeight?: string;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
}

const GridColComponent = (
  { children, contentHeight = '100%', classNames = [], ...props }: GridColProps,
  ref: GridColProps['ref'],
) => {
  const innerRef = useRef();
  const setHeight = { height: contentHeight };
  const setStyle = contentHeight ? setHeight : {};
  return (
    <div {...props} className={cn('lsux-col', classNames)} ref={ref}>
      <div className="content" style={setStyle} ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

export const GridCol = forwardRef<HTMLDivElement, GridColProps>(GridColComponent);
