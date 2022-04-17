export interface TextFieldProps {
  type?: string;
  label?: string | React.ReactNode;
  labelHint?: string | React.ReactNode;
  htmlFor?: string;
  addon?: string | React.ReactNode;
  startEnhancer?: string | React.ReactNode;
  endEnhancer?: string | React.ReactNode;
  invalidMessage?: string | React.ReactNode;
}
