import { FC } from 'react';

import playStoreLight from '../../../assets/img/play-store-light.svg';
import playStoreDark from '../../../assets/img/play-store-dark.svg';
import appStoreLight from '../../../assets/img/app-store-light.svg';
import appStoreDark from '../../../assets/img/app-store-dark.svg';
import { Market } from '../../../../components/controls/types';
import { Text } from '../../../../components/atoms/text/Text';

import './download-app.scss';

export interface DownloadAppProps {
  /**
   * The app to download
   */
  app?: 'Legal' | 'IDS';
  /**
   * Determines if the component is in dark mode.
   * @default false
   */
  dark?: boolean;
  /**
   * The market to use for the download app section
   * @default 'en-us'
   */
  market?: Market;
}

const download_legalshield_strings: Record<string, string> = {
  'en-ca': 'Download the LegalShield App',
  'en-us': 'Download the LegalShield App',
  'es-us': 'Descargue la aplicación LegalShield',
};

const download_idshield_strings: Record<string, string> = {
  'en-us': 'Download the IDShield App',
  'es-us': 'Descargue la aplicación IDShield',
};

export const DownloadApp: FC<DownloadAppProps> = ({
  app = 'Legal',
  dark = false,
  market = 'en-us',
}: DownloadAppProps) => {
  let appleUrl = '';
  let googleUrl = '';
  let downloadText = '';

  let enabled = true;
  if (app === 'IDS') {
    if (market in download_idshield_strings) {
      appleUrl = 'https://apps.apple.com/us/app/idshield-plus/id1444809858';
      googleUrl = 'https://play.google.com/store/apps/details?id=com.legalshield.idshield&hl=en_US&gl=US&pli=1';
      downloadText = download_idshield_strings[market];
    } else {
      enabled = false;
    }
  } else {
    if (market in download_legalshield_strings) {
      appleUrl = 'https://apps.apple.com/us/app/legalshield-law-firms-on-call/id924247236';
      googleUrl = 'https://play.google.com/store/apps/details?id=com.legalshield.MembersOnly&hl=en_US&gl=US';
      downloadText = download_legalshield_strings[market];
    } else {
      enabled = false;
    }
  }

  if (!enabled) {
    return <></>;
  }

  return (
    <div className="lsux-download-app">
      <Text classNames={[`lsux-text--${dark ? 'dark' : 'light'}`]}>{downloadText}</Text>
      <div className="pt-3" style={{ display: 'flex', gap: '10px', justifyContent: 'Center' }}>
        <a href={appleUrl} target="_blank" rel="noreferrer">
          <img src={dark ? appStoreLight : appStoreDark}></img>
        </a>
        <a href={googleUrl} target="_blank" rel="noreferrer">
          <img src={dark ? playStoreLight : playStoreDark}></img>
        </a>
      </div>
    </div>
  );
};
