import { useState } from "react";
import InstructionScreen from "../components/InstructionScreen";
import PermissionScreen from "../components/PermissionScreen";
import QuestionScreen from "../components/QuestionScreen";
import AnswerScreen from "../components/AnswerScreen";

const App = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <>
      {step === 0 && <InstructionScreen onNext={nextStep} />}
      {step === 1 && <PermissionScreen onNext={nextStep} />}
      {step === 2 && <QuestionScreen question="What is your name?" onNext={nextStep} />}
      {step === 3 && <AnswerScreen onComplete={() => alert("Test Complete!")} />}
    </>
  );
};

export default App;
