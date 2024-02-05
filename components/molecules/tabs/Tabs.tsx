import { Ref, HTMLProps, forwardRef } from 'react';
import cn from 'classnames';

import './Tabs.scss';
import { Label } from '../../../components/atoms/label/Label';

export type TabsVariant = 'pills' | 'bar' | 'tabs';
export interface TabsProps extends Omit<HTMLProps<HTMLDivElement>, 'onClick' | 'css'> {
  /**
   * Names of the tabs
   */
  tabNames: string[];
  /**
   * Index in the array of the current active tab
   */
  activeIndex: number;
  /**
   * Define the styles of the tabs
   * @default pills
   */
  variant?: TabsVariant;
  /**
   * Stretch the component across the full width of its parent.
   * @default false
   */
  stretch?: boolean;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Callback function when a tab is pressed. Parameter is the index of the tab clicked
   */
  onClick?: (index: number) => void;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const TabsComponent = (
  { tabNames, activeIndex, onClick, variant = 'pills', stretch = false, classNames = [], ...props }: TabsProps,
  ref: TabsProps['ref'],
) => {
  if (variant === 'bar')
    console.warn('The bar variant in the Tabs component has been deprecated. Please use pills or tabs instead.');
  const classTab = 'lsux-tab';
  const cnTab = cn({ [`${classTab}--${variant}`]: variant, [`${classTab}--stretch`]: stretch }, classNames);

  return (
    <div {...props} className={cnTab} ref={ref}>
      {tabNames.map(function (name, index) {
        const handleClick = (event: React.MouseEvent<HTMLUListElement>): void => {
          event.preventDefault();
          onClick(index);
        };
        return (
          <ul
            key={index.toString()}
            className={cn({ [`${classTab}`]: true, [`${classTab}--${variant}-selected`]: index === activeIndex })}
            onClick={index === activeIndex ? null : handleClick}
          >
            <li className={cn('my-3', 'mx-4')}>
              {index === activeIndex ? (
                <Label text={name} labelSize="medium" />
              ) : (
                <a href="#">
                  <Label text={name} labelSize="medium" />
                </a>
              )}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

/**
 * Tabs allow for an easy way to organize similar content into groups, without having to use separate pages to do so.
 * Tabs should be placed in a consistent location across the screens and render content without any page refresh.
 */

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(TabsComponent);
