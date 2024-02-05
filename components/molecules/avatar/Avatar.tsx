import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './avatar.scss';
import '../../assets/styles/utilities.scss';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

export type AvatarType = 'user-photo' | 'user-icon' | 'user-initials';

export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Define avatar type
   */
  avatarType: 'user-photo' | 'user-icon' | 'user-initials';
  /**
   * User image
   */
  imageURL?: string;
  /**
   * User initials
   */
  userInitials?: string;
  /**
   * Determines avatar size
   */
  avatarSize?: 'small' | 'medium' | 'large';
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
}

const AvatarComponent = (
  { avatarType, imageURL, userInitials, avatarSize = 'medium', classNames = [], ...props }: AvatarProps,
  ref: AvatarProps['ref'],
) => {
  const classAvatar = 'lsux-avatar';
  const cnAvatar = cn(
    {
      [`${classAvatar}`]: true,
      [`${classAvatar}--${avatarType}`]: avatarType,
      [`${classAvatar}--${avatarSize}`]: avatarSize,
    },
    classNames,
  );

  switch (avatarType) {
    case 'user-photo':
      return (
        <div {...props} className={cnAvatar} ref={ref}>
          <img src={imageURL} alt="user-avatar" />
        </div>
      );
    case 'user-initials':
      return (
        <div {...props} className={cnAvatar} ref={ref}>
          <Text as="p" text={userInitials} />
        </div>
      );
    default:
      return (
        <div {...props} className={cnAvatar} ref={ref}>
          <Icon name="action_user_single" color="N700" size={avatarSize} />
        </div>
      );
  }
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(AvatarComponent);
