import { FC, useState, useCallback } from 'react';
import { Button } from '../button/Button';
import { Curtain } from './Curtain';
import { Alert } from '../alert/Alert';

export const CurtainTest: FC = () => {
  const [alertActive, setAlertActive] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleCreate = useCallback(() => {
    setAlertActive(true);
    setAlertOpen(true);
  }, []);

  const handleAlertDismiss = useCallback(() => {
    setAlertOpen(false);
  }, []);

  const onCloseComplete = useCallback(() => {
    setAlertActive(false);
  }, []);

  return (
    <div>
      {alertActive && (
        <Curtain onClose={onCloseComplete} isOpen={alertOpen} initialAnimate={true} fixed={true}>
          <Alert severity="default" classNames={[]} icon="alert_information" onDismiss={handleAlertDismiss}>
            Here is an alert
          </Alert>
        </Curtain>
      )}
      <Button label="Alert" onClick={handleCreate} />
    </div>
  );
};
