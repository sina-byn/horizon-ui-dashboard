import { JSXElementConstructor, ReactElement } from 'react';
import { ResponsiveContainer } from 'recharts';
import clsx from 'clsx';

// * types
type ChartWrapperProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

const ChartWrapper = (props: ChartWrapperProps) => {
  const { width = '100%', height = 250, className, children } = props;

  return (
    <ResponsiveContainer
      width={width}
      height={height}
      className={clsx('text-xs', className)}
    >
      {children}
    </ResponsiveContainer>
  );
};

export default ChartWrapper;
