import React, { forwardRef, useEffect } from 'react';
import cn from 'classnames';

import { Button } from '../../../components/molecules/button/Button';
import { Market } from '../../../components/controls/types';
import { Text } from '../../../components/atoms/text/Text';

import './business-card.scss';

export interface BusinessCardProps {
  /**
   * The name of the associate.
   */
  displayName: string;
  /**
   * The phone number of the associate.
   */
  phone: string;
  /**
   * The email of the associate.
   */
  email: string;
  /**
   * The profile image of the associate.
   */
  profileImage: string;
  /**
   * The sitename of the associate.
   */
  sitename: string;
  /**
   * The background color of the component.
   * @default '$N100'
   */
  backgroundColor?: string;
  /**
   * Specifies the language using the market variable.
   * @default 'en-us'
   */
  market?: Market;
  /**
   * Prefix for the site environment.
   */
  envPrefix?: string;
  /**
   * Custom classes for the component.
   * @default []
   */
  classNames?: string[];
  /**
   * Ref to the component.
   */
  ref?: React.Ref<HTMLDivElement>;
}

const your_associate_strings: Record<Market, string> = {
  'en-ca': 'Your associate',
  'en-us': 'Your associate',
  'es-us': 'Tu asociado',
  'fr-ca': 'Votre associé',
};

const BusinessCardComponent = (
  {
    displayName,
    email,
    market = 'en-us',
    envPrefix = '',
    phone,
    profileImage,
    sitename,
    classNames = [],
    backgroundColor = '#f5f5f5',
  }: BusinessCardProps,
  ref: BusinessCardProps['ref'],
) => {
  const url = sitename ? `https://${sitename}.${envPrefix}wearelegalshield.com` : null;

  useEffect(() => {
    document.documentElement.style.setProperty('--business-card-bg-color', backgroundColor);
  }, [backgroundColor]);

  function handleEmailClick() {
    const link = `mailto:${email}`;
    window.open(link, '_blank');
  }

  function handleUrlClick() {
    const link = `${url}?market=${market}`;
    window.open(link, '_blank');
  }

  const classBusinessCard = 'lsux-business-card';

  return (
    <div ref={ref} className={cn(classBusinessCard, 'pt-2', 'pb-2', ...classNames)}>
      {phone && (
        <>
          <Button variant="tertiary" iconLeft="comm_call_phone" iconColor="N800" classNames={['p-3 no-clickable']} />
          <Text textSize="small">{phone}</Text>
        </>
      )}
      {email ? (
        <Button
          variant="tertiary"
          iconLeft="comm_email_default"
          iconColor="N800"
          onClick={handleEmailClick}
          classNames={[`${classBusinessCard}__link`, 'p-3']}
        />
      ) : (
        <></>
      )}
      {url ? (
        <Button
          variant="tertiary"
          iconLeft="interface_link"
          iconColor="N800"
          onClick={handleUrlClick}
          classNames={['p-3']}
        />
      ) : (
        <></>
      )}
      {displayName && (
        <div className={cn(`${classBusinessCard}__display-name`, 'pl-5', 'pr-3', 'py-3')}>
          <Text textSize="tiny">{your_associate_strings[market]}</Text>
          <Text textSize="small">{displayName}</Text>
        </div>
      )}
      {profileImage ? (
        <div>
          {url ? (
            <a href={url + '?market=' + market}>
              <img className={`${classBusinessCard}__image`} src={profileImage} alt="Profile"></img>
            </a>
          ) : (
            <img className={`${classBusinessCard}__image`} src={profileImage} alt="Profile"></img>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

/**
 * The BusinessCard component is used to display the contact information of an associate.
 */
export const BusinessCard = forwardRef<HTMLDivElement, BusinessCardProps>(BusinessCardComponent);
