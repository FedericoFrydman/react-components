import { Ref, HTMLProps, ReactElement, useRef, forwardRef, ForwardRefRenderFunction } from 'react';
import cn from 'classnames';

import { NavigationProps } from '../../organisms/navigation/Navigation';
import './Layout.scss';

export type LayoutVariant = 'none' | 'fixed' | 'scroll';

export interface LayoutProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Type of Layout
   */
  variant?: LayoutVariant;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Children Content
   */
  children?: ReactElement | ReactElement[];
  /**
   * Navigation component
   */
  navigation?: ReactElement<NavigationProps>;

  /**
   * Content padding
   */
  contentPadding?: boolean;

  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
}

const LayoutComponent: ForwardRefRenderFunction<HTMLDivElement, LayoutProps> = (
  { children, classNames = [], navigation, contentPadding = false, variant = 'none', ...props }: Partial<LayoutProps>,
  ref: LayoutProps['ref'],
) => {
  const innerRef = useRef();

  const classLayout = 'lsux-layout';
  const cnLayout = cn(
    {
      [`${classLayout}`]: true,
      [`${classLayout}-${variant}`]: variant,
    },
    classNames,
  );

  const classContent = 'lsux-content';
  const cnContent = cn({
    [`${classContent}`]: true,
    [`${classLayout}-padding`]: contentPadding,
  });

  return (
    <div {...props} className={cnLayout} ref={ref}>
      {navigation}
      <div ref={innerRef} className={cnContent}>
        {children}
      </div>
    </div>
  );
};

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(LayoutComponent);
