import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

// * components
import Button from '../Button';
import Typography from '../Typography';

// * types
type TableHeaderPrpos<TRowData> = {
  title: string;
  sortBase: keyof TRowData | undefined;
  setSortBase: Dispatch<SetStateAction<keyof TRowData | undefined>>;
};

const TableHeaderCell = <TRowData extends object>({
  title,
  sortBase,
  setSortBase,
}: TableHeaderPrpos<TRowData>) => {
  const sortBaseHandler = () =>
    setSortBase(prev =>
      prev !== title ? (title as keyof TRowData) : undefined
    );

  return (
    <Button
      variant='none'
      size='none'
      radius='none'
      className='table-header flex items-center text-left'
      onClick={sortBaseHandler}
    >
      <Typography tag='span' className='header-title capitalize mr-2'>
        {title}
      </Typography>
      <i
        className={clsx(
          'fa-solid fa-xs mt-1',
          title !== sortBase ? 'fa-chevron-down' : 'fa-chevron-up'
        )}
      />
    </Button>
  );
};

export default TableHeaderCell;
