import { Ref, forwardRef } from 'react';
import cn from 'classnames';

import './footer.scss';

export type FooterAlignment = 'left' | 'right' | 'center';

export interface FooterProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Name of the "brand" on the copyright
   */
  brandName?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * HTML content.
   */
  htmlContent?: string;
  /**
   * Alignment for the footer.
   */
  align?: FooterAlignment;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
}

const FooterComponent = (
  { brandName = null, htmlContent = null, classNames = [], align = 'right', ...props }: FooterProps,
  ref: FooterProps['ref'],
) => {
  const classFooter = 'lsux-footer';
  const cnFooter = cn(
    {
      [`${classFooter}`]: true,
      [`${classFooter}-${align}`]: align,
    },
    classNames,
  );

  return (
    <div className={cnFooter} ref={ref} {...props}>
      {htmlContent && <span dangerouslySetInnerHTML={{ __html: htmlContent }} />}
      {brandName && (
        <>
          &copy; {brandName} {new Date().getFullYear()}
        </>
      )}
    </div>
  );
};

export const Footer = forwardRef<HTMLDivElement, FooterProps>(FooterComponent);
