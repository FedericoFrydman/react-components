import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './heading.scss';

export type HeadingAs = 'T95' | 'T76' | 'T61' | 'T49' | 'T39' | 'T31' | 'T28' | 'T26' | 'T20' | 'T16' | 'T14';

export interface HeadingProps extends Omit<React.HTMLProps<HTMLHeadingElement>, 'css'> {
  /**
   * Render the text using any HTML element. Default <h2></h2>
   */
  as?: HeadingAs;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The text to be rendered
   */
  text: string;
  /**
   * Use the brand font
   * @deprecated Font is now brand font by default and is determined by `brand.scss`
   */
  useBrand?: boolean;
  /**
   * Defines the title height
   */
  titleHeight?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLHeadingElement>;
}

const HeadingComponent = (
  { as = 'T26', text, titleHeight, classNames = [], useBrand = false, ...props }: HeadingProps,
  ref: HeadingProps['ref'],
) => {
  // Warn for deprecated prop use
  if (useBrand) {
    console.warn('`useBrand` has been deprecated and no longer works.');
  }

  const setHeight = { height: titleHeight, overflow: 'auto' };
  const useHeight = titleHeight ? setHeight : {};

  const classHeading = 'lsux-heading';
  const size = as.substring(1, 3);
  const cnHeading = cn(
    {
      [`${classHeading}`]: true,
      [`${classHeading}--t${size}`]: size,
    },
    classNames,
  );

  switch (as) {
    case 'T95':
      return (
        <h1 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h1>
      );
    case 'T76':
      return (
        <h2 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h2>
      );
    case 'T61':
      return (
        <h3 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h3>
      );
    case 'T49':
      return (
        <h1 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h1>
      );
    case 'T39':
      return (
        <h2 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h2>
      );
    case 'T31':
      return (
        <h3 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h3>
      );
    case 'T28':
      return (
        <h1 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h1>
      );
    case 'T20':
      return (
        <h3 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h3>
      );
    case 'T16':
      return (
        <h4 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h4>
      );
    case 'T14':
      return (
        <h5 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h5>
      );
    case 'T26':
    default:
      return (
        <h2 {...props} className={cnHeading} style={{ ...useHeight, ...props.style }} ref={ref}>
          {text}
        </h2>
      );
  }
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(HeadingComponent);
