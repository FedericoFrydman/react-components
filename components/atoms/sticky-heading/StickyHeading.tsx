import React, { ReactElement, Ref, forwardRef } from 'react';
import cn from 'classnames';

import { Container } from '../container/Container';
import './sticky-heading.scss';
const classStickyHeading = 'lsux-sticky-heading';

export interface StickyHeadingProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * children for the component.
   */
  children?: ReactElement | ReactElement[];
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * position for the component.
   * @default 'header'
   */
  position?: 'header' | 'footer';
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Bottom value for the component.
   */
  bottom?: string;
  /**
   * Top value for the component.
   */
  top?: string;
}

const StickyHeadingComponent = (
  { classNames = [], children, position, bottom, top, ...props }: StickyHeadingProps,
  ref: StickyHeadingProps['ref'],
) => {
  const styles: React.CSSProperties = {};
  if (position === 'header' && top) {
    styles.top = top;
  } else if (position === 'footer' && bottom) {
    styles.bottom = bottom;
  }

  return (
    <Container {...props} classNames={cn(`${classStickyHeading}__${position}`, classNames)} style={styles} ref={ref}>
      {children}
    </Container>
  );
};

export const StickyHeading = forwardRef<HTMLDivElement, StickyHeadingProps>(StickyHeadingComponent);
