import { forwardRef, HTMLProps, Ref } from 'react';
import cn from 'classnames';

import { Button } from '../../molecules/button/Button';

import './Tree.scss';

export interface TreeItem {
  name: string;
  id?: number;
  selected?: boolean;
  expanded?: boolean;
  highlighted?: boolean;
  children?: TreeItem[];
}

export interface TreeProps extends Omit<HTMLProps<HTMLDivElement>, 'css' | 'onClick'> {
  /**
   * Root of the tree
   */
  root: TreeItem;
  /**
   * Allows selection
   */
  allowSelect?: boolean;
  /**
   * Selected callback
   */
  onClick?: (index: number) => void;
  /**
   * Open item callback
   */
  onExpand?: (index: number) => void;
  /*
   * Collapse item callback
   */
  onCollapse?: (index: number) => void;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const TreeComponent = (
  {
    root,
    classNames = [],
    allowSelect = true,
    onClick = null,
    onExpand = null,
    onCollapse = null,
    ...props
  }: TreeProps,
  ref: TreeProps['ref'],
) => {
  const openClick = function (e: React.MouseEvent, id: number) {
    if (onExpand) {
      onExpand(id);
      e.stopPropagation();
    }
  };

  const closeClick = function (e: React.MouseEvent, id: number) {
    if (onCollapse) {
      onCollapse(id);
      e.stopPropagation();
    }
  };

  const renderTreeItem = function (item: TreeItem) {
    const classTreeRow = 'lsux-tree-row';
    const cnTreeRow = cn(classTreeRow, {
      [`${classTreeRow}-allow-select`]: allowSelect,
      [`${classTreeRow}-selected`]: item.selected,
    });

    return (
      <>
        <div
          className={cnTreeRow}
          onClick={() => {
            if (allowSelect && onClick) {
              onClick(item.id);
            }
          }}
        >
          <div className={`${classTreeRow}-label`}>
            {item.children && item.children.length > 0 && item.expanded && (
              <Button
                variant="tertiary"
                iconLeft="nav_chevron_single_down"
                onClick={(e: React.MouseEvent) => {
                  closeClick(e, item.id);
                }}
              />
            )}
            {item.children && item.children.length > 0 && !item.expanded && (
              <Button
                variant="tertiary"
                iconLeft="nav_chevron_single_right"
                onClick={(e: React.MouseEvent) => {
                  openClick(e, item.id);
                }}
              />
            )}
            {(!item.children || item.children.length === 0) && <div style={{ height: '34px', width: '34px' }}></div>}
            <span className={cn('pl-2', { [`${classTreeRow}-highlighted`]: item.highlighted })}>{item.name}</span>
          </div>
        </div>
        <div className="pt-2" style={{ paddingLeft: '17px' }}>
          {item.children && item.expanded && (
            <div className={cn('lsux-tree', 'pl-3')} key={item.id}>
              {item.children.map(renderTreeItem)}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div {...props} ref={ref} className={cn(classNames)}>
      {renderTreeItem(root)}
    </div>
  );
};

/**
 * Tree Component
 */
export const Tree = forwardRef<HTMLDivElement, TreeProps>(TreeComponent);
