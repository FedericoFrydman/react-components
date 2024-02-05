import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Text, TextProps } from '../../../components/atoms/text/Text';
import './list-item.scss';
import { Button, ButtonProps } from '../button/Button';

const classListItem = 'lsux-list-item';

export interface ListItemTextProps {
  primary?: string;
  primaryProps?: TextProps;
  secondary?: string;
  secondaryProps?: TextProps;
  textAlign?: 'left' | 'center' | 'right';
}

export const ListItemText = ({
  primary,
  primaryProps,
  secondary,
  secondaryProps,
  textAlign = 'left',
}: ListItemTextProps) => {
  return (
    <div className={cn(`${classListItem}__text`, `${classListItem}__text--${textAlign}`)}>
      <div>
        <div>
          <Text
            {...primaryProps}
            textSize={primaryProps?.textSize ?? 'large'}
            classNames={[`${classListItem}__text-primary`, primaryProps?.classNames]}
          >
            {primary}
          </Text>
        </div>
        <div>
          <Text
            {...secondaryProps}
            textSize={secondaryProps?.textSize ?? 'small'}
            classNames={[`${classListItem}__text-secondary`, secondaryProps?.classNames]}
          >
            {secondary}
          </Text>
        </div>
      </div>
    </div>
  );
};

export interface ListItemButtonProps extends ButtonProps {
  children?: string;
}

export const ListItemButton = ({ children, ...props }: ListItemButtonProps) => {
  return (
    <Button
      {...props}
      label={children ?? props.label}
      classNames={[`${classListItem}__button`]}
      variant="secondary"
      stretch
    />
  );
};

interface CompoundedListItemComponent
  extends React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLLIElement>> {
  Button?: React.FC<ListItemButtonProps>;
  Text?: React.FC<ListItemTextProps>;
}

export interface ListItemProps {
  /**
   * The children of the ListItem.
   */
  children?: React.ReactNode;
  /**
   * Additional classNames to add to the list item.
   * @default []
   */
  classNames?: string[];
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLLIElement>;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, classNames = [], ...props }: ListItemProps, ref: ListItemProps['ref']) => {
    const cnListItem = cn('lsux-list-item', classNames);
    return (
      <li {...props} ref={ref} className={cnListItem}>
        {children}
      </li>
    );
  },
) as CompoundedListItemComponent;

// eslint-disable-next-line react/display-name
ListItem.Button = (props) => <ListItemButton {...props} />;
// eslint-disable-next-line react/display-name
ListItem.Text = (props) => <ListItemText {...props} />;

ListItem.displayName = 'ListItem';
