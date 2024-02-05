import React from 'react';
import cn from 'classnames';

import './disclaimer.scss';

export type DisclaimerAlignment = 'left' | 'center' | 'right';

export interface DisclaimerProps {
  /**
   * The disclaimer HTML content.
   */
  disclaimerHtml: string;
  /**
   * Determines if the component is dark or light.
   * @default false
   */
  dark?: boolean;
  /**
   * Determines the alignment of the text.
   * @default 'left'
   */
  align?: DisclaimerAlignment;
  /**
   * Additional classes for the component.
   * @default []
   */
  classNames?: string[];
}

export const Disclaimer: React.FC<DisclaimerProps> = ({
  disclaimerHtml,
  dark = false,
  align = 'left',
  classNames = [],
}: DisclaimerProps) => {
  const classDisclaimer = `lsux-disclaimer--${dark ? 'dark' : 'light'}`;

  return (
    <div
      className={cn(classDisclaimer, classNames)}
      style={{ textAlign: align }}
      dangerouslySetInnerHTML={{ __html: disclaimerHtml }}
    />
  );
};
