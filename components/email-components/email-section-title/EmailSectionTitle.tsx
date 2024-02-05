import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Text } from '../../atoms/text/Text';
import { Heading } from '../../atoms/heading/Heading';
import './EmailSectionTitle.scss';

export interface EmailSectionTitleProps extends Omit<React.HTMLProps<HTMLTableElement>, 'css'> {
  /**
   * Section title heading
   */
  heading: string;
  /**
   * Section title subheading
   */
  subheading?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLTableElement>;
}

const EmailSectionTitleComponent = (
  { heading, subheading }: EmailSectionTitleProps,
  ref: EmailSectionTitleProps['ref'],
) => {
  const variant = subheading ? 'with-subheading' : '';
  return (
    <table className={cn('lsux-email-section-title', `lsux-email-section-title--${variant}`)} {...ref}>
      <tbody>
        <tr>
          <td className="lsux-email-section-title--wrapper" rowSpan={2}>
            <Heading text={heading} as="T20" />
            <Text as="p" text={subheading} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailSectionTitle = forwardRef<HTMLTableElement, EmailSectionTitleProps>(EmailSectionTitleComponent);
