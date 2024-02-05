import React from 'react';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Story, Meta } from '@storybook/react';

import docs from './DataTable.docs.mdx';
import { DataTable } from './DataTable';

interface RowType {
  col1: string;
  col2: string;
  col3: string;
}

interface ExpandedRowType {
  col1: string;
  col2: string;
  col3: string;
  subCustom?: () => JSX.Element;
  subRows?:
    | {
        col1: string;
        col2: string;
        col3: string;
      }[]
    | undefined;
}

const DataTableStory: Story = (args) => <DataTable {...args}></DataTable>;

const data = (): RowType[] => {
  const returnData: RowType[] = [];
  for (let i = 0; i < 100; i++) {
    returnData.push({
      col1: `Hello${i}`,
      col2: `World${Math.floor(Math.random() * 100)}`,
      col3: `foo${Math.floor(Math.random() * 100)}`,
    });
  }
  return returnData;
};

const headers: ColumnDef<RowType>[] = [
  {
    accessorKey: 'col1',
    header: 'Column 1',
  },
  {
    accessorKey: 'col2',
    header: 'Column 2',
  },
  {
    accessorKey: 'col3',
    header: 'Column 3',
  },
];

const headersE: ColumnDef<ExpandedRowType>[] = [
  {
    accessorKey: 'col1',
    header: 'Sub Column 1', // accessorKey is the "key" in the data
  },
  {
    accessorKey: 'col2',
    header: 'Sub Column 2',
  },
  {
    accessorKey: 'col3',
    header: 'Sub Column 3',
  },
];

export const Default = DataTableStory.bind({});
Default.args = {
  columns: headers,
  data: data(),
  title: 'Basic Datatable',
};

const expandedData = (): ExpandedRowType[] => {
  const returnData = [];
  for (let i = 0; i < 100; i++) {
    returnData.push({
      col1: `Hello${i}`,
      col2: `World${Math.floor(Math.random() * 100)}`,
      col3: `foo${Math.floor(Math.random() * 100)}`,
      subCustom: () => {
        return (
          <DataTable<ExpandedRowType>
            hideHeader={true}
            columns={headersE}
            isInnerTable={true}
            data={[
              {
                col1: `Hello I'm a sub row! from ${i}`,
                col2: `World${Math.floor(Math.random() * 100)}`,
                col3: `foo${Math.floor(Math.random() * 100)}`,
              },
            ]}
          />
        );
      },
    });
  }
  return returnData;
};

export const Expanded = DataTableStory.bind({});
Expanded.args = {
  columns: headers,
  data: expandedData(),
  title: 'Expanded Datatable',
};

export default {
  component: DataTableStory,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: { page: docs },
  },
  title: 'Layout/DataTable',
} as Meta;
