import { OptionT } from "./Select";

export interface DateSelectGroupProps {
  htmlFor?: string;
  label?: string | React.ReactNode;
  startYear?: number;
  onChange?: (value: {
    year: OptionT;
    month: OptionT;
    day: OptionT;
  }) => void;
}
