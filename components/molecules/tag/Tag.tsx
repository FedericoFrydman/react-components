import { forwardRef, HTMLProps, Ref } from 'react';
import cn from 'classnames';

import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import './tag.scss';

export interface TagProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Text to display
   */
  text: string;
  /**
   * Additional data to display selected style
   */
  isSelected?: boolean;
  /**
   * Additional data that is dispatched with the tracking event.
   */
  onDismissible?: (e: React.MouseEvent) => void | null;
  /**
   * Additional data that is dispatched with the tracking event.
   */
  onSelected?: (e: React.MouseEvent) => void | null;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
}

const TagComponent = (
  { text, isSelected, onDismissible, onSelected, classNames = [], ...props }: TagProps,
  ref: TagProps['ref'],
) => {
  const classTag = 'lsux-tag';
  const cnTag = cn(
    classTag,
    {
      [`${classTag}--dismissible`]: onDismissible,
      [`${classTag}--selectable`]: !!onSelected,
      [`${classTag}--selected`]: isSelected,
    },
    classNames,
  );

  return (
    <div {...props} className={cnTag} ref={ref}>
      <Text as="span" text={text} textSize="medium" onClick={onSelected} />
      {onDismissible && (
        <Icon name="action_close" color="N700" classNames={[`${classTag}-icon`]} size="small" onClick={onDismissible} />
      )}
    </div>
  );
};

export const Tag = forwardRef<HTMLDivElement, TagProps>(TagComponent);
