import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './icon.scss';
import { Container } from '../container/Container';
import { Icons } from '../../assets/icons';
import { IconColorsV1, IconNamesV1 } from '../../assets/icons/icons-v1';
import { IconColorsV2, IconNamesV2 } from '../../assets/icons/icons-v2';

export type IconLibraryVersion = '1' | '2';

export type IconNames = IconNamesV1 | IconNamesV2;

export type IconAndBadgeSizes = 'xsmall' | 'small' | 'medium-small' | 'medium' | 'large' | 'xlarge';

export const excludedCategories: string[] = ['apps', 'badges', 'logo', 'logos', 'feedback', 'payments', 'medialogo'];

export interface IconProps
  extends Omit<React.HTMLProps<HTMLImageElement>, 'css' | 'alt' | 'src' | 'size' | 'crossOrigin'> {
  /**
   * Applies a color filter to the icon.
   */
  color?: IconColorsV1 | IconColorsV2;
  /**
   * Name of the icon to be shown.
   */
  name: IconNamesV1 | IconNamesV2;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Defines icon size and badge size.
   */
  size?: IconAndBadgeSizes;
  /**
   * Disables CSS transition on the icon.
   */
  noTransition?: boolean;
  /**
   * Additional data that is dispatched with the tracking event.
   */
  onClick?: (e: React.MouseEvent) => void | unknown;
  /**
   * Alt tag for the HTML element
   * @default `name` paramater
   */
  alt?: string;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLImageElement>;
  /**
   * Define if icon has a Badge.
   */
  useBadge?: boolean;
}

const IconComponent = (
  {
    classNames = [],
    color = 'default',
    name,
    alt = name + '.',
    onClick,
    size = 'medium',
    noTransition,
    useBadge = false,
    ...props
  }: IconProps,
  ref: IconProps['ref'],
) => {
  const classIcon = 'lsux-icon';
  const classIconContainer = 'lsux-icon-container';

  const applyMonoClass = () => {
    let isMono = false;
    excludedCategories.forEach((c) => {
      if (name?.includes(`${c}_`)) isMono = true;
    });
    return isMono ? `${classIcon}--mono` : '';
  };

  const cnIconContainer = [`${classIconContainer}`, `flex-row`];

  const cnIcon = cn(
    {
      [`${classIcon}`]: true,
      [`${classIcon}--${color}`]: color !== 'default',
      [`${classIcon}--${size}`]: size,
      [`${classIcon}--no-transition`]: noTransition,
      [`${classIcon}--clickable`]: !!onClick,
      [applyMonoClass()]: true,
    },
    classNames,
  );

  const cnBadge = cn({
    [`circle`]: true,
    [`circle--${size}`]: size,
  });

  if (name === null || name === undefined) {
    return <div onClick={onClick} className={cnIcon}></div>;
  } else {
    return (
      <Container classNames={cnIconContainer} background="none" flexbox flexDirection="row">
        <img {...props} src={Icons[name] as string} alt={alt} className={cnIcon} ref={ref} onClick={onClick}></img>
        {useBadge && <div className={cnBadge} />}
      </Container>
    );
  }
};

export const Icon = forwardRef<HTMLImageElement, IconProps>(IconComponent);
