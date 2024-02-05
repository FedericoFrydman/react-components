import { useState, useEffect, Ref, forwardRef, useCallback } from 'react';
import cn from 'classnames';

import { Text } from '../../atoms/text/Text';
import { Spinner } from '../../atoms/spinner/Spinner';
import { Button } from '../../molecules/button/Button';
import './XUser.scss';

export interface XUserProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Domain name to query
   */
  domainName?: string;

  port?: string;

  env?: string;
  /**
   * Reference
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
}

const XUserComponent = (
  { domainName = 'legalshield.com', env = 'prod', port = '', classNames = [], ...props }: XUserProps,
  ref: XUserProps['ref'],
) => {
  const [userState, setUserState] = useState({ data: null, error: false, loading: true });

  const fetchData = useCallback(async () => {
    setUserState({ data: undefined, error: false, loading: true });

    const envString = env === 'prod' ? '' : env + '-';
    const portString = port === '' ? '' : ':' + port;

    const url = `https://login.${envString}${domainName}${portString}/v1/users/info`;

    try {
      const response = await fetch(url, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });

      if (response.ok && response.status >= 200 && response.status < 300) {
        const responseData = await response.json();
        setUserState({ data: responseData, error: false, loading: false });
        return;
      } else {
        console.error(response);
      }
    } catch {}

    setUserState({ data: null, error: true, loading: false });
  }, [domainName, env, port]);

  useEffect(() => {
    window.addEventListener('focus', fetchData);
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener('focus', fetchData);
    };
  }, [fetchData]);

  // Load the data
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let current = 'User in ' + domainName + ': ';
  if (userState.loading) {
    current = current + 'Loading...';
  } else if (userState.error) {
    current = current + 'Error Fetching';
  } else if (!('sub_name' in userState.data)) {
    current = current + 'None';
  } else {
    current = current + userState.data.sub_name + ' (' + userState.data.sub + ')';
  }

  return (
    <div {...props} className={cn('lsux-xuser', classNames)} ref={ref}>
      <Text text={current} as="p" />
      {userState.loading && <Spinner spinnerSize="small" />}
      {!userState.loading && (
        <Button
          variant="tertiary"
          onClick={() => {
            fetchData();
          }}
          iconLeft="action_refresh"
          label="Refresh"
          classNames={['p-0']}
        />
      )}
    </div>
  );
};

export const XUser = forwardRef<HTMLDivElement, XUserProps>(XUserComponent);
