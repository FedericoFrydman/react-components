/* eslint-disable sort-keys-fix/sort-keys-fix */

import { Story, Meta } from '@storybook/react';

import { Table, TableProps } from './Table';

import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

const TableStory: Story<TableProps> = (args: TableProps) => <Table {...args} />;

export const Default = TableStory.bind({});
Default.args = {
  children: [
    <TableRow key="1" isHeader={true}>
      <TableCell>Column 1</TableCell>
      <TableCell>Column 2</TableCell>
    </TableRow>,
    <TableRow key="2">
      <TableCell>Cell 1, 1</TableCell>
      <TableCell>Cell 1, 2</TableCell>
    </TableRow>,
    <TableRow key="3" isOdd={true}>
      <TableCell>Cell 2, 1</TableCell>
      <TableCell>Cell 2, 2</TableCell>
    </TableRow>,
    <TableRow key="4">
      <TableCell>Cell 3, 1</TableCell>
      <TableCell>Cell 3, 2</TableCell>
    </TableRow>,
    <TableRow key="5" disabled isOdd={true}>
      <TableCell>Cell 4, 1 (disabled)</TableCell>
      <TableCell>Cell 4, 2 (disabled)</TableCell>
    </TableRow>,
  ],
};
export const CellAlign: Story<TableProps> = (args: TableProps) => (
  <Table {...args}>
    <TableRow key="1" isHeader={true}>
      <TableCell textAlign="left" alignContent="top">
        Column 1
      </TableCell>
      <TableCell textAlign="center" alignContent="center">
        Column 2
      </TableCell>
      <TableCell textAlign="right" alignContent="bottom">
        Column 3
      </TableCell>
    </TableRow>
    <TableRow size="large" key="2">
      <TableCell textAlign="left" alignContent="top">
        Cell 1, 1
      </TableCell>
      <TableCell textAlign="center" alignContent="center">
        Cell 1, 2
      </TableCell>
      <TableCell textAlign="right" alignContent="bottom">
        Cell 1, 3
      </TableCell>
    </TableRow>
    <TableRow size="large" key="3" isOdd={true}>
      <TableCell textAlign="left" alignContent="top">
        Cell 2, 1
      </TableCell>
      <TableCell textAlign="center" alignContent="center">
        Cell 2, 2
      </TableCell>
      <TableCell textAlign="right" alignContent="bottom">
        Cell 2, 3
      </TableCell>
    </TableRow>
    <TableRow size="large" key="4">
      <TableCell textAlign="left" alignContent="top">
        Cell 3, 1
      </TableCell>
      <TableCell textAlign="center" alignContent="center">
        Cell 3, 2
      </TableCell>
      <TableCell textAlign="right" alignContent="bottom">
        Cell 3, 3
      </TableCell>
    </TableRow>
    <TableRow size="large" key="5" isOdd={true}>
      <TableCell textAlign="left" alignContent="top">
        Cell 4, 1
      </TableCell>
      <TableCell textAlign="center" alignContent="center">
        Cell 4, 2
      </TableCell>
      <TableCell textAlign="right" alignContent="bottom">
        Cell 4, 3
      </TableCell>
    </TableRow>
  </Table>
);

CellAlign.parameters = {
  docs: {
    description: {
      story: `Applicable to each cell content can be justified to top/center/bottom and text can be aligned to left/center/right 
      \n Column 1 -> Top - Left
      \n Column 2 -> Center - Center
      \n Column 3 -> Bottom - Right,
      `,
    },
  },
};

export const NoBorder = TableStory.bind({});
NoBorder.args = {
  children: [
    <TableRow key="1" isHeader={true}>
      <TableCell>Column 1</TableCell>
      <TableCell>Column 2</TableCell>
    </TableRow>,
    <TableRow key="2">
      <TableCell>Cell 1, 1</TableCell>
      <TableCell>Cell 1, 2</TableCell>
    </TableRow>,
    <TableRow key="3" isOdd={true}>
      <TableCell>Cell 2, 1</TableCell>
      <TableCell>Cell 2, 2</TableCell>
    </TableRow>,
    <TableRow key="4">
      <TableCell>Cell 3, 1</TableCell>
      <TableCell>Cell 3, 2</TableCell>
    </TableRow>,
    <TableRow key="5" isOdd={true}>
      <TableCell>Cell 4, 1</TableCell>
      <TableCell>Cell 4, 2</TableCell>
    </TableRow>,
  ],
  noBorder: true,
};

export default {
  argTypes: {},
  component: TableStory,
  // eslint-disable-next-line sort-keys
  subcomponents: { TableRow, TableCell },
  title: 'Layout/Table',
} as Meta;
