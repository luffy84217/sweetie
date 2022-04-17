export interface OptionT {
  readonly id: string;
  readonly value: string;
  readonly label?: string | React.ReactNode;
}

export interface SelectProps<T = OptionT> {
  options: T[];
  value: T;
  disabled?: boolean;
  label?: string | React.ReactNode;
  className?: string;
  onChange?: (value: T) => void;
}
