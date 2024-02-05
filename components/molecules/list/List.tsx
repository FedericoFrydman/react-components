import { Ref, forwardRef, ReactElement } from 'react';

import './list.scss';
import { Container, ContainerProps } from '../../../components/atoms/container/Container';

const classList = 'lsux-list';

export interface ListProps extends ContainerProps {
  /**
   * The children of the list.
   */
  children?: string | number | ReactElement | ReactElement[];
  /**
   * Determines if each list item has a border.
   * @default false
   */
  noBorder?: boolean;
  /**
   * Stretch the component across the full width of its parent.
   */
  stretch?: boolean;
  /**
   * Additional classNames to add to the list.
   */
  classNames?: string[];
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const ListComponent = (
  { children, noBorder = false, stretch, classNames = [], ...props }: ListProps,
  ref: ListProps['ref'],
) => {
  const cnList = {
    [`${classList}`]: true,
    [`${classList}--border`]: !noBorder,
    [`${classList}--stretch`]: stretch,
  };

  return (
    <Container {...props} ref={ref} classNames={[cnList, ...classNames]}>
      {children}
    </Container>
  );
};

export const List = forwardRef<HTMLDivElement, ListProps>(ListComponent);

/**
 * The List component displays content in additional sub-components for content, inputs, and actions.
 */
