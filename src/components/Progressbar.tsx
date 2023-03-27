// * types
type ProgressbarProps = {
  percent: number;
};

const Progressbar = ({ percent }: ProgressbarProps) => {
  return (
    <div className='progress-bar w-full h-2 rounded-full overflow-hidden bg-[#EFF4FB]'>
      <div
        style={{ width: percent + '%' }}
        className='fill h-full bg-primary-light dark:bg-d-primary-light rounded-full'
      />
    </div>
  );
};

export default Progressbar;
