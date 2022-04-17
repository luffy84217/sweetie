import { ProgressBarStep } from "./ProgressBar";

export interface SignUpState {
  type: SignUpType;
  stepIdx: number;
  sex: number;
};

export interface SignUpTypeConfig {
  steps: ProgressBarStep[];
  components: React.FunctionComponent[];
}

export interface SignUpConfig {
  email: SignUpTypeConfig;
  phone: SignUpTypeConfig;
};

export type SignUpType = keyof SignUpConfig;
