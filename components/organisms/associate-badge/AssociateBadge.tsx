import { forwardRef, ForwardRefRenderFunction, Ref } from 'react';
import cn from 'classnames';

import { Avatar } from '../../molecules/avatar/Avatar';
import { Container } from '../../atoms/container/Container';
import { Button } from '../../molecules/button/Button';
import { Dropdown, DropdownItem } from '../dropdown/Dropdown';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';

import './associate-badge.scss';

export type AssociateBadgeChildrenBackgroundColors = 'white' | 'gray';

export interface AssociateBadgeProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick' | 'css'> {
  /**
   * title of the Associate
   */
  title?: string;
  /**
   * Name of the Associate
   */
  name?: string;
  /**
   * Formatted phone number of the Associate
   */
  phone?: string;
  /**
   * URL of the Associate avatar
   */
  avatarUrl?: string;
  /**
   * Character length of the title and name text before truncation. Defaults to 35.
   */
  truncationLength?: number;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * onClick handler for entire Associate Badge
   */
  onBadgeClick?: () => void;
  /**
   * onClick handler for phone button click
   */
  onPhoneClick?: () => void;
  /**
   * onClick handler for message button click
   */
  onMessageClick?: () => void;
}

const AssociateBadgeComponent: ForwardRefRenderFunction<HTMLDivElement, AssociateBadgeProps> = (
  {
    avatarUrl,
    classNames = [],
    name,
    phone,
    title,
    truncationLength = 35,
    onBadgeClick,
    onPhoneClick,
    onMessageClick,
    ...props
  }: AssociateBadgeProps,
  ref: AssociateBadgeProps['ref'],
) => {
  const truncatedTitle = title.length > truncationLength ? title.substring(0, truncationLength) + '...' : title;
  const truncatedName = name.length > truncationLength ? name.substring(0, truncationLength) + '...' : name;

  const classAssociateBadge = 'lsux-associate-badge';

  return (
    <Container
      {...props}
      classNames={[classAssociateBadge, 'px-4', 'py-5', cn(classNames)]}
      ref={ref}
      onClick={onBadgeClick}
    >
      <div>
        <Avatar avatarType={avatarUrl ? 'user-photo' : 'user-icon'} imageURL={avatarUrl} />
      </div>
      <div className="pl-2">
        <Heading as="T16" text={truncatedTitle} classNames={[`${classAssociateBadge}--title`, 'pl-3']} />
        <Dropdown.Root>
          <Dropdown.Trigger>
            <Button
              aria-label="Menu button"
              iconRight="arrow_caret_down_md"
              iconColor="P200"
              iconSize="medium"
              label={truncatedName}
              shape="round"
              variant="tertiary"
            />
          </Dropdown.Trigger>
          <Dropdown.Portal>
            {phone ? (
              <DropdownItem onClick={onPhoneClick}>
                Call {phone}
                <div className="right-slot">
                  <Icon name="comm_phone_default" size="small" />
                </div>
              </DropdownItem>
            ) : null}
            <DropdownItem onClick={onMessageClick}>
              Message Me
              <div className="right-slot">
                <Icon name="comm_email_default" size="small" />
              </div>
            </DropdownItem>
          </Dropdown.Portal>
        </Dropdown.Root>
      </div>
    </Container>
  );
};

export const AssociateBadge = forwardRef<HTMLDivElement, AssociateBadgeProps>(AssociateBadgeComponent);
