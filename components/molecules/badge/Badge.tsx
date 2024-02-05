import { forwardRef, HTMLProps, Ref } from 'react';
import cn from 'classnames';

import { Text } from '../../atoms/text/Text';
import './badge.scss';

export type BadgeVariant = 'default' | 'success' | 'attention' | 'important' | 'new' | 'primary';

export interface BadgeProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Choose from 5 style variants. Default: 'default'.
   */
  variant?: BadgeVariant;
  /**
   * Use bold style. Default: false
   */
  bold?: boolean;
  /**
   * Use the circular badge to indicate a count of items related to an element.
   */
  circle?: boolean;
  /**
   * Text to display
   */
  text: string;
  /**
   * Use small to use the smaller 48x15 variant of badges
   */
  small?: boolean;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
}

const BadgeComponent = (
  { variant = 'default', bold = false, text, classNames = [], circle = false, small = false, ...props }: BadgeProps,
  ref: BadgeProps['ref'],
) => {
  const classBadge = 'lsux-badge';
  const cnBadge = cn(
    {
      [`${classBadge}`]: true,
      [`${classBadge}--${variant}--bold`]: bold,
      [`${classBadge}--${variant}--subtle`]: !bold,
      [`${classBadge}--circle`]: circle,
      [`${classBadge}--square`]: !circle,
      [`${classBadge}--small`]: small,
    },
    classNames,
  );

  return (
    <div {...props} className={cnBadge} ref={ref}>
      <Text as="span" text={text} textSize={small ? 'small' : 'medium'} />
    </div>
  );
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(BadgeComponent);
