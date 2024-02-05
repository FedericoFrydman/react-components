import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './image.scss';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'css' | 'alt'> {
  /**
   * Alternate Text.
   */
  alt?: string;
  /**
   * Rounded Circle Image.
   */
  circle?: boolean;
  /**
   * Applies a color filter to the icon.
   */
  fluid?: boolean;
  /**
   * Rounded Corners.
   */
  rounded?: boolean;
  /**
   * Image Source
   */
  src: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLImageElement>;
}

const ImageComponent = (
  { alt = '', src, fluid = false, rounded = false, circle = false, classNames = [], onClick, ...props }: ImageProps,
  ref: ImageProps['ref'],
) => {
  const classImage = 'lsux-image';
  const cnImage = cn(
    {
      [`${classImage}`]: true,
      [`${classImage}--fluid`]: fluid,
      [`${classImage}--rounded`]: rounded,
      [`${classImage}--circle`]: circle,
      [`${classImage}--clickable`]: !!onClick,
    },
    classNames,
  );

  return (
    <img
      {...props}
      src={src}
      alt={alt ? alt + '.' : ''}
      className={cnImage}
      ref={ref}
      style={{ width: fluid ? '100%' : 'initial', ...props.style }}
      onClick={onClick}
    ></img>
  );
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(ImageComponent);
