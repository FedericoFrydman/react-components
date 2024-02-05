import { FC, ReactElement, ReactNode, Ref, forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

import { Button, ButtonVariant } from '../button/Button';
import { Container, ContainerProps } from '../../../components/atoms/container/Container';
import { Title as TitleComponent, TitleProps } from '../../../components/atoms/title/Title';

import './Modal.scss';
import '../../assets/styles/shadows.scss';
import '../../assets/styles/utilities.scss';

export interface DeprecatedModalProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Function called when the "OK" button is pressed.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  okFunction?: () => void;
  /**
   * Text for the OK button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  okLabel?: string;
  /**
   * Variant for the OK button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  okVariant?: ButtonVariant;
  /**
   * Function called when the "secondary OK" button is pressed.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  secondaryOkFunction?: () => void;
  /**
   * Text for the secondary OK button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  secondaryOkLabel?: string;
  /**
   * Variant for the secondary OK button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  secondaryOkVariant?: ButtonVariant;
  /**
   * Text for the cancel button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  cancelLabel?: string;
  /**
   * Variant for the cancel button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  cancelVariant?: ButtonVariant;
  /**
   * Disable Ok Button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  okDisabled?: boolean;
  /**
   * Disable secondary Ok button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  secondaryOkDisabled?: boolean;
  /**
   * Disable close button.
   * @deprecated Please use `<Modal.Actions>` instead.
   */
  closeDisabled?: boolean;
}

export interface ModalProps extends DeprecatedModalProps {
  /**
   * The children of the modal.
   */
  children?: ReactNode;
  /**
   * Text for the title of the dialog.
   */
  title?: string;
  /**
   * Indicates the modal should have a close button.
   */
  closeButton?: boolean;
  /**
   * Additional classnames on the modal
   */
  classNames?: cn.Argument;
  /**
   * Function called when the close button is pressed
   */
  closeFunction?: () => void;
  /**
   * Makes the modal full size on the screen
   */
  isFullScreen?: boolean;
  /**
   * Position of the modal. Either `top`, `center`, or `bottom`.
   */
  position?: 'top' | 'center' | 'bottom';
  /**
   * Defines the max-height of the modal.
   * @default 95%
   */
  maxHeight?: string;
  /**
   * Defines the max-width of the modal.
   * @default 335px
   */
  maxWidth?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

export interface ModalActionsProps extends ContainerProps {
  /**
   * Children components
   */
  children?: string | number | ReactElement | ReactElement[];
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
}

export const ModalActions: FC<ModalActionsProps> = ({
  children,
  classNames = ['lsux-modal__button-bar'],
  ...props
}: ModalActionsProps) => {
  return (
    <Container {...props} classNames={classNames}>
      {children as ReactElement}
    </Container>
  );
};

export interface ModalTitleProps extends TitleProps {
  /**
   * Children components
   */
  children?: string;
  /**
   * Text for the Modal title
   */
  text?: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
}

export const ModalTitle: FC<ModalTitleProps> = ({ children, text, classNames, ...props }: ModalTitleProps) => (
  <TitleComponent
    {...props}
    text={children ?? text}
    textSize="large"
    textWeight="semibold"
    classNames={['lsux-modal__title', 'mb-4', classNames]}
  />
);

/**
 * Modal is an overlaying content container above everything else on the screen.
 * It captures attention by disrupting workflow and blocking user's access to other content area, so use sparingly.
 */
const ModalComponent = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      classNames = [],
      closeButton,
      closeFunction,
      title,
      okLabel,
      okFunction,
      okVariant,
      cancelLabel,
      cancelVariant,
      secondaryOkLabel,
      secondaryOkFunction,
      secondaryOkVariant,
      okDisabled,
      closeDisabled,
      secondaryOkDisabled,
      isFullScreen = false,
      position = 'top',
      maxHeight = '95%',
      maxWidth = '335px',
      ...props
    }: ModalProps,
    ref: ModalProps['ref'],
  ) => {
    // Warn for deprecated props
    if (okLabel) {
      console.warn(`okLabel is deprecated. Use <Modal.Actions> instead.`);
    }
    if (okFunction) {
      console.warn(`okFunction is deprecated. Use <Modal.Actions> instead.`);
    }
    if (okVariant) {
      console.warn(`okVariant is deprecated. Use <Modal.Actions> instead.`);
    } else {
      okVariant = 'primary';
    }
    if (cancelLabel) {
      console.warn(`cancelLabel is deprecated. Use <Modal.Actions> instead.`);
    }
    if (cancelVariant) {
      console.warn(`cancelVariant is deprecated. Use <Modal.Actions> instead.`);
    } else {
      cancelVariant = 'secondary';
    }
    if (secondaryOkLabel) {
      console.warn(`secondaryOkLabel is deprecated. Use <Modal.Actions> instead.`);
    }
    if (secondaryOkFunction) {
      console.warn(`secondaryOkFunction is deprecated. Use <Modal.Actions> instead.`);
    }
    if (secondaryOkVariant) {
      console.warn(`secondaryOkVariant is deprecated. Use <Modal.Actions> instead.`);
    } else {
      secondaryOkVariant = 'primary';
    }
    if (okDisabled) {
      console.warn(`okDisabled is deprecated. Use <Modal.Actions> instead.`);
    } else {
      okDisabled = false;
    }
    if (closeDisabled) {
      console.warn(`closeDisabled is deprecated. Use <Modal.Actions> instead.`);
    } else {
      closeDisabled = false;
    }
    if (secondaryOkDisabled) {
      console.warn(`secondaryOkDisabled is deprecated. Use <Modal.Actions> instead.`);
    } else {
      secondaryOkDisabled = false;
    }

    let okButton = null;
    if (okLabel && okFunction) {
      okButton = (
        <Button
          label={okLabel}
          shape="rectangular"
          onClick={okFunction}
          variant={okVariant}
          classNames={['lsux-modal-button-pad']}
          disabled={okDisabled}
        />
      );
    }

    let secondaryOkButton = null;
    if (secondaryOkLabel && secondaryOkFunction) {
      secondaryOkButton = (
        <Button
          label={secondaryOkLabel}
          shape="rectangular"
          onClick={secondaryOkFunction}
          variant={secondaryOkVariant}
          disabled={secondaryOkDisabled}
        />
      );
    }

    let cancelButton = null;
    if (cancelLabel && closeFunction) {
      cancelButton = (
        <Button
          label={cancelLabel}
          shape="rectangular"
          onClick={closeFunction}
          variant={cancelVariant}
          disabled={closeDisabled}
        />
      );
    }

    let buttonBar = null;
    if (cancelButton || okButton || secondaryOkButton) {
      buttonBar = (
        <ModalActions classNames={[isFullScreen ? 'lsux-modal__button-bar-full' : 'lsux-modal__button-bar']}>
          {okButton}
          {secondaryOkButton}
          {cancelButton}
        </ModalActions>
      );
    }

    const [isScrolling, setIsScrolling] = useState(false);
    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout!);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 1500);
    };

    const classModal = 'lsux-modal';
    const cnModal = cn(
      {
        [`${classModal}-full`]: isFullScreen,
        [`${classModal}`]: !isFullScreen,
        [`${classModal}-position-top`]: position === 'top',
        [`${classModal}-position-center`]: position !== 'top',
        'elevation-4': true,
        [`isScrolling`]: isScrolling,
      },
      classNames,
    );
    const cnModalContent = {
      [`${classModal}__content`]: true,
      ['pb-5']: true,
      ['pt-4']: closeButton && closeFunction,
      ['pt-5']: !(closeButton && closeFunction),
      ['px-5']: true,
    };

    const classModalBlocker = `lsux-modal-blocker`;
    const cnModalBlocker = cn({
      [`${classModalBlocker}-full`]: isFullScreen,
      [`${classModalBlocker}`]: !isFullScreen,
      'shadow100-bottom': true,
    });

    const classModalHeader = `${classModal}__header`;
    const cnModalHeader = {
      [`${classModalHeader}`]: true,
      /* eslint-disable sort-keys */
      'pt-4': true,
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      'pb-2': true,
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      'pr-4': true,
    };

    useEffect(() => {
      document.documentElement.style.setProperty('--modal-max-height', maxHeight);
      document.documentElement.style.setProperty('--modal-max-width', maxWidth);
    }, [maxHeight, maxWidth]);

    return (
      <div {...props} className={cnModalBlocker}>
        <div className={cnModal} ref={ref} onScroll={handleScroll}>
          {closeButton && closeFunction ? (
            <Container classNames={cnModalHeader}>
              <Button
                iconLeft="edit_close_circle_filled"
                iconSize="medium"
                shape="rectangular"
                variant="tertiary"
                alt="Close"
                onClick={closeFunction}
              />
            </Container>
          ) : null}
          <Container classNames={cnModalContent} flexbox flexDirection="column">
            <Container flexbox justifyContent="flex-start" flexDirection="column">
              <Container classNames={['lsux-modal--children']}>
                {title ? <ModalTitle text={title} /> : null}
                <>{children}</>
              </Container>
            </Container>
            {buttonBar}
          </Container>
        </div>
      </div>
    );
  },
) as FC<ModalProps>;

ModalComponent.displayName = 'Modal';

type ModalActionsComponent = React.FC<ModalActionsProps>;
type ModalTitleComponent = React.FC<ModalTitleProps>;
type ModalComp = React.FC<ModalProps> & { Actions: ModalActionsComponent; Title: ModalTitleComponent };

export const Modal = ModalComponent as ModalComp;

Modal.Actions = ModalActions;
Modal.Title = ModalTitle;
