import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export interface OptionT {
  readonly id: string;
  readonly label: string | React.ReactNode;
}

interface SelectProps<T = OptionT> {
  options: T[];
  selected: T;
  label?: string | React.ReactNode;
  onChange?: (value: T) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  selected,
  label,
  onChange,
}) => {
  const handleChange = (value: OptionT) => {
    onChange?.(value);
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-background relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
              <span className="block truncate">{selected.label}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                {open
                  ? <ChevronUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  : <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                }
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-background shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      `${active ? 'text-background bg-primary' : 'text-color'} cursor-default select-none relative py-2 pl-3 pr-9`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                          {option.label}
                        </span>

                        {selected ? (
                          <span className={`${active ? 'text-background' : 'text-primary'} absolute inset-y-0 right-0 flex items-center pr-4`}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

Select.displayName = 'Select';

export default Select;
