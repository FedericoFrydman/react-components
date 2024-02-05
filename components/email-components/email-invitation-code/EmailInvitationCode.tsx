import { forwardRef, Ref } from 'react';
import { Text } from '../../atoms/text/Text';
import './EmailInvitationCode.scss';

export interface EmailInvitationCodeProps {
  /**
   * Text before invitation code
   */
  text?: string;
  /**
   * Invitation Code
   */
  code: string;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLTableElement>;
}

const EmailInvitationCodeComponent = (
  { text, code }: EmailInvitationCodeProps,
  ref: EmailInvitationCodeProps['ref'],
) => {
  return (
    <table className="lsux-email-invitation-code" {...ref}>
      <tbody>
        <tr>
          <td className="lsux-email-invitation-code--text">
            <Text text={text} as="p" />
          </td>
        </tr>
        <tr>
          <td className="lsux-email-invitation-code--code">
            <Text text={code} as="p" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailInvitationCode = forwardRef<HTMLTableElement, EmailInvitationCodeProps>(EmailInvitationCodeComponent);
