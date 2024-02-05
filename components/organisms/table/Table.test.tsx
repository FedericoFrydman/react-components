import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Table, TableProps } from './Table';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

describe('Table Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test-table';
    wrapper = shallow(
      <Table>
        <TableRow key="1" isHeader={true}>
          <TableCell>Column 1</TableCell>
          <TableCell>Column 2</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Cell 1, 1</TableCell>
          <TableCell>Cell 1, 2</TableCell>
        </TableRow>
        <TableRow key="3" isOdd={true}>
          <TableCell>Cell 2, 1</TableCell>
          <TableCell>Cell 2, 2</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Cell 3, 1</TableCell>
          <TableCell>Cell 3, 2</TableCell>
        </TableRow>
        <TableRow key="5" disabled isOdd={true}>
          <TableCell>Cell 4, 1 (disabled)</TableCell>
          <TableCell>Cell 4, 2 (disabled)</TableCell>
        </TableRow>
      </Table>,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the Table the provided classNames', () => {
          const table = renderTable({ classNames });

          expect(table).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the snackbar', () => {
      expect(renderTable({ ref })).toEqual(ref.current);
    });
  });

  const renderTable = (props: Omit<TableProps, 'children'> = {}): HTMLElement => {
    render(
      <Table {...props} data-testid={testId}>
        <TableRow key="1" isHeader={true}>
          <TableCell>Column 1</TableCell>
          <TableCell>Column 2</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Cell 1, 1</TableCell>
          <TableCell>Cell 1, 2</TableCell>
        </TableRow>
        <TableRow key="3" isOdd={true}>
          <TableCell>Cell 2, 1</TableCell>
          <TableCell>Cell 2, 2</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Cell 3, 1</TableCell>
          <TableCell>Cell 3, 2</TableCell>
        </TableRow>
        <TableRow key="5" disabled isOdd={true}>
          <TableCell>Cell 4, 1 (disabled)</TableCell>
          <TableCell>Cell 4, 2 (disabled)</TableCell>
        </TableRow>
      </Table>,
    );

    return screen.getByTestId(testId);
  };
});
