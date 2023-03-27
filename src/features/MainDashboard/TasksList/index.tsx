import { useState } from 'react';

// * components
import Card from '../../../components/Card';
import Task from './Task';

// * data
const data: TaskData[] = [
  {
    id: 1,
    text: 'Landing Page Dashboard',
    completed: false,
  },
  {
    id: 2,
    text: 'Dashboard Builder',
    completed: true,
  },
  {
    id: 3,
    text: 'Mobile App Design',
    completed: true,
  },
  {
    id: 4,
    text: 'Illustrations',
    completed: false,
  },
  {
    id: 5,
    text: 'Promotional LP',
    completed: true,
  },
  {
    id: 6,
    text: 'Landing Page Dashboard',
    completed: false,
  },
  {
    id: 7,
    text: 'Dashboard Builder',
    completed: true,
  },
  {
    id: 8,
    text: 'Mobile App Design',
    completed: true,
  },
  {
    id: 9,
    text: 'Illustrations',
    completed: false,
  },
  {
    id: 10,
    text: 'Promotional LP',
    completed: true,
  },
];

// * types
import type { TaskData } from './Task';

const TasksList = () => {
  const [tasks, setTasks] = useState<TaskData[]>(data);

  return (
    <Card style={{ paddingRight: 0 }} className='sm:col-span-6 xl:col-span-3 flex-col'>
      <header className='card-header'>
        <h6 className='card-title text-primary dark:text-white text-md font-semibold mb-5'>
          Tasks
        </h6>
      </header>
      <section className='tasks-table flex flex-col gap-y-3 max-h-[225px] overflow-y-auto pr-4 mr-2'>
        {tasks.map(task => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </section>
    </Card>
  );
};

export default TasksList;
