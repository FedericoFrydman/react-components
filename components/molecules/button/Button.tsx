import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './button.scss';
import { Icon, IconAndBadgeSizes, IconNames } from '../../atoms/icon/Icon';
import { IconColors } from '../../assets/icons';
import { Text, TextSize } from '../../atoms/text/Text';

export type ButtonShape = 'round' | 'rectangular';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'standard' | 'destructive' | 'link';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'css'> {
  /**
   * The text to be shown in the button
   */
  label?: string;
  /**
   * Style of the button. Values are `primary`, `secondary`, `tertiary`, `standard`, `destructive`, and `link`.
   * The following have been deprecated: `standard`, `destructive`, `link`. Please use other variants instead and set the destructive prop to true for destructive variants.
   * @default primary
   */
  variant?: ButtonVariant;
  /**
   * Indicates the button has a destructive action and sets the color to red.
   * @default false
   */
  destructive?: boolean;
  /**
   * Visually and functionally disable the button.
   * @default false
   */
  disabled?: boolean;
  /**
   * Shape of the button - either round or rectangular.
   * @default rectangular
   */
  shape?: ButtonShape;
  /**
   * Stretch the button across the full width of its parent.
   * @default false
   */
  stretch?: boolean;
  /**
   * Display an icon in addition to the text to help to identify the action. The color will be same of the text
   */
  iconLeft?: IconNames;
  /**
   *  Display an icon on the right
   */
  iconRight?: IconNames;
  /**
   * Icon size
   * @default small
   */
  iconSize?: IconAndBadgeSizes;
  /**
   * Applies a color to the icon.
   */
  iconColor?: IconColors;
  /**
   * Text size of the button
   * @default large
   */
  textSize?: TextSize;
  /**
   * The HTML button type
   * @default button
   */
  type?: ButtonType;
  /**
   * Custom class for component.
   */
  classNames?: cn.Argument;
  /**
   * Define the button width
   */
  widthLong?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLButtonElement>;
  /**
   * An event id that will be used by analytics and test automation.
   */
  pplsiEventId?: string;
}

const ButtonComponent = (
  {
    variant = 'primary',
    destructive = false,
    disabled = false,
    stretch = false,
    shape = 'rectangular',
    type = 'button',
    iconLeft,
    iconRight,
    iconColor,
    iconSize = 'small',
    textSize = 'large',
    label,
    onClick,
    classNames = [],
    widthLong,
    pplsiEventId,
    ...props
  }: ButtonProps,
  ref: ButtonProps['ref'],
) => {
  // Backwards compatibility for secondary buttons
  if (variant === 'standard') {
    variant = 'secondary';
    console.warn('standard variant has been deprecated. Please use `secondary` instead.');
  }

  // Backwards compatibility for link buttons
  if (variant === 'link') {
    variant = 'tertiary';
    console.warn('link variant has been deprecated. Please use `tertiary` instead.');
  }

  // Backwards compatibility for destructive buttons
  if (variant === 'destructive') {
    destructive = true;
    variant = 'primary';
    console.warn('destructive variant has been deprecated. Please use `destructive` instead.');
  }

  const classButton = 'lsux-button';
  const cnButton = cn(
    {
      [`${classButton}`]: true,
      [`${classButton}--${variant}`]: variant,
      [`${classButton}--${shape}`]: shape,
      [`${classButton}--destructive`]: destructive,
      [`${classButton}--stretch`]: stretch,
      [`${classButton}--icon-only`]: ((!iconLeft && iconRight) || (iconLeft && !iconRight)) && !label,
    },
    classNames,
  );

  const variantColor = variant === 'primary' || destructive ? 'N00' : 'default';
  const color = iconColor ? iconColor : variantColor;
  const dynamicWidth = { width: widthLong };
  const setStyle = widthLong ? dynamicWidth : {};

  const cnText = iconLeft || iconRight ? [cn({ 'pl-3': iconLeft, 'pr-3': iconRight })] : [];

  return (
    <button
      {...props}
      type={type}
      style={{ ...setStyle, ...props.style }}
      data-pplsi-event-id={pplsiEventId}
      className={cnButton}
      disabled={disabled}
      ref={ref}
      onClick={onClick}
    >
      {iconLeft && <Icon name={iconLeft} color={color} size={iconSize} classNames={['lsux-button--icon-left']} />}
      {label && <Text textSize={textSize} textWeight="semibold" text={label} classNames={cnText} />}
      {iconRight && <Icon name={iconRight} color={color} size={iconSize} classNames={['lsux-button--icon-right']} />}
    </button>
  );
};

/**
 * The Button component enables the user to perform an action or navigate
 * to a different screen.
 */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonComponent);
