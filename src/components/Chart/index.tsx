import {
  LineChart as ReLineChart,
  BarChart as ReBarChart,
  PieChart as RePieChart,
  Tooltip,
  YAxis,
  XAxis,
  Pie,
  Cell,
} from 'recharts';

// * components
import ChartWrapper from './ChartWrapper';
import CustomTooltip from './CustomTooltip';

// * config
const xAxis = {
  dataKey: 'name',
  axisLine: false,
  tickLine: false,
  tick: { stroke: '#AeAED0', storkeWidth: 0.1 },
};

// * types
type LineChartProps = {
  data: unknown[];
  width?: string | number;
  height?: string | number;
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
};

type BarChartProps = LineChartProps & {
  barSize?: number;
};

type PieChartProps = Omit<LineChartProps, 'className' | 'children'> & {
  colors: string[];
};

const LineChart = ({
  data,
  width,
  height,
  className,
  wrapperClassName,
  children,
}: LineChartProps) => {
  return (
    <ChartWrapper width={width} height={height} className={wrapperClassName}>
      <ReLineChart data={data} className={className}>
        <XAxis {...xAxis} />
        <YAxis hide />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: 'none' }}
        />
        {children}
      </ReLineChart>
    </ChartWrapper>
  );
};

const BarChart = ({
  data,
  width,
  height,
  barSize = 10,
  className,
  wrapperClassName: wrapperClassName,
  children,
}: BarChartProps) => {
  return (
    <ChartWrapper width={width} height={height} className={wrapperClassName}>
      <ReBarChart data={data} barSize={barSize} className={className}>
        <XAxis {...xAxis} />
        <YAxis hide />
        <Tooltip
          cursor={{ fill: 'none' }}
          content={<CustomTooltip />}
          wrapperStyle={{ outline: 'none' }}
        />
        {children}
      </ReBarChart>
    </ChartWrapper>
  );
};

const PieChart = ({
  data,
  width,
  height,
  wrapperClassName,
  colors,
}: PieChartProps) => {
  return (
    <ChartWrapper width={width} height={height} className={wrapperClassName}>
      <RePieChart>
        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          startAngle={90}
          endAngle={450}
          outerRadius='70%'
          className='outline-0'
        >
          {data.map((_, idx) => (
            <Cell key={idx} stroke='none' fill={colors[idx]} />
          ))}
        </Pie>
        <Tooltip
          wrapperStyle={{ outline: 'none' }}
          content={
            <CustomTooltip />
          }
        />
      </RePieChart>
    </ChartWrapper>
  );
};

export default {
  LineChart,
  BarChart,
  PieChart,
};
