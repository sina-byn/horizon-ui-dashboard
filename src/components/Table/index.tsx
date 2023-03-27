import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

// * components
import Typography from '../Typography';
import TableHeaderCell from './TableHeaderCell';
import Spinner from '../Spinner';

// * types
type TableProps<TRowData> = {
  tableHeader?: string;
  headers: TableHeader<TRowData>[];
  rows: TRowData[];
  sortBase?: keyof TRowData | undefined;
  setSortBase?: Dispatch<SetStateAction<keyof TRowData | undefined>>;
  className?: string;
  theadClassName?: string;
  loading?: boolean;
};

type TableHeader<TRowData> = {
  key?: string;
  title: string;
  dynamicHeader?: boolean;
  headerClassName?: string;
  field?: (item: TRowData) => React.ReactNode;
  fieldClassName?: string;
};

const Table = <TRowData extends { id: number | string }>({
  tableHeader,
  headers,
  rows,
  sortBase,
  setSortBase,
  className,
  theadClassName,
  loading,
}: TableProps<TRowData>) => {
  const getField = (item: any, column: any) => {
    if (column.field) return column.field(item);

    let keyArr = column.key ? column.key.split('.') : column.title.split('.');
    let value = item;
    for (let i = 0; i < keyArr.length; i++) {
      value = value[keyArr[i]];
    }
    return <Typography tag='span'>{value}</Typography>;
  };

  return (
    <>
      <header className='table-header mb-6'>
        <h6 className='font-bold text-xl text-primary dark:text-white'>
          {tableHeader}
        </h6>
      </header>
      <div className={clsx('table-wrapper overflow-y-auto', className)}>
        <table className='w-full mt-3'>
          <thead
            className={clsx(
              'sticky inset-0 bg-white dark:bg-d-primary',
              theadClassName
            )}
          >
            <tr>
              {headers.map(header => {
                return (
                  <th
                    key={header.key || header.title}
                    className={clsx(
                      'capitalize text-neutral text-left pb-2 px-3 first:pl-0',
                      header.headerClassName
                    )}
                  >
                    {header.dynamicHeader && setSortBase ? (
                      <TableHeaderCell
                        title={header.title}
                        sortBase={sortBase}
                        setSortBase={setSortBase}
                      />
                    ) : (
                      <Typography tag='span'>{header.title}</Typography>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {!loading &&
              rows.map(row => {
                return (
                  <tr key={row.id}>
                    {headers.map(header => {
                      return (
                        <td
                          key={header.key || header.title}
                          className={clsx(
                            'whitespace-nowrap font-semibold text-primary dark:text-white text-left px-3 first:pl-0',
                            header.fieldClassName
                          )}
                        >
                          {getField(row, header)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {loading && (
          <div className='spinner-wrap py-10'>
            <Spinner className='w-10 h-10 mx-auto' />
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
