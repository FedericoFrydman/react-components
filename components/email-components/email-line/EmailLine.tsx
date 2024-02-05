import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './EmailLine.scss';
import '../../assets/styles/utilities.scss';

export interface EmailLineProps extends Omit<React.HTMLProps<HTMLTableElement>, 'css'> {
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLTableElement>;
}

const EmailLineComponent = ({}: EmailLineProps, ref: EmailLineProps['ref']) => {
  const classEmailLine = 'lsux-email-line';
  return (
    <table className={cn(classEmailLine, `${classEmailLine}--horizontal`)} {...ref}>
      <tbody>
        <tr>
          <td>
            <hr />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailLine = forwardRef<HTMLTableElement, EmailLineProps>(EmailLineComponent);
