import { useState } from 'react';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <ProgressBar step={step} />
      {step === 1 ? (
        <StepOne onNext={() => setStep(2)} />
      ) : (
        <StepTwo />
      )}
    </div>
  );
}
