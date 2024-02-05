import { forwardRef, Ref } from 'react';
import { Text } from '../../atoms/text/Text';
import { SocialIcons, SocialUrls } from '../social-icons/SocialIcons';

import './emailFooter.scss';

export interface EmailLink {
  label: string;
  url: string;
}

export interface EmailFooterProps extends Omit<React.HTMLProps<HTMLTableElement>, 'css'> {
  /**
   * Links to render
   */
  links?: EmailLink[];
  /**
   * Social media icons to render
   */
  urls?: SocialUrls;
  /**
   * Text on the footer
   */
  text: string;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLTableElement>;
}

const EmailFooterComponent = ({ links, urls, text, ...props }: EmailFooterProps, ref: EmailFooterProps['ref']) => {
  const emptyLink: EmailLink = { label: '', url: '' };
  const emptyArray = [emptyLink, emptyLink, emptyLink, emptyLink, emptyLink, emptyLink];
  let linkArray = emptyArray;
  if (links) {
    linkArray = [...links, ...linkArray];
  }
  return (
    <table {...props} ref={ref} className="lsux-email-footer">
      <tbody>
        <tr>
          {links ? (
            <>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a href={linkArray[0].url} target="_blank" rel="noreferrer" className="lsux-email-footer__link">
                          {linkArray[0].label}
                        </a>
                      </td>
                      <td>
                        <a href={linkArray[1].url} target="_blank" rel="noreferrer" className="lsux-email-footer__link">
                          {linkArray[1].label}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={linkArray[2].url} target="_blank" rel="noreferrer" className="lsux-email-footer__link">
                          {linkArray[2].label}
                        </a>
                      </td>
                      <td>
                        <a href={linkArray[3].url} target="_blank" rel="noreferrer" className="lsux-email-footer__link">
                          {linkArray[3].label}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={linkArray[4].url} target="_blank" rel="noreferrer" className="lsux-email-footer__link">
                          {linkArray[4].label}
                        </a>
                      </td>
                      <td>
                        <a href={linkArray[5].url} target="_blank" rel="noreferrer" className="lsux-email-footer__link">
                          {linkArray[5].label}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="lsux-email-footer__text">
                        <Text as="p" textSize="small">
                          {text}
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              {urls && (
                <td valign="bottom" align="right">
                  <SocialIcons urls={urls} color={'N00'} />
                </td>
              )}
            </>
          ) : (
            <td className="lsux-email-footer__text lsux-email-footer__text--center">
              <Text as="p" textSize="small" text={text} />
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export const EmailFooter = forwardRef<HTMLTableElement, EmailFooterProps>(EmailFooterComponent);
