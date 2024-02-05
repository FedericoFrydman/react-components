import { ColumnDef } from '@tanstack/react-table';

export const buildCsvData = <TData extends { subRows?: any[] }>({
  data,
  columns,
}: {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, any>>;
}): Array<Record<string, any>> => {
  const nonNestedHeaders: string[] = [];
  const nestedHeaders: string[] = [];
  const reactToCsvHeaders = columns.map((column: any) => column.accessorKey as string);

  const pushRowObject = (row: any) => {
    const record: Record<string, any> = {};

    reactToCsvHeaders.forEach((header) => {
      if (nestedHeaders.includes(header)) {
        if (!row[header]?.props?.children) {
          return;
        }
        record[header] = row[header].props.children;
      } else {
        record[header] = row[header];
      }
    });

    if (Object.keys(record).length > 0) {
      dataToDownload.push(record);
    }
  };

  let countedKeys = 0;
  const dataToDownload: Array<Record<string, any>> = [];
  data.forEach((row) => {
    // figure out which columns need to be handled differently
    if (countedKeys !== reactToCsvHeaders.length) {
      Object.entries(row).forEach(([key, value]) => {
        if (!!value && typeof value === 'object') {
          nestedHeaders.push(key);
        } else if (value) {
          nonNestedHeaders.push(key);
          countedKeys++;
        }
        return;
      });
    }

    pushRowObject(row);
    // if there are subRows then we need to add them
    if (row.subRows) {
      row.subRows.forEach((nestedRow: any) => {
        pushRowObject(nestedRow);
      });
    }
  });

  return dataToDownload;
};
