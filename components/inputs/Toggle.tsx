import { Switch } from "@headlessui/react";

interface ToggleProps {
  checked: boolean;
  color?: string;
  variant?: 'short';
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  label?: string | React.ReactNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  color,
  variant,
  checkedIcon,
  uncheckedIcon,
  label,
  disabled,
  onChange,
}) => {
  const handleChange = (checked: boolean) => {
    onChange?.(checked);
  };

  if (variant === 'short') {
    return (
      <Switch.Group>
        <Switch
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none"
        >
          <span className="sr-only">Use setting</span>
          <span aria-hidden="true" className="pointer-events-none absolute bg-transparent w-full h-full rounded-md" />
          <span
            aria-hidden="true"
            className={`${checked ? 'bg-gray-200' : `bg-${color}`} pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200`}
          />
          <span
            aria-hidden="true"
            className={`${checked ? 'translate-x-0' : 'translate-x-5'} pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200`}
          >
            <span
              className={`${checked ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
              aria-hidden="true"
            >
              {uncheckedIcon}
            </span>
            <span
              className={`${checked ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
              aria-hidden="true"
            >
              {checkedIcon}
            </span>
          </span>
        </Switch>
        <Switch.Label as="span" className="ml-3">
          {label}
        </Switch.Label>
      </Switch.Group>
    );
  }

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        className={`${checked ? 'bg-gray-200' : `bg-${color}`} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={`${checked ? 'translate-x-0' : 'translate-x-5'} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        >
          <span
            className={`${checked ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
            aria-hidden="true"
          >
            {uncheckedIcon}
          </span>
          <span
            className={`${checked ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
            aria-hidden="true"
          >
            {checkedIcon}
          </span>
        </span>
      </Switch>
      <Switch.Label as="span" className="ml-3">
        {label}
      </Switch.Label>
    </Switch.Group>
  );
};

Toggle.displayName = 'Toggle';
Toggle.defaultProps = {
  color: 'primary',
  disabled: false,
};

export default Toggle;
