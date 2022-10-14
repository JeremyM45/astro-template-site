import { ReactElement, useState } from 'react';

export default function useForm(steps: ReactElement[]){
  const [currentStepIndex, setCurrentSetIndex] = useState(0)
  
  function next(){
    setCurrentSetIndex(currentStep => {
      if(currentStep >= steps.length - 1) return currentStep
      return currentStep + 1
    })
  }

  function back(){
    setCurrentSetIndex(currentStep => {
      if(currentStep <= 0) return currentStep
      return currentStep - 1
    })
  }
  
  function goTo(i: number){
    setCurrentSetIndex(i)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isNotFirstStep: currentStepIndex !== 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back
  }
}