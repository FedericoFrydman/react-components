import { useState, useCallback } from 'react';

import { IconNamesV1 } from '../../assets/icons/icons-v1';
import { SpinnerSize } from '../../atoms/spinner/Spinner';
import { Severity } from '../../molecules/alert/Alert';

export const useLoader = () => {
  const [loaderState, setLoaderState] = useState<{
    loading: boolean;
    modalLabel: string;
    modalTitle: string;
    message: string;
    alertAppearance: Severity;
    alertBold: boolean;
    alertIcon: IconNamesV1;
    spinnerSize: SpinnerSize;
    spinnerBlocking: boolean;
    callback: null | (() => void);
  }>({
    alertAppearance: 'default',
    alertBold: true,
    alertIcon: 'alert_success',
    callback: null,
    loading: false,
    message: '',
    modalLabel: '',
    modalTitle: '',
    spinnerBlocking: true,
    spinnerSize: 'xlarge',
  });

  const Blank = useCallback(() => {
    setLoaderState({
      ...loaderState,
      loading: false,
      message: '',
    });
  }, []);

  const Success = useCallback((message: string, { alertBold = true } = {}) => {
    setLoaderState({
      ...loaderState,
      alertAppearance: 'success',
      alertBold: alertBold,
      alertIcon: 'alert_success',
      callback: null,
      loading: false,
      message: message,
      modalLabel: '',
      modalTitle: '',
    });
  }, []);

  const Error = useCallback((message: string, { alertBold = true } = {}) => {
    setLoaderState({
      ...loaderState,
      alertAppearance: 'error',
      alertBold: alertBold,
      alertIcon: 'alert_error',
      callback: null,
      loading: false,
      message: message,
      modalLabel: '',
      modalTitle: '',
    });
  }, []);

  const Modal = useCallback((message: string, modalTitle: string, modalLabel: string, callback: () => void) => {
    setLoaderState({
      ...loaderState,
      callback: callback,
      loading: false,
      message: message,
      modalLabel: modalLabel,
      modalTitle: modalTitle,
    });
  }, []);

  const Loading = useCallback(({ spinnerSize = 'xlarge', spinnerBlocking = true } = {}) => {
    setLoaderState({
      ...loaderState,
      loading: true,
      message: '',
      spinnerBlocking: spinnerBlocking,
      spinnerSize: spinnerSize as SpinnerSize,
    });
  }, []);

  const Alert = useCallback(
    (
      message: string,
      { alertAppearance = 'default', alertBold = false, alertIcon = 'alert_success', callback = null } = {},
    ) => {
      setLoaderState({
        ...loaderState,
        alertAppearance: alertAppearance as Severity,
        alertBold: alertBold,
        alertIcon: alertIcon as IconNamesV1,
        callback: callback,
        loading: false,
        message: message,
        modalLabel: '',
        modalTitle: '',
      });
    },
    [],
  );

  return { Alert, Blank, Error, Loading, Modal, Success, loaderState };
};
