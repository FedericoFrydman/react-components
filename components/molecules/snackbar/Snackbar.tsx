import { HTMLProps, ReactElement, Ref, forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

import { IconNames } from '../../atoms/icon/Icon';
import './snackbar.scss';
import { Alert, AlertProps, Severity } from '../alert/Alert';

export type AnimationType = 'fade-in' | 'slide-up';
export type Position = 'default' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ToastVariant = 'persistent' | 'temporary';

interface DeprecatedSnackbarProps {
  /**
   * The main copy that should be shown in the snackbar title.
   * @deprecated Use `title` instead. Will be removed in future verison.
   */
  content?: string;
  /**
   * Description content.
   * @deprecated Use `message` instead.
   */
  description?: string;
  /**
   * Determines the position of the snackbar.
   * @deprecated Use `position` instead.  Will be removed in future verison.
   * @default default;
   */
  toastPosition?: Position;
  /**
   * Determines if the toast is persistent or temporary.
   * @deprecated Use `autoHideDuration` instead to make the snackbar temporary.
   */
  variant?: ToastVariant;
}

export interface SnackbarProps
  extends AlertProps,
    DeprecatedSnackbarProps,
    Omit<HTMLProps<HTMLDivElement>, 'onClick' | 'css'> {
  /**
   * The title that is shown in the snackbar.
   */
  title?: string;
  /**
   * The message that is shown in the snackbar.
   */
  message?: string;
  /**
   * Determines if the Snackbar is open or not
   */
  open?: boolean;
  /**
   * Determines the position of the snackbar.
   * @default default;
   */
  position?: Position;
  /**
   * Determines the snackbar appearance.
   */
  severity?: Severity;
  /**
   * Determines which icon should be shown.
   */
  icon?: IconNames;
  /**
   * Determines the strong color of the background.
   */
  bold?: boolean;
  /**
   * Determines the style of the CSS animation. This can be slide-up or fade-in.
   * @default fade-in;
   */
  animationType?: AnimationType;
  /**
   * Number of milliseconds until the snackbar automatically hides.
   * Null means persistent, which is the default behavior.
   * @default null
   */
  autoHideDuration?: number | null;
  /**
   * Child elements
   */
  children?: ReactElement<AlertProps>;
  /**
   * Click handler when the dismiss button is pressed
   */
  onDismiss?: (e: React.MouseEvent) => void | unknown;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
}

const SnackbarComponent = (
  {
    autoHideDuration,
    animationType = 'fade-in',
    bold = false,
    children,
    classNames = [],
    icon,
    description,
    message = description ?? '',
    onDismiss,
    open = true,
    toastPosition,
    position = toastPosition ?? 'default',
    severity = 'default',
    content,
    title = content,
    variant,
    ...props
  }: SnackbarProps,
  ref: SnackbarProps['ref'],
) => {
  // Warn if content prop is used
  if (content) {
    console.warn('`content` is deprecated. Please use `message` instead. This will be removed in a future version.');
  }

  // Warn if description prop is used
  if (description) {
    console.warn('`description` is deprecated. Please use `title` instead. This will be removed in a future version.');
  }

  // Warn if toastPosition prop is used
  if (toastPosition) {
    console.warn(
      '`toastPosition` is deprecated. Please use `position` instead. This will be removed in a future version.',
    );
  }

  // Warn if variant prop is used
  if (variant) {
    console.warn(
      '`variant` is deprecated. Please use `autoHideDuration` instead. This will be removed in a future version.',
    );
  }

  const [isVisible, setIsVisible] = useState('hidden');

  useEffect(() => {
    if (autoHideDuration) {
      setTimeout(() => {
        setIsVisible('hidden');
      }, autoHideDuration);
    }
  }, []);

  useEffect(() => {
    setIsVisible(open ? 'visible' : 'hidden');
  }, [open]);

  const classSnackbar = 'lsux-snackbar';
  const cnSnackbar = cn(
    classSnackbar,
    `${classSnackbar}--${isVisible}`,
    `${classSnackbar}--animation-${animationType}`,
    `${classSnackbar}--position-${position}`,
    classNames,
  );

  return (
    <div {...props} className={cnSnackbar} ref={ref}>
      {children ? (
        children
      ) : (
        <Alert
          severity={severity}
          title={title}
          dismissible={!!autoHideDuration}
          onDismiss={onDismiss}
          icon={icon}
          bold={bold}
        >
          {message}
        </Alert>
      )}
    </div>
  );
};

/**
 * Snackbar is used to display information or system feedback
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(SnackbarComponent);
/**
 * Backwards compatibility export for Toast component
 */
// export const Toast = forwardRef(SnackbarComponent); // Exported to make it backwards compatible
export const Toast = forwardRef<HTMLDivElement, SnackbarProps>(SnackbarComponent);
export type ToastProps = SnackbarProps;
