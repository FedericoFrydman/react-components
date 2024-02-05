import { IconNames } from '../../../components/atoms/icon/Icon';
import { FC, useEffect, useState } from 'react';
import { Alert, Severity } from '../../molecules/alert/Alert';
import { Market } from '../types';

export interface IAlert {
  id: string;
  alertKey?: string | null;
  applications?: string[] | null;
  body: unknown;
  identityId?: string | null;
  priority: Priority;
  status: Status;
  subject: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

export enum Status {
  Acknowledged = 'Acknowledged',
  Deleted = 'Deleted',
  Unread = 'Unread',
  Resolved = 'Resolved',
}

export const subjectLabelAlertAppearance: Record<string, Severity> = {
  '': 'default',
  Impacted: 'warning',
  Low: 'warning',
  Operational: 'success',
  Outage: 'error',
  null: 'information',
};

const getSubjectLabel = (alertSubject: string): string => {
  const subjectParts = alertSubject.split('::');
  if (subjectParts?.length > 1) {
    return subjectParts[1];
  }
  return alertSubject;
};

const getLatestAlert = (alerts: IAlert[]): IAlert => {
  const sortedAlerts = alerts.sort((a, b) => {
    const dateA = new Date(a.updatedAt).getTime();
    const dateB = new Date(b.updatedAt).getTime();
    return dateB - dateA;
  });
  return sortedAlerts[0];
};

export interface AlertControlProps {
  /**
   * Specifies the language (en-us by default)
   */
  market?: Market;
}

export const AlertControl: FC<AlertControlProps> = ({ market = 'en-us' }: AlertControlProps) => {
  const [alert, setAlert] = useState<IAlert | null>(null);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const getAlerts = async () => {
      const response = await fetch('/v1/themis/alerts');
      if (response.ok) {
        const alerts = await response.json();
        setAlert(getLatestAlert(alerts));
      } else {
        setAlert(null);
      }
    };
    getAlerts();
  }, []);

  const getAlertIcon = (): IconNames => {
    let alertAppearance = getAlertAppearance();
    if (alertAppearance === 'default') {
      alertAppearance = 'information';
    }
    return `alert_${alertAppearance}`;
  };

  const getAlertAppearance = (): Severity => {
    return subjectLabelAlertAppearance[getSubjectLabel(`${alert?.subject}`)];
  };

  const getAlertBody = (): string => {
    let body;
    try {
      const parsedBody = JSON.parse(alert?.body as string);
      body = parsedBody[market].message;
    } catch {
      body = alert?.body;
    }

    return body;
  };

  const handleClick = () => {
    setShowAlert(false);
  };

  return (
    <>
      {alert && showAlert && getSubjectLabel(alert.subject) != 'Operational' && (
        <Alert icon={getAlertIcon()} dismissible severity={getAlertAppearance()} onDismiss={handleClick}>
          {getAlertBody()}
        </Alert>
      )}
    </>
  );
};
