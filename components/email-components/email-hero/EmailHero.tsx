import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './EmailHero.scss';
import { Text } from '../../atoms/text/Text';
import { Heading } from '../../atoms/heading/Heading';
import { Button } from '../../molecules/button/Button';

export interface EmailHeroProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Hero title
   */
  title: string;
  /**
   * Hero copy
   */
  copy?: string;
  /**
   * Define the link for the background image
   */
  imgBkgLink?: string;
  /**
   * Define if hero has a background image
   */
  button?: boolean;
  /**
   * Define the button label
   */
  labelBtn?: string;
  /**
   * Define the hero email variant
   */
  variant?: 'small-hero' | 'huge-hero' | 'center' | 'default';
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const EmailHeroComponent = (
  { title, copy, imgBkgLink, button, variant, labelBtn }: EmailHeroProps,
  ref: EmailHeroProps['ref'],
) => {
  const bkgImgStyle = imgBkgLink
    ? {
        backgroundImage: `linear-gradient(6.7deg, rgba(33, 25, 38, 0.9) 14.48%, rgba(70, 56, 79, 0) 96.35%),url(${imgBkgLink})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    : {};
  const headingStyle = variant == 'small-hero' ? 'T20' : 'T28';

  const classEmailHero = 'lsux-email-hero';
  const cnEmailHero = cn({
    [`${classEmailHero}`]: true,
    [`${classEmailHero}--${variant}`]: variant,
    [`${classEmailHero}--image-bkg`]: imgBkgLink,
  });

  return (
    <table className={cnEmailHero} {...ref}>
      <tbody>
        <tr>
          <td className="lsux-email-hero--wrapper" rowSpan={2} style={bkgImgStyle}>
            <Heading as={headingStyle} text={title} />
            <Text as="p">{copy}</Text>
            {button && variant == 'huge-hero' && (
              <Button variant="primary" shape="round" label={labelBtn} widthLong="343px" />
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailHero = forwardRef<HTMLDivElement, EmailHeroProps>(EmailHeroComponent);
