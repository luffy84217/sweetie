import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DateSelectGroupProps } from "../../types/DateSelectGroup";
import type { OptionT } from "../../types/Select";
import Select from "./Select";

const isLeap = (year: number) => {
  return ((((year) % 4) == 0 && ((year) % 100) != 0) || ((year) % 400) == 0);
};
const createOptions = (length: number, offset = 1) => {
  return Array.from({ length }, (v, i) => ({
    id: (i + offset).toString(),
    value: (i + offset).toString(),
    label: (i + offset).toString(),
  }));
};

const DateSelectGroup: React.FC<DateSelectGroupProps> = ({
  htmlFor,
  label,
  startYear,
  onChange,
}) => {
  const [isPresentYear, setIsPresentYear] = useState(false);
  const [isLeapYear, setIsLeapYear] = useState(false);
  const [monthDisabled, setMonthDisabled] = useState(true);
  const [dayDisabled, setDayDisabled] = useState(true);
  const [day, setDay] = useState<OptionT>({ id: 'placeholder', value: 'day', label: 'Day' });
  const [month, setMonth] = useState<OptionT>({ id: 'placeholder', value: 'month', label: 'Month' });
  const [year, setYear] = useState<OptionT>({ id: '0', value: 'year', label: 'Year' });
  const [dayOptions, setDayOptions] = useState<OptionT[]>([{ id: '1', value: '1', label: '1' }]);
  const now = useMemo(() => new Date(), []);
  
  useEffect(() => {
    if (year.id !== 'placeholder'
      && month.id !== 'placeholder'
      && day.id !== 'placeholder'
    ) {
      onChange?.({ year, month, day});
    }
  }, [year, month, day, onChange]);

  useEffect(() => {
    if (isPresentYear && now.getMonth() + 1 === +month.id) {
      setDayOptions(createOptions(now.getDate()));
    } else {
      switch (month.id) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
          setDayOptions(createOptions(31));
          break;
        case '4':
        case '6':
        case '9':
        case '11':
          setDayOptions(createOptions(30));
          break;
        case '2':
          if (isLeapYear) {
            setDayOptions(createOptions(29));
          } else {
            setDayOptions(createOptions(28));
          }
          break;
        default:
          break;
      }
    }
  }, [year, month, isPresentYear, now, isLeapYear]);
  
  const handleDayChange = (value: OptionT) => {
    setDay(value);
  };
  const handleMonthChange = (value: OptionT) => {
    if (dayDisabled) {
      setDayDisabled(false);
    }
    setMonth(value);
  };
  const handleYearChange = (value: OptionT) => {
    if (isLeap(+value.id)) {
      if (!isLeapYear) {
        setIsLeapYear(true);
      }
    } else {
      if (isLeapYear) {
        setIsLeapYear(false);
      }
    }
    if (now.getFullYear() === +value.id) {
      if (!isPresentYear) {
        setIsPresentYear(true);
      }
    } else {
      if (isPresentYear) {
        setIsPresentYear(false);
      }
    }
    if (monthDisabled) {
      setMonthDisabled(false);
    }
    setYear(value);
  };

  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex gap-1 mt-1">
        <Select
          disabled={monthDisabled}
          className="basis-1/3"
          value={month}
          options={isPresentYear ? createOptions(now.getMonth() + 1) : createOptions(12)}
          onChange={handleMonthChange}
        />
        <Select
          disabled={dayDisabled}
          className="basis-1/3"
          value={day}
          options={dayOptions}
          onChange={handleDayChange}
        />
        <Select
          className="basis-1/3"
          value={year}
          options={createOptions(now.getFullYear() - (startYear as number) + 1, startYear)}
          onChange={handleYearChange}
         />
      </div>
    </div>
  );
};

DateSelectGroup.defaultProps = {
  startYear: 1900,
};

export default DateSelectGroup;
