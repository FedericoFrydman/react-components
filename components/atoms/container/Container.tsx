import { forwardRef, Ref, ReactElement } from 'react';
import cn from 'classnames';

import './container.scss';

export type ContainerBgColors = 'light-gray' | 'white' | 'none';

export interface ContainerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Define if container has background
   * @default 'white'
   */
  background?: ContainerBgColors;
  /**
   * Define if container has position fixed
   */
  fixed?: boolean;
  /**
   * Define if container has display flex
   */
  flexbox?: boolean;
  /**
   * Define the flex-direction of flex-container
   */
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /**
   * Define the flex-wrap of flex-container
   */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  /**
   * Define the flex-direction
   */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  /**
   * Define the align-items for flex-container
   */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**
   * Define the flex-direction
   */
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Children Container
   */
  children?: string | number | ReactElement | ReactElement[];
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const ContainerComponent = (
  {
    background = 'white',
    classNames = [],
    children,
    fixed,
    flexbox,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    ...props
  }: ContainerProps,
  ref: ContainerProps['ref'],
) => {
  const classContainer = 'lsux-container';
  const cnContainer = cn(
    {
      [`${classContainer}`]: true,
      [`${classContainer}--${background}`]: background !== 'none',
      [`${classContainer}--fixed`]: fixed,
      [`${classContainer}--flexbox`]: flexbox,
      [`${classContainer}--flex-direction-${flexDirection}`]: flexDirection,
      [`${classContainer}--flex-wrap-${flexWrap}`]: flexWrap,
      [`${classContainer}--flex-justify-${justifyContent}`]: justifyContent,
      [`${classContainer}--flex-items-${alignItems}`]: alignItems,
      [`${classContainer}--flex-content-${alignContent}`]: alignContent,
    },
    classNames,
  );

  return (
    <div {...props} className={cnContainer} ref={ref}>
      {children}
    </div>
  );
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(ContainerComponent);
