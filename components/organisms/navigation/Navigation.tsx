import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { LinkContent } from '../../molecules/link-content/LinkContent';
import { Slideout } from '../../molecules/slideout/Slideout';
import { Container } from '../../atoms/container/Container';
import './navigation.scss';
import { IconNames } from '../../../components/atoms/icon/Icon';
import { Icons } from '../../assets/icons';

export interface NavigationItem {
  childItems?: Omit<NavigationItem, 'childItems'>[];
  name: string;
  iconName?: IconNames;
  id?: number;
  data: string;
  divider?: boolean;
  dividerTop?: boolean;
  itemClass?: string[];
  useBadge?: boolean;
}

export type NavigationType = 'slideout' | 'pane';

interface RenderItemProps {
  /**
   * Disabled items (by index)
   */
  disabledItems?: number[];

  /**
   * Data for the active item
   */
  activeData?: string;

  /**
   * Indicates the navigation items have icons
   */
  hasIcons?: boolean;

  /**
   * item in list of items
   */
  item: NavigationItem;

  /**
   * List for every item
   */
  index: number;

  /**
   * Item that is currently active
   */
  activeIndex: number;

  /**
   * Callback function when a navigation item is pressed. Parameter is the index of the tab clicked, and data value of the item
   */
  onClick?: (index: number, data: string) => void;
  /**
   * Indicates that the child items should be initially rendered in the expanded state
   */
  isInitiallyExpanded?: boolean;
}

export interface NavigationProps {
  /**
   * Type; a slideout or a left navigation pane
   */
  navigationType?: NavigationType;
  /**
   * Items in the navigation list
   */
  items: NavigationItem[];
  /**
   * Indicates the navigation items have icons
   */
  hasIcons?: boolean;
  /**
   * Data for the active item
   */
  activeData?: string;
  /**
   * Alternatively, index in the list of items of the active item
   */
  activeIndex?: number;
  /**
   * Disabled items (by index)
   */
  disabledItems?: number[];
  /**
   * Callback function when a navigation item is pressed. Parameter is the index of the tab clicked, and data value of the item
   */
  onClick?: (index: number, data: string) => void;
  /**
   * Indicates that the slideout should be rendered in the open state
   */
  isOpen?: boolean;
  /**
   * Indicates if navigation component needs margin top
   */
  hasMarginTop?: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Close the Slideout
   */
  onClose?: () => void;
  /**
   * Indicates that the child items should be initially rendered in the expanded state
   */
  isInitiallyExpanded?: boolean;
}

const RenderItem: FC<RenderItemProps> = ({
  item,
  index,
  activeIndex,
  onClick,
  disabledItems,
  hasIcons,
  activeData,
  isInitiallyExpanded,
}: RenderItemProps) => {
  const [expanded, setExpanded] = useState(isInitiallyExpanded);
  const [icon, setIcon] = useState(item.iconName);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    onClick(index, item.data);
    setExpanded(!expanded);
  };

  const active =
    (activeIndex != undefined && index === activeIndex) || (activeData != undefined && item.data === activeData);

  item.childItems?.map((childItem) => (childItem.itemClass = ['lsux-navigation--children']));

  useEffect(() => {
    if (hasIcons && active && Icons[`${item.iconName}_filled`]) {
      setIcon(`${item.iconName}_filled`);
    } else if (hasIcons) {
      setIcon(item.iconName);
    }
  }, [hasIcons, active, item.iconName]);

  return (
    <>
      <a
        key={item.name}
        href="#"
        style={{ textDecoration: 'none' }}
        onClick={
          disabledItems.includes(index)
            ? () => {
                event.preventDefault();
              }
            : handleClick
        }
      >
        <LinkContent
          padding={true}
          margin={true}
          text={item.name}
          dynamicPadding="left"
          linkContentStyle="menu"
          divider={item.divider}
          dividerTop={item.dividerTop}
          disabled={disabledItems.includes(index)}
          active={active}
          icon={icon}
          iconPosition={hasIcons ? 'left' : 'none'}
          classNames={item.itemClass}
          useBadge={item.useBadge}
        />
      </a>
      {expanded === true &&
        item.childItems?.length &&
        item.childItems.map((childItem) => (
          <RenderItem
            item={childItem}
            index={index}
            activeIndex={activeIndex}
            onClick={onClick}
            disabledItems={disabledItems}
            hasIcons={hasIcons}
            activeData={activeData}
            key={childItem.name + childItem.data}
          />
        ))}
    </>
  );
};

export const Navigation: FC<NavigationProps> = ({
  navigationType = 'pane',
  items,
  hasIcons = true,
  activeIndex = undefined,
  disabledItems = [],
  onClick,
  onClose,
  classNames = [],
  activeData = undefined,
  isOpen = false,
  hasMarginTop,
  isInitiallyExpanded = false,
}: NavigationProps) => {
  const marginTopVal = hasMarginTop ? `${hasMarginTop}px` : '';

  if (navigationType === 'pane') {
    return (
      <Container classNames={['lsux-navigation--wrapper']} style={{ marginTop: marginTopVal }}>
        <div className={cn('lsux-navigation', classNames)}>
          {items.map((item, i) => (
            <RenderItem
              item={item}
              index={i}
              activeIndex={activeIndex}
              onClick={onClick}
              disabledItems={disabledItems}
              hasIcons={hasIcons}
              activeData={activeData}
              key={item.name + item.data}
              isInitiallyExpanded={isInitiallyExpanded}
            />
          ))}
        </div>
      </Container>
    );
  } else {
    return (
      <Slideout side="left" closeButton="block" autoClose={true} isOpen={isOpen} closeFunction={onClose}>
        {items.map((item, i) => (
          <RenderItem
            item={item}
            index={i}
            activeIndex={activeIndex}
            onClick={onClick}
            disabledItems={disabledItems}
            hasIcons={hasIcons}
            activeData={activeData}
            key={item.name + item.data}
          />
        ))}
      </Slideout>
    );
  }
};
