import { FC } from 'react';
import cn from 'classnames';

import './footer-break.scss';

export interface FooterBreakProps {
  /**
   * Determines the color of the component.
   * @default false
   */
  dark?: boolean;
  /**
   * Additional classes for the component.
   * @default []
   */
  classNames?: string[];
}

export const FooterBreak: FC<FooterBreakProps> = ({ dark = false, classNames = [] }: FooterBreakProps) => {
  const classFooterBreak = `lsux-footerbreak--${dark ? 'dark' : 'light'}`;

  return (
    <div className={cn(classNames)}>
      <div className={classFooterBreak} />
    </div>
  );
};
