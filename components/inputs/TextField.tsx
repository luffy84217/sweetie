import type { TextFieldProps } from "../../types/TextField";

const TextField: React.FC<TextFieldProps & React.HTMLAttributes<HTMLInputElement>> = ({
  type,
  label,
  labelHint,
  htmlFor,
  addon,
  startEnhancer,
  endEnhancer,
  invalidMessage,
  ...inputProps
}) => {
  const base = `block w-full ${startEnhancer ? 'pl-10' : ''} pr-10 sm:text-sm border-gray-300 rounded-md shadow-sm focus:ring-focus focus:border-focus `;
  const invalidNative = 'invalid:border-danger invalid:text-red-900 invalid:placeholder-red-300 invalid:focus:outline-none invalid:focus:ring-danger invalid:focus:border-danger';
  const invalid = 'border-danger text-red-900 placeholder-red-300 focus:outline-none focus:ring-danger focus:border-danger';

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <span className="text-sm text-gray-500">
          {labelHint}
        </span>
      </div>
      <div className="mt-1 flex relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {startEnhancer}
        </div>
        {addon && <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
          {addon}
        </span>}
        <input
          type={type}
          className={invalidMessage ? (base + invalid) : (base + invalidNative)}
          aria-invalid="true"
          placeholder={inputProps.placeholder}
          {...inputProps}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {endEnhancer}
        </div>
      </div>
      <p className="mt-2 text-sm text-danger">
        {invalidMessage}
      </p>
    </div>
  );
};

TextField.displayName = 'TextField';
TextField.defaultProps = {
  type: 'text',
};

export default TextField;
