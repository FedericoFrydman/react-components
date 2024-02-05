import { forwardRef, Ref, useState, useEffect } from 'react';
import './EmailHeader.scss';
import { Text } from '../../atoms/text/Text';

export interface EmailHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Define the email header brand
   */
  brand?: 'legalshield' | 'idshield' | 'ls-and-ids';
  /**
   * Define the email header brand
   */
  lang?: 'en-us' | 'en-ca';
  /**
   * Email header date
   */
  date?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const EmailHeaderComponent = (
  { brand = 'legalshield', lang = 'en-us', date }: EmailHeaderProps,
  ref: EmailHeaderProps['ref'],
) => {
  const styles = date ? 'lsux-email-header--default' : 'lsux-email-header--center';

  const [headerStyle, setHeaderStyle] = useState({
    link: '',
    src: '',
  });

  useEffect(() => {
    switch (true) {
      case brand === 'idshield' && lang === 'en-ca':
        setHeaderStyle({
          link: 'https://www.idshield.ca/',
          src: 'https://design.api.dev-legalshield.com/assets/logos/idshield-ca-logo.svg',
        });
        break;
      case brand === 'idshield' && lang === 'en-us':
        setHeaderStyle({
          link: 'https://www.idshield.com/',
          src: 'https://design.api.dev-legalshield.com/assets/logos/idshield-logo.svg',
        });
        break;
      case brand === 'ls-and-ids' && lang === 'en-ca':
        setHeaderStyle({
          link: 'https://www.legalshield.ca/',
          src: 'https://design.api.dev-legalshield.com/assets/logos/ls-ids-ca-logo.png',
        });
        break;
      case brand === 'legalshield' && lang === 'en-ca':
        setHeaderStyle({
          link: 'https://www.legalshield.ca/',
          src: 'https://design.api.dev-legalshield.com/assets/logos/legalshield-ca-logo.svg',
        });
        break;
      case brand == 'legalshield' && lang == 'en-us':
        setHeaderStyle({
          link: 'https://www.legalshield.com/',
          src: 'https://design.api.dev-legalshield.com/assets/logos/legalshield-logo.svg',
        });
        break;
      default:
        break;
    }
  }, [brand, lang]);

  return (
    <table className="lsux-email-header" {...ref}>
      <tbody>
        {date ? (
          <tr className={styles}>
            <td className="lsux-email-header--logo">
              <a href={headerStyle.link}>
                <img alt="LegalShield Logo" src={headerStyle.src} />
              </a>
            </td>
            <td className="lsux-email-header--date">
              <Text as="p" text={date} />
            </td>
          </tr>
        ) : (
          <tr className={styles}>
            <td>
              <a href={headerStyle.link}>
                <img alt="LegalShield Logo" src={headerStyle.src} />
              </a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export const EmailHeader = forwardRef<HTMLDivElement, EmailHeaderProps>(EmailHeaderComponent);
