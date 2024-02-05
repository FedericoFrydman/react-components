import React, { FC, Fragment } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import cn from 'classnames';

import { Button } from '../../../components/molecules/button/Button';
import { Icon } from '../../../components/atoms/icon/Icon';

import './dropdown.scss';

interface WithClassNames {
  classNames?: cn.Argument;
}

/* DropdownLabel */
export type DropdownLabelProps = RadixDropdownMenu.DropdownMenuLabelProps & WithClassNames;
export const DropdownLabel: FC<DropdownLabelProps> = ({ classNames, ...props }) => (
  <RadixDropdownMenu.Label className={cn('lsux-dropdown-label', classNames)}>{props.children}</RadixDropdownMenu.Label>
);

/* DropdownSeparator */
export type DropdownSeparatorProps = RadixDropdownMenu.DropdownMenuSeparatorProps & WithClassNames;
export const DropdownSeparator: FC<DropdownSeparatorProps> = ({ classNames, ...props }) => (
  <RadixDropdownMenu.Separator className={cn('lsux-dropdown-separator', classNames)} {...props} />
);

/* DropdownItem */
export interface DropdownItemProps extends RadixDropdownMenu.DropdownMenuItemProps {
  children: React.ReactNode;
  subMenu?: React.ReactNode;
  classNames?: cn.Argument;
}
export const DropdownItem: FC<DropdownItemProps> = ({ children, classNames, ...props }) => (
  <RadixDropdownMenu.Item {...props} className={cn('lsux-dropdown-item', classNames)}>
    {children}
  </RadixDropdownMenu.Item>
);

/* DropdownItemWithSubMenu */
export interface DropdownItemWithSubMenuProps extends RadixDropdownMenu.DropdownMenuSubTriggerProps {
  children: React.ReactNode;
  subMenu: React.ReactNode | React.ReactNode[];
  classNames?: cn.Argument;
}
export const DropdownItemWithSubMenu: FC<DropdownItemWithSubMenuProps> = ({
  children,
  classNames,
  subMenu,
  ...props
}) => (
  <RadixDropdownMenu.Sub>
    <RadixDropdownMenu.SubTrigger {...props} className={cn('lsux-dropdown-sub-trigger', classNames)}>
      {children}
      <div className="right-slot">
        <Icon name="arrow_chevron_right" size="small" />
      </div>
    </RadixDropdownMenu.SubTrigger>
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.SubContent className="lsux-dropdown-subcontent" sideOffset={2} alignOffset={-5}>
        <Fragment>{subMenu}</Fragment>
      </RadixDropdownMenu.SubContent>
    </RadixDropdownMenu.Portal>
  </RadixDropdownMenu.Sub>
);

/* DropdownCheckboxItem */
export interface DropdownCheckboxItemProps extends RadixDropdownMenu.DropdownMenuCheckboxItemProps {
  children: React.ReactNode;
  classNames?: cn.Argument;
}
export const DropdownCheckboxItem: FC<DropdownCheckboxItemProps> = ({ children, classNames, ...props }) => (
  <RadixDropdownMenu.CheckboxItem className={cn('lsux-dropdown-checkbox-item', classNames)} {...props}>
    <RadixDropdownMenu.ItemIndicator className="lsux-dropdown-item-indicator">
      <Icon name="interface_check" size="small" />
    </RadixDropdownMenu.ItemIndicator>
    {children}
  </RadixDropdownMenu.CheckboxItem>
);

/* DropdownRadioItem */
export interface DropdownRadioItemProps extends RadixDropdownMenu.DropdownMenuRadioItemProps {
  children: React.ReactNode;
  classNames?: cn.Argument;
}
export const DropdownRadioItem: FC<DropdownRadioItemProps> = ({ children, classNames, ...props }) => (
  <RadixDropdownMenu.RadioItem className={cn('lsux-dropdown-radio-item', classNames)} {...props}>
    <RadixDropdownMenu.ItemIndicator className="lsux-dropdown-item-indicator">•</RadixDropdownMenu.ItemIndicator>
    {children}
  </RadixDropdownMenu.RadioItem>
);

/* DropdownRadioGroup */
export interface DropdownRadioGroupProps extends RadixDropdownMenu.DropdownMenuRadioGroupProps {
  children: React.ReactNode;
  classNames?: cn.Argument;
}
export const DropdownRadioGroup: FC<DropdownRadioGroupProps> = ({ children, classNames, ...props }) => (
  <RadixDropdownMenu.RadioGroup className={cn(classNames)} {...props}>
    {children}
  </RadixDropdownMenu.RadioGroup>
);

/* DropdownRoot */
export interface DropdownRootProps extends RadixDropdownMenu.DropdownMenuProps {
  children: React.ReactNode;
}
const DropdownRoot: FC<DropdownRootProps> = ({ children, ...props }) => (
  <RadixDropdownMenu.Root {...props}>{children}</RadixDropdownMenu.Root>
);

/* DropdownTrigger */
export interface DropdownTriggerProps extends RadixDropdownMenu.DropdownMenuTriggerProps {
  children?: React.ReactNode;
}
const DropdownTrigger: FC<DropdownTriggerProps> = ({ children, ...props }) => {
  if (!children) {
    children = (
      <Button
        aria-label="Menu button"
        iconLeft="menu_more_vertical"
        iconColor="P200"
        iconSize="small"
        shape="round"
        variant="secondary"
      />
    );
  }

  return (
    <RadixDropdownMenu.Trigger asChild {...props}>
      {children}
    </RadixDropdownMenu.Trigger>
  );
};

/* DropdownPortal */
export interface DropdownPortalProps extends RadixDropdownMenu.DropdownMenuPortalProps {
  children: React.ReactNode;
}
const DropdownPortal: FC<DropdownPortalProps> = ({ children, ...props }) => (
  <RadixDropdownMenu.Portal {...props}>
    <RadixDropdownMenu.Content className="lsux-dropdown-content" sideOffset={5}>
      <RadixScrollArea.Root className="lsux-dropdown-scroll-area">
        <RadixScrollArea.Viewport>{children}</RadixScrollArea.Viewport>
      </RadixScrollArea.Root>
      <RadixDropdownMenu.Arrow className="lsux-dropdown-arrow" />
    </RadixDropdownMenu.Content>
  </RadixDropdownMenu.Portal>
);

export interface DropdownProps extends RadixDropdownMenu.DropdownMenuProps {
  children: React.ReactNode;
}
const DropdownComponent: FC<DropdownProps> = ({ children }) => <DropdownRoot>{children}</DropdownRoot>;

DropdownComponent.displayName = 'Dropdown';

type DropdownRootComponent = FC<DropdownRootProps>;
type DropdownTriggerComponent = FC<DropdownTriggerProps>;
type DropdownPortalComponent = FC<DropdownPortalProps>;
type DropdownComp = FC<DropdownProps> & {
  Root: DropdownRootComponent;
  Trigger: DropdownTriggerComponent;
  Portal: DropdownPortalComponent;
};

export const Dropdown = DropdownComponent as DropdownComp;

Dropdown.Root = DropdownRoot;
Dropdown.Trigger = DropdownTrigger;
Dropdown.Portal = DropdownPortal;
