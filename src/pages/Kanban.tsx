// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import KanbanBoard from '../features/Kanban/KanbanBoard';

// * data
import boardsData from '../features/Kanban/data/boards-data';

const Kanban = () => {
  return (
    <MainLayout title='Kanban'>
      <div className='boards-container col-span-12 flex gap-x-3 overflow-x-auto pb-4'>
        {boardsData.map(board => (
          <KanbanBoard
            key={board.id}
            boardTitle={board.title}
            data={board.data}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Kanban;
