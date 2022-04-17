export interface ProgressBarStep {
  id: string;
  label: string | React.ReactNode;
}

export interface ProgressBarProps {
  steps: ProgressBarStep[];
  currentStepIdx: number;
}
