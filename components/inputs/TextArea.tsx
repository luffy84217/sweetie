import type { TextAreaProps } from "../../types/TextArea";

const TextArea: React.FC<TextAreaProps & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({
  htmlFor,
  label,
  ...textareaProps
}) => {
  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          title={textareaProps.title}
          className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
          {...textareaProps}
        />
      </div>
    </div>
  );
};

TextArea.defaultProps = {
  rows: 4,
};

export default TextArea;
