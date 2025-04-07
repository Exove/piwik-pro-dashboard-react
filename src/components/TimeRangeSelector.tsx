import { Period } from '../utils/types';

interface TimeRangeSelectorProps {
  currentValue: string;
  setValue: (value: Period) => void;
}

/**
 * TimeRangeSelector component that allows the user to select a time range
 */
export default function TimeRangeSelector({
  currentValue,
  setValue,
}: TimeRangeSelectorProps) {
  return (
    <div className="tw:mb-4 tw:flex tw:gap-2">
      <button
        onClick={() => setValue('7d')}
        className={`tw:px-4 tw:py-2 tw:rounded ${
          currentValue === '7d'
            ? 'tw:bg-blue-600 tw:text-white'
            : 'tw:bg-gray-200 tw:text-gray-800 tw:hover:bg-gray-300'
        }`}
      >
        Last 7 Days
      </button>
      <button
        onClick={() => setValue('30d')}
        className={`tw:px-4 tw:py-2 tw:rounded ${
          currentValue === '30d'
            ? 'tw:bg-blue-600 tw:text-white'
            : 'tw:bg-gray-200 tw:text-gray-800 tw:hover:bg-gray-300'
        }`}
      >
        Last 30 Days
      </button>
    </div>
  );
}
