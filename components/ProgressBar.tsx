import { CheckIcon } from '@heroicons/react/solid';
import { ProgressBarProps } from '../types/ProgressBar';

const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  currentStepIdx,
}) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center pt-6 mt-4">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className={`${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''} relative`}>
            {stepIdx < currentStepIdx ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-primary" />
                </div>
                <button
                  type="button"
                  className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-full hover:bg-accent"
                >
                  <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="sr-only">{step.label}</span>
                </button>
                <span className="absolute left-4 bottom-8 -translate-x-1/2 text-base text-gray-500 hover:text-gray-900 py-1 cursor-default">{step.label}</span>
              </>
            ) : stepIdx === currentStepIdx ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <button
                  type="button"
                  className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-primary rounded-full"
                  aria-current="step"
                >
                  <span className="h-2.5 w-2.5 bg-primary rounded-full" aria-hidden="true" />
                  <span className="sr-only">{step.label}</span>
                </button>
                <span className="absolute left-4 bottom-8 -translate-x-1/2 text-base text-gray-500 hover:text-gray-900 py-1 cursor-default">{step.label}</span>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <button
                  type="button"
                  className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full cursor-default"
                >
                  <span
                    className="h-2.5 w-2.5 bg-transparent rounded-full"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.label}</span>
                </button>
                <span className="absolute left-4 bottom-8 -translate-x-1/2 text-base text-gray-500 hover:text-gray-900 py-1 cursor-default">{step.label}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressBar;
