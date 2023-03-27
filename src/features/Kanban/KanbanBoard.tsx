// * components
import Card from '../../components/Card';
import KanbanCard from './KanbanCard';

// * types
type KanbanBoardProps = {
  boardTitle: string;
  data: KanbanCardData[];
};

export type KanbanCardData = {
  id?: number;
  title: string;
  image?: FileList | string;
  description?: string;
  state: 'updating' | 'pending' | 'error' | 'done';
};

const KanbanBoard = ({ boardTitle, data }: KanbanBoardProps) => {
  return (
    <Card
      style={{ paddingInline: '1rem' }}
      className='kanban-board lg:col-span-4 flex-col gap-y-3 h-fit'
    >
      <header className='board-header'>
        <h6 className='board-title dark:text-white font-bold capitalize'>{boardTitle}</h6>
      </header>
      {data.map(card => (
        <KanbanCard
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          state={card.state}
        />
      ))}
    </Card>
  );
};

export default KanbanBoard;
