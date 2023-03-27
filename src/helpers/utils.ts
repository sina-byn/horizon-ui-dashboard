// * types
import type { Children } from '../components/Typography';
import type { Status } from '../components/Tag';

const capitalize = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

const isTouchScreen = () =>
  'ontouchstart' in window ||
  navigator.maxTouchPoints > 0 ||
  'msMaxTouchPoints' in navigator;

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

const formatNumber = (num: number) => {
  if (num < 1000) return num;
  if (num >= 1000 && num < 1000000) return Math.floor(num / 1000) + 'K';
  if (num >= 1000000 && num < 1000000000)
    return Math.floor(num / 1000000) + 'M';
  return Math.floor(num / 1000000000) + 'B';
};

const formatElapsedTime = (ms: number) => {
  const elapsedSeconds = Math.floor(ms / 1000),
    elapsedMinutes = Math.floor(elapsedSeconds / 60),
    elapsedHours = Math.floor(elapsedMinutes / 60),
    elapsedDays = Math.floor(elapsedHours / 24),
    elapsedMonths = Math.floor(elapsedDays / 30),
    elapsedYears = Math.floor(elapsedMonths / 12),
    elaspedTimeArray = [
      elapsedSeconds,
      elapsedMinutes,
      elapsedHours,
      elapsedDays,
      elapsedMonths,
      elapsedYears,
    ],
    timeUnits = ['s', 'm', 'h', 'd', 'm', 'y'];

  let result: number | undefined,
    timeUnit: string = 's';

  elaspedTimeArray.forEach((time, idx) => {
    const timeSet = new Set(elaspedTimeArray);
    if (timeSet.size === 1 && elaspedTimeArray[0] === 0) result = 0;
    else if (result === undefined) result = time;
    else if (time !== 0) {
      if (result > time) timeUnit = timeUnits[idx];
      result = Math.min(result, time);
    }
  });

  return result + timeUnit;
};

const getMonthNo = (month: string) => {
  switch (month.toLowerCase()) {
    case 'jan':
      return 1;
    case 'feb':
      return 2;
    case 'mar':
      return 3;
    case 'apr':
      return 4;
    case 'may':
      return 5;
    case 'jun':
      return 6;
    case 'jul':
      return 7;
    case 'aug':
      return 8;
    case 'sep':
      return 9;
    case 'oct':
      return 10;
    case 'nov':
      return 11;
    case 'dec':
      return 12;
  }
};

const dateStringToMs = (date: string) => {
  const dateChunks = date.split('.');
  const d = new Date(
    `${getMonthNo(dateChunks[1])}/${dateChunks[0]}/${dateChunks[2]}`
  );
  return d.getTime();
};

const sortTableData = <TRowData>({
  key,
  data,
}: {
  key?: keyof TRowData;
  data: TRowData[];
}) => {
  const newData = [...data];

  if (!key) return newData;

  const firstValue = data[0][key];
  const isDate =
    typeof firstValue === 'string' &&
    /\d{1,2}\.\w{3}\.\d{4}$/g.test(firstValue);

  for (let i = 0; i < newData.length; i++) {
    for (let j = 0; j < newData.length - i - 1; j++) {
      const firstValue = newData[j][key];
      const secondValue = newData[j + 1][key];

      if (
        (isDate &&
          typeof firstValue === 'string' &&
          typeof secondValue === 'string' &&
          dateStringToMs(secondValue) < dateStringToMs(firstValue)) ||
        (!isDate && secondValue < firstValue)
      )
        [newData[j], newData[j + 1]] = [newData[j + 1], newData[j]];
    }
  }

  return newData.slice();
};

const getTagClassName = (status: Status) => {
  switch (status) {
    case 'approved':
    case 'done':
      return [
        'fa-check-circle',
        'bg-green-500 text-white',
        'text-green-500 bg-none',
      ];
    case 'disabled':
    case 'pending':
      return [
        'fa-circle-info',
        'bg-orange-400 text-white',
        'text-orange-400 bg-none',
      ];
    case 'error':
      return [
        'fa-circle-xmark',
        'bg-red-500 text-white',
        'text-red-500 bg-none',
      ];
    case 'updating':
      return [
        'fa-arrow-up',
        'bg-blue-500 text-white',
        'text-primary-light bg-none',
      ];
  }
};

export {
  capitalize,
  isTouchScreen,
  searchByQuery,
  formatNumber,
  formatElapsedTime,
  sortTableData,
  getTagClassName,
};
