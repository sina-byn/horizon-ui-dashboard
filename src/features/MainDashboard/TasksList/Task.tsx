import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

// * components
import Checkbox from '../../../components/Checkbox';
import Typography from '../../../components/Typography';

// * types
type TaskProps = {
  task: TaskData;
  tasks: TaskData[];
  setTasks: Dispatch<SetStateAction<TaskData[]>>;
};

export type TaskData = {
  id: number;
  text: string;
  completed: boolean;
};

const Task = ({ task, tasks, setTasks }: TaskProps) => {
  const taskCompleteHandler = (checked: boolean) => {
    const taskIdx = tasks.indexOf(task);
    setTasks(prev => {
      prev[taskIdx].completed = checked;
      return prev.slice();
    });
  };

  return (
    <div className='flex justify-between items-center gap-x-2'>
      <Checkbox
        className='mt-1'
        defaultChecked={task.completed}
        onCheckChange={taskCompleteHandler}
      />
      <Typography
        className={clsx(
          'task grow truncate font-semibold dark:text-white',
          task.completed ? 'text-primary' : 'text-neutral'
        )}
      >
        {task.text}
      </Typography>
      <i className='fa-solid fa-bars text-neutral dark:text-white cursor-pointer' />
    </div>
  );
};

export default Task;
