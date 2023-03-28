// * types
import type { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

type CustomTooltipProps = TooltipProps<ValueType, NameType>;

const CustomTooltip = ({ label, active, payload }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  console.log(payload);

  return (
    <div className='flex flex-col gap-y-1 p-1.5 rounded-md shadow-lg bg-white dark:bg-d-light dark:text-white'>
      {label && <span className='label-field font-medium mb-1'>{label}</span>}
      {payload.map((item, idx) => (
        <span
          className='value-field'
          style={{ color: idx !== 2 ? item.color : '#A3AED0' }}
        >
          {item.name}: {item.value}
        </span>
      ))}
    </div>
  );
};

export default CustomTooltip;
