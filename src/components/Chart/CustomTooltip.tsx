import clsx from 'clsx';

// * types
import type { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
  className?: string;
};

const CustomTooltip = ({
  label,
  active,
  payload,
  className,
}: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      className={clsx(
        'flex flex-col gap-y-1 p-1.5 rounded-md shadow-custom',
        className || 'bg-primary-light text-white'
      )}
    >
      {label && (
        <span className='label-field font-medium mb-1'>{label}</span>
      )}
      {payload.map(item => (
        <span className='value-field'>
          {item.name}: {item.value}
        </span>
      ))}
    </div>
  );
};

export default CustomTooltip;
