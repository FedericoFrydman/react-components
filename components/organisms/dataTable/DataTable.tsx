import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import {
  ColumnFiltersState,
  ColumnDef,
  ExpandedState,
  Row,
  TableOptions,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { buildCsvData } from './build-csv-data';
import { Container } from '../../atoms/container/Container';
import { Icon } from '../../atoms/icon/Icon';
import { Page } from '../../molecules/page/Page';
import './DataTable.scss';

import { SearchInput } from './datatable-global-filter-component';

// https://react-table.tanstack.com/docs/api/useTable#table-options
interface DataTableProps<TData extends object> {
  /**
   * Use this prop if you have a DataTable as subCustom in a row
   */
  isInnerTable?: boolean;
  /**
   * Use this prop to hide the header of the table (like if you have a DataTable as subCustom in a row)
   */
  hideHeader?: boolean;
  /**
   * Use this prop to display the title of the table in the table header
   */
  title?: string;
  /**
   * Use this prop to hide the default pagination of the table
   */
  customPagination?: boolean;
  /**
   * The data for the table to display. This array should match the type you provided to table.setRowType<...>, but in theory could be an array of anything
   */
  data: Array<TData>;
  /**
   * See https://react-table.tanstack.com/docs/api/useTable#table-options
   *
   * @Header required - is the display name for column
   * @accessor required - is the key that is used to retrieve the properties out of the data object
   * @column optional - from the docs, if defined it will act as a header group
   */
  columns: ColumnDef<TData>[];
  /**
   * Use this prop if you want to customize the row's props
   */
  rowProps?: (row: Row<TData>) => object | TableOptions<TData>;
  /**
   * Use this prop if you want to customize the data table
   *
   * @style optional - CSSProperties
   * @className optional - string
   * @role optional - string
   */
  tableProps?: TableOptions<TData> | undefined;
  /**
   * Use this prop if you want to customize the data table body
   *
   * @style optional - CSSProperties
   * @className optional - string
   * @role optional - string
   */
  tableBodyProps?: TableOptions<TData> | undefined;
  /**
   * Use this prop if your datatable content is complex and
   * you need a custom handler for downloading the data
   */
  customDownloadFunction?: () => Array<Record<string, any>>;
}

export function DataTable<TData extends object = object>({
  hideHeader,
  isInnerTable,
  title,
  customPagination,
  columns,
  data,
  rowProps = () => ({}),
  tableProps,
  tableBodyProps,
  customDownloadFunction,
}: DataTableProps<TData>) {
  const [showSearchField, setShowSearchField] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const memoizedData = React.useMemo(() => data, [data]);
  const memoizedColumns = React.useMemo(() => columns, [columns]);

  const table = useReactTable({
    columns: memoizedColumns,
    data: memoizedData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: customPagination || false,
    onColumnFiltersChange: setColumnFilters,
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters,
      expanded,
      globalFilter,
    },
  });

  const enableRowExpand = (row: Row<TData>) => {
    if ((row.original as any).subCustom) {
      row.toggleExpanded();
    }
    return true;
  };

  return (
    <Container className="lsux-datatable-container">
      {hideHeader ? (
        <></>
      ) : (
        <div className="lsux-datatable-header">
          <span>{title}</span>
          <div className="lsux-datatable-actions">
            <Container alignItems="baseline" flexbox flexDirection="row">
              <Icon
                className="mr-3"
                name="action_search"
                onClick={() => {
                  setShowSearchField(true);
                }}
              />
              {showSearchField ? (
                <Container alignItems="baseline" flexbox flexDirection="row">
                  <SearchInput globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                  <Icon
                    color="R100"
                    name="action_close"
                    classNames={['ml-2', 'mr-5']}
                    onClick={() => {
                      setShowSearchField(false);
                      setGlobalFilter('');
                    }}
                  />
                </Container>
              ) : (
                <></>
              )}
            </Container>

            <CSVLink
              data={
                typeof customDownloadFunction === 'function'
                  ? customDownloadFunction()
                  : buildCsvData<TData>({
                      columns: memoizedColumns,
                      data: memoizedData,
                    })
              }
            >
              <Icon name="action_download" className="mr-2"></Icon>
            </CSVLink>
            <Icon
              name="action_filter"
              onClick={() => {
                console.log('filter');
              }}
            />
          </div>
        </div>
      )}
      <table {...tableProps} className="lsux-datatable">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={'headerGroupId'} className="lsux-datatable-header-row">
              {headerGroup.headers.map((column) => (
                <th key={column.id}>
                  <div className="lsux-datatable-header-cell" onClick={() => column.column.toggleSorting()}>
                    {column.column.getIsSorted() ? (
                      column.column.getIsSorted() == 'desc' ? (
                        <Icon name="nav_dropdown_arrow_down" />
                      ) : (
                        <Icon name="nav_dropdown_arrow_up" />
                      )
                    ) : (
                      ''
                    )}
                    {flexRender(column.column.columnDef.header, column.getContext())}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...tableBodyProps}>
          {table.getRowModel().rows.map((row) => {
            return (
              <React.Fragment key={row.id + (isInnerTable ? '-inner-Fragment-row' : '-Fragment-row')}>
                <tr
                  {...rowProps(row)}
                  key={row.id + (isInnerTable ? '-inner-row' : '-main-row')}
                  className="lsux-datatable-data-row"
                  onClick={() => enableRowExpand(row)}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <td
                        key={row.id + (isInnerTable ? '-inner-row' : '-main-row-') + index + '-inner-cell'}
                        className="lsux-datatable-data-cell"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
                {row.getIsExpanded() && (row.original as any).subCustom && (
                  <tr key={row.id + '-expanded'}>
                    <td
                      key={row.id + '-expanded-td'}
                      colSpan={row.getVisibleCells().length}
                      className="lsux-datatable-data-sub-td"
                    >
                      {(row.original as any).subCustom()}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {!customPagination && table.getPageCount() > 1 ? (
        <Page
          classNames={['pagination']}
          bucketSize={1}
          currentBucket={table.getState().pagination.pageIndex + 1}
          maxDisplay={3}
          numItems={table.getPageCount()}
          onClick={(pageNumber) => {
            table.setPageIndex(pageNumber - 1);
          }}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}
