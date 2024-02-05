import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Icon, IconAndBadgeSizes, IconNames } from '../../atoms/icon/Icon';
import { Badge } from '../../../components/molecules/badge/Badge';
import { IconColors } from '../../../components/assets/icons';

import './link-content.scss';

export type LinkContentContentStyle = 'link' | 'menu';

export type LinkContentDynamicPadding = 'none' | 'left' | 'right';

export type LinkContentIconPosition = 'none' | 'left' | 'right';

export interface LinkContentProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Indicates if the link content should have active padding surrounding the content
   */
  padding?: boolean;
  /**
   * Indicates if the link content should have a margin surrounding the content
   */
  margin?: boolean;
  /**
   * Indicates that extra padding should be added on the left or right to accomodate dynamic padding/alignment; assumes padding and margin are on
   */
  dynamicPadding?: LinkContentDynamicPadding;
  /**
   * Style of the link content. Can be a simple link, or for use in a menu
   */
  linkContentStyle?: LinkContentContentStyle;
  /**
   * Divider at bottom
   */
  divider?: boolean;
  /**
   * Divider at top
   */
  dividerTop?: boolean;
  /**
   * Indicates the link is disabled
   */
  disabled?: boolean;
  /**
  /**
   * Indicates the link is hidden
   */
  hidden?: boolean;
  /**
   * Indicates the link should indicate an active state (menu style only)
   */
  active?: boolean;
  /**
   * The text to be rendered
   */
  text: string;
  /**
   * Display an icon in addition to the text to help to identify the action. The color will be same of the text
   */
  icon?: IconNames;
  /**
   * Size of the icon. Default medium.
   */
  iconSize?: IconAndBadgeSizes;
  /**
   * Icon at left/right of the link. Default none.
   */
  iconPosition?: LinkContentIconPosition;
  /**
   * Applies a color to the icon.
   */
  iconLinkColor?: IconColors;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Custom badge for NavigationItem component.
   */
  useBadge?: boolean;
}

const LinkContentComponent = (
  {
    padding = false,
    margin = false,
    divider = false,
    dividerTop = false,
    dynamicPadding = 'none',
    linkContentStyle = 'link',
    disabled = false,
    hidden = false,
    active = false,
    text,
    icon = null,
    iconSize = 'medium',
    iconPosition = 'none',
    classNames = [],
    iconLinkColor,
    useBadge = false,
    ...props
  }: LinkContentProps,
  ref: LinkContentProps['ref'],
) => {
  const classLinkContent = 'lsux-link-content';
  const cnLinkContent = cn(
    {
      [`${classLinkContent}`]: true,
      [`${classLinkContent}--padding`]: padding,
      [`${classLinkContent}--margin`]: margin,
      [`${classLinkContent}--dynamic-left`]: dynamicPadding === 'left',
      [`${classLinkContent}--dynamic-right`]: dynamicPadding === 'right',
      [`${classLinkContent}--${linkContentStyle}`]: linkContentStyle,
      [`${classLinkContent}--active`]: active,
      [`${classLinkContent}--disabled`]: disabled,
      [`${classLinkContent}--hidden`]: hidden,
      [`${classLinkContent}--topdivider`]: dividerTop,
    },
    classNames,
  );

  let leftIcon;
  if (iconPosition === 'left') {
    leftIcon = (
      <Icon name={icon} color={iconLinkColor} size={iconSize} classNames={[`${classLinkContent}--icon-left`]} />
    );
  } else {
    leftIcon = '';
  }

  let rightIcon;
  if (iconPosition === 'right') {
    rightIcon = (
      <Icon name={icon} color={iconLinkColor} size={iconSize} classNames={[`${classLinkContent}--icon-right`]} />
    );
  } else {
    rightIcon = '';
  }

  return (
    <div className={cnLinkContent} ref={ref} {...props}>
      {leftIcon}
      {text}
      {rightIcon}
      {useBadge === true && <Badge circle classNames={['lsux-badge--dot']} small={true} text="" variant="important" />}
    </div>
  );
};

/**
 * The LinkContent component is a complex subcomponent of the Dropdown, used when you want to represent a navigation menu using a dropdown.
 */

export const LinkContent = forwardRef<HTMLDivElement, LinkContentProps>(LinkContentComponent);
