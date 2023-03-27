// * types
import type { KanbanCardData } from '../KanbanBoard';

type BoardData = {
  id: number;
  title: string;
  data: KanbanCardData[];
};

const boardsData: BoardData[] = [
  {
    id: 1,
    title: 'backlog',
    data: [
      {
        id: 1,
        title: 'Option to "use local/server version" feature',
        description:
          "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
        state: 'updating',
      },
      {
        id: 2,
        title: 'Add/modify your own CSS-Selectors',
        image: '/kanban/image-1.png',
        description:
          'Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.',
        state: 'pending',
      },
      {
        id: 3,
        title: 'Shortcode for templates to display correctly',
        description:
          'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
        state: 'error',
      },
    ],
  },
  {
    id: 2,
    title: 'in progress',
    data: [
      {
        id: 1,
        title: "General ideas to improve 'Edit' workflow",
        description:
          "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
        state: 'pending',
      },
      {
        id: 2,
        title: 'Shortcode for templates to display correctly',
        description:
          'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
        state: 'updating',
      },
      {
        id: 3,
        title: '[UX Design] - Set the default Library tab',
        image: '/kanban/image-2.png',
        description:
          'I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...',
        state: 'error',
      },
    ],
  },
  {
    id: 3,
    title: 'done',
    data: [
      {
        id: 1,
        title: 'Copy/Paste elements between pages',
        description:
          'We can only copy/paste elements (or group of elements) in the same page, which is quite limited.',
        state: 'done',
      },
      {
        id: 2,
        title: 'Remove Extra DIV for each container added',
        description:
          "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
        state: 'done',
      },
      {
        id: 3,
        title: 'Add Figma files for the Library design blocks',
        description:
          'I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...',
        state: 'done',
      },
    ],
  },
  {
    id: 4,
    title: 'backlog',
    data: [
      {
        id: 1,
        title: 'Option to "use local/server version" feature',
        description:
          "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
        state: 'updating',
      },
      {
        id: 2,
        title: 'Add/modify your own CSS-Selectors',
        image: '/kanban/image-1.png',
        description:
          'Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.',
        state: 'pending',
      },
      {
        id: 3,
        title: 'Shortcode for templates to display correctly',
        description:
          'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
        state: 'error',
      },
    ],
  },
  {
    id: 5,
    title: 'in progress',
    data: [
      {
        id: 1,
        title: "General ideas to improve 'Edit' workflow",
        description:
          "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
        state: 'pending',
      },
      {
        id: 2,
        title: 'Shortcode for templates to display correctly',
        description:
          'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
        state: 'updating',
      },
      {
        id: 3,
        title: '[UX Design] - Set the default Library tab',
        image: '/kanban/image-2.png',
        description:
          'I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...',
        state: 'error',
      },
    ],
  },
  {
    id: 6,
    title: 'done',
    data: [
      {
        id: 1,
        title: 'Copy/Paste elements between pages',
        description:
          'We can only copy/paste elements (or group of elements) in the same page, which is quite limited.',
        state: 'done',
      },
      {
        id: 2,
        title: 'Remove Extra DIV for each container added',
        description:
          "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
        state: 'done',
      },
      {
        id: 3,
        title: 'Add Figma files for the Library design blocks',
        description:
          'I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...',
        state: 'done',
      },
    ],
  },
];

export default boardsData;
