import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { GridCol } from '../../foundation/grid/GridCol';
import { Icon, IconNames } from '../../atoms/icon/Icon';
import { IconColors } from '../../assets/icons/index';
import { Text } from '../../../components/atoms/text/Text';
import { Title } from '../../../components/atoms/title/Title';
import './alert.scss';
import '../../assets/styles/utilities.scss';

export type Severity = 'default' | 'error' | 'information' | 'success' | 'warning';

interface DeprecatedAlertProps {
  /**
   * Determines the alert appearance.
   * @deprecated Use `severity` instead.  Will be removed in future verison.
   */
  alertAppearance?: Severity;
  /**
   * Alert type. It depends in the functionality.
   * @deprecated Use the `dismissible` boolean prop instead. Will be removed in future verison.
   */
  alertType?: 'dismissible' | 'none';
  /**
   * The main copy that should be shown in the alert.
   * @deprecated Use children instead. Will be removed in future verison.
   */
  content?: string;
  /**
   * Heading text is displayed at the top in size T16
   * @deprecated Use `title` instead. Will be removed in future verison.
   */
  heading?: string;
  /**
   * Additional data that is dispatched with the tracking event.
   * @deprecated Use `onDismiss` instead so it is clear which handler is referenced. Will be removed in future verison.
   */
  onClick?: (e: React.MouseEvent) => void | unknown;
}

export interface AlertProps extends DeprecatedAlertProps {
  /**
   * Child component that is displayed instead of the content.
   */
  children?: JSX.Element | string;
  /**
   * The text to be shown in the alert's title.
   */
  title?: string;
  /**
   * Determines the strong color of the background.
   */
  bold?: boolean;
  /**
   * Indicates if the alert can be dismissed or not.
   * @default false
   */
  dismissible?: boolean;
  /**
   * Determines which icon should be shown.
   */
  icon?: IconNames;
  /**
   * Click handler when the dismiss button is pressed
   */
  onDismiss?: (e: React.MouseEvent) => void | unknown;
  /**
   * Determines the alert appearance.
   */
  severity?: Severity;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const AlertComponent = (
  {
    alertAppearance,
    alertType,
    bold,
    content,
    children = content ? <Text textSize="small">{content}</Text> : null,
    dismissible = false,
    heading,
    icon,
    onClick,
    onDismiss = onClick,
    severity = alertAppearance ?? 'default',
    title = heading,
    classNames = [],
    ...props
  }: AlertProps,
  ref: AlertProps['ref'],
) => {
  // Warn if alertAppearance prop is used
  if (alertAppearance) {
    console.warn(
      '`alertAppearance` is deprecated. Please use `severity` instead. This will be removed in a future verison.',
    );
  }

  // Warn if alertType prop is used
  if (alertType) {
    console.warn(
      '`alertType` is deprecated. Please use `onDismiss` handler instead. This will be removed in a future verison.',
    );
  }

  // Warn if content prop is used
  if (content) {
    console.warn('`content` is deprecated. Please pass in children instead. This will be removed in a future verison.');
  }

  // Warn if heading prop is used
  if (heading) {
    console.warn('`heading` is deprecated. Please use `title` instead. This will be removed in a future verison.');
  }

  // Warn if onClick prop is used
  if (onClick) {
    console.warn('`onClick` is deprecated. Please use `onDismiss` instead. This will be removed in a future verison.');
  }

  let iconColor: IconColors;

  switch (severity) {
    case 'success':
      icon = icon ?? bold ? 'warning_circle_check' : 'feedback_success';
      iconColor = bold ? 'N00' : 'G200';
      break;
    case 'error':
      icon = icon ?? bold ? 'edit_close_circle' : 'feedback_critical';
      iconColor = bold ? 'N00' : 'R300';
      break;
    case 'warning':
      icon = icon ?? bold ? 'warning_triangle_warning' : 'feedback_warning';
      iconColor = bold ? 'N800' : 'Y300';
      break;
    case 'information':
      icon = icon ?? bold ? 'warning_info' : 'feedback_informational';
      iconColor = bold ? 'N00' : 'B200';
      break;
    default:
      icon = icon ?? 'warning_info';
      iconColor = bold ? 'N00' : 'N800';
      break;
  }

  const classAlert = 'lsux-alert';
  const cnAlert = cn(
    {
      [`${classAlert}`]: true,
      [`${classAlert}--${severity}--bold`]: bold,
      [`${classAlert}--${severity}--subtle`]: !bold,
      ['p-4']: true,
    },
    classNames,
  );

  const classAlertHeader = `${classAlert}__header`;
  const cnAlertHeader = cn(classAlertHeader, `${classAlertHeader}-wrapper`);

  return (
    <div className={cnAlert} ref={ref} {...props}>
      <div className={cnAlertHeader}>
        <GridCol>{icon && <Icon name={icon} classNames={[`${classAlert}__icon`]} color={iconColor} />}</GridCol>
        <GridCol>
          {title ? (
            <div>
              <Title text={title} textSize="medium" textWeight="bold" classNames={['pb-1']} />
            </div>
          ) : null}
          <div className={`${classAlert}--content-text`}>
            {typeof children === 'string' ? <Text textSize="small">{children}</Text> : children}
          </div>
        </GridCol>
        <GridCol>
          {dismissible && onDismiss !== undefined && (
            <Icon name="menu_close_md" color="N700" size="medium-small" onClick={onDismiss} />
          )}
        </GridCol>
      </div>
    </div>
  );
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(AlertComponent);
