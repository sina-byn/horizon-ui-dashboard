// * types
import type { Children } from '../components/Typography';

const capitalize = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

const searchByQuery = <TElement extends HTMLElement>(
  query: string,
  ref: React.RefObject<TElement>,
  contentRef: React.MutableRefObject<Children>
) => {
  if (
    !(
      typeof contentRef.current === 'string' ||
      typeof contentRef.current === 'number' ||
      Array.isArray(contentRef.current)
    )
  )
    return;

  let content = contentRef.current;
  if (Array.isArray(content)) content = content.join('');
  if (typeof content === 'number') content = content + '';

  if (query.length < 3) {
    ref.current!.innerHTML = content;
    return;
  }

  ref.current!.innerText = content;
  const text = content;
  const queryIdx = text.toLowerCase().indexOf(query.toLowerCase())!;
  if (queryIdx === -1) return;

  const highlightedResult = `
      <mark class='text-black'>${text.slice(
        queryIdx,
        queryIdx + query.length
      )}</mark>
    `;

  ref.current!.innerHTML =
    text.slice(0, queryIdx) +
    highlightedResult +
    text.slice(queryIdx + query.length);
};

export { capitalize, searchByQuery };
