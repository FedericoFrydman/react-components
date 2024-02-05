import { IconColors } from '../../assets/icons';
import { forwardRef, Ref } from 'react';
import { Icon } from '../../atoms/icon/Icon';

export interface SocialUrls {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export interface SocialIconProps extends Omit<React.HTMLProps<HTMLTableElement>, 'css'> {
  /**
   * Color of the icons
   */
  color?: IconColors;
  /**
   * Urls of the icons, if not present, the icon will not be rendered.
   */
  urls: SocialUrls;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLTableElement>;
}

const SocialIconsComponent = ({ color = 'default', urls, ...props }: SocialIconProps, ref: SocialIconProps['ref']) => {
  return (
    <table ref={ref} {...props}>
      <tbody>
        <tr>
          {urls.linkedin && (
            <td className="px-3">
              <a href={urls.linkedin} target="_blank" rel="noreferrer">
                <Icon
                  name="social_linkedin"
                  color={color}
                  title="Linkedin"
                  size="medium"
                  style={{ display: 'block' }}
                />
              </a>
            </td>
          )}
          {urls.facebook && (
            <td className="px-3">
              <a href={urls.facebook} target="_blank" rel="noreferrer">
                <Icon
                  name="social_facebook"
                  color={color}
                  title="Facebook"
                  size="medium"
                  style={{ display: 'block' }}
                />
              </a>
            </td>
          )}
          {urls.instagram && (
            <td className="px-3">
              <a href={urls.instagram} target="_blank" rel="noreferrer">
                <Icon
                  name="social_instagram"
                  color={color}
                  title="Instagram"
                  size="medium"
                  style={{ display: 'block' }}
                />
              </a>
            </td>
          )}
          {urls.twitter && (
            <td className="px-3">
              <a href={urls.twitter} target="_blank" rel="noreferrer">
                <Icon name="social_twitter" color={color} title="Twitter" size="medium" style={{ display: 'block' }} />
              </a>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

/**
 * Social icons are links to the different social media
 */

export const SocialIcons = forwardRef<HTMLTableElement, SocialIconProps>(SocialIconsComponent);
