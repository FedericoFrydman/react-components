import { FC } from 'react';

import { Button } from '../../../../components/molecules/button/Button';
import './social-bar.scss';

export interface SocialBarProps {
  /**
   * Determiens if the component uses dark mode.
   * @default false
   */
  dark?: boolean;
}

export const SocialBar: FC<SocialBarProps> = ({ dark = false }: SocialBarProps) => {
  function handleIconClick(url: string) {
    window.open(url, '_blank');
  }

  const socialMediaProfiles: Record<string, string> = {
    ['social_facebook']: 'https://facebook.com/LegalShield',
    ['social_instagram']: 'https://instagram.com/legalshield',
    ['social_linkedin']: 'https://linkedin.com/company/legalshieldofficial',
    ['social_twitter']: 'https://twitter.com/legalshield',
  };

  return (
    <div className="lsux-social-bar">
      {Object.keys(socialMediaProfiles).map((key) => {
        return (
          <Button
            key={key}
            variant="tertiary"
            iconColor={dark ? 'N00' : 'N800'}
            iconLeft={key}
            iconSize="medium"
            onClick={() => {
              handleIconClick(socialMediaProfiles[key]);
            }}
          />
        );
      })}
    </div>
  );
};
