import { forwardRef, ForwardRefRenderFunction, Ref } from 'react';
import cn from 'classnames';

import { Alert, Severity } from '../../molecules/alert/Alert';
import { Spinner, SpinnerSize } from '../../atoms/spinner/Spinner';
import { Button } from '../../../components/molecules/button/Button';
import { Container } from '../../atoms/container/Container';
import { Modal } from '../../molecules/modal/Modal';
import { IconNames } from '../../../components/atoms/icon/Icon';

export interface LoaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick' | 'css'> {
  /**
   * State for the Loader.
   */
  loaderState: {
    loading: boolean;
    message: string | null;
    modalTitle: string | null;
    modalLabel: string | null;
    alertAppearance: Severity;
    alertBold?: boolean;
    alertIcon: IconNames;
    spinnerSize: SpinnerSize;
    spinnerBlocking: boolean;
    callback: (() => void) | null;
  };
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const LoaderComponent: ForwardRefRenderFunction<HTMLDivElement, LoaderProps> = (
  { loaderState, classNames = [] }: LoaderProps,
  ref: LoaderProps['ref'],
) => {
  if (!loaderState.loading && !loaderState.message) {
    return <></>;
  }

  const alertCallback = () => {
    if (loaderState.callback) {
      loaderState.callback();
    }
  };

  return (
    <Container classNames={classNames} ref={ref}>
      <>
        {loaderState.loading && (
          <Spinner spinnerSize={loaderState.spinnerSize} blocking={loaderState.spinnerBlocking} />
        )}
      </>
      <>
        {loaderState.message && (!loaderState.modalTitle || !loaderState.modalLabel || !loaderState.callback) && (
          <Alert
            bold={loaderState.alertBold}
            dismissible={loaderState.callback ? true : false}
            onDismiss={alertCallback}
            icon={loaderState.alertIcon}
            severity={loaderState.alertAppearance}
          >
            {loaderState.message}
          </Alert>
        )}
      </>
      <>
        {loaderState.message && loaderState.modalTitle && loaderState.modalLabel && loaderState.callback && (
          <Modal title={loaderState.modalTitle} position="center">
            {loaderState.message}
            <Modal.Actions>
              <Button variant="primary" onClick={loaderState.callback} label={loaderState.modalLabel} />
            </Modal.Actions>
          </Modal>
        )}
      </>
    </Container>
  );
};

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(LoaderComponent);
