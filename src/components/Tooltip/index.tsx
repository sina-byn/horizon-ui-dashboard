import { JSXElementConstructor, ReactElement } from 'react';

// * @tippyjs/react
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// * styles
import './Tooltip.css';

// * types
type TooltipProps = {
  content: React.ReactNode;
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <Tippy content={content} placement='bottom' className='text-xs font-medium'>
      {children}
    </Tippy>
  );
};

export default Tooltip;
