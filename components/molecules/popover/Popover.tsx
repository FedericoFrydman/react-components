import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './Popover.scss';
import '../../assets/styles/shadows.scss';
import { Text } from '../../atoms/text/Text';
import '../../assets/styles/utilities.scss';
import { Icon } from '../../atoms/icon/Icon';

export type PopoverArrowSide = 'top' | 'bottom' | 'left' | 'right';

export type PopoverArrowDistance = '0' | '25' | '50' | '75' | '100';

export type PopoverShadowSide = 'top' | 'bottom' | 'left' | 'right';

export interface PopoverProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * The children of the arrow box
   */
  children: React.ReactNode;
  /**
   * The side of the arrow box where the arrow exists
   */
  arrowSide: PopoverArrowSide;
  /**
   * The side of the arrow box where the shadow exists
   */
  shadowSide: PopoverShadowSide;
  /**
   * ArrowDistance. The distance from the edge in %.
   */
  arrowDistance?: PopoverArrowDistance;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Dark mode
   */
  dark?: boolean;
  /**
   * Popover title
   */
  title?: string;
  /**
   * Define if popover has a close action
   */
  closeAction?: boolean;
  /**
   * Popover action
   */
  onClick?: (e: React.MouseEvent) => void | unknown;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const PopoverComponent = (
  {
    children,
    arrowSide = 'top',
    shadowSide = 'bottom',
    arrowDistance = '50',
    classNames = [],
    dark,
    title,
    closeAction,
    onClick,
    ...props
  }: PopoverProps,
  ref: PopoverProps['ref'],
) => {
  const iconColor = dark ? 'N00' : 'default';
  const hasHeader = title || closeAction;

  const classPopover = 'lsux-popover';
  const cnPopover = cn(
    {
      ['p-4']: true,
      [`${classPopover}`]: true,
      [`${arrowSide}`]: arrowSide,
      [arrowSide + arrowDistance]: true,
      [`shadow400-${shadowSide}`]: shadowSide,
      [`${classPopover}--dark`]: dark,
    },
    classNames,
  );

  return (
    <div {...props} className={cnPopover} ref={ref}>
      {hasHeader && (
        <div className="lsux-popover--header">
          {title && <Text text={title} as="p" classNames={['lsux-popover--title', 'pb-3']} />}
          {closeAction && <Icon name="action_close" color={iconColor} onClick={onClick} />}
        </div>
      )}
      {children}
    </div>
  );
};

/**
 * An Popover is used to display things like a help balloon or simple popup content
 */

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(PopoverComponent);
