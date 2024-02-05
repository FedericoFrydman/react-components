import { FC, useState } from 'react';
import { Step } from './Step';
import { Switch } from '../../molecules/switch/Switch';

export const StepTest: FC = ({}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState([]);

  const stepClicked = (index: number) => {
    setActiveStep(index);
  };

  const switchClicked = () => {
    if (completed.includes(activeStep)) {
      const index = completed.indexOf(activeStep);
      if (index > -1) {
        completed.splice(index, 1);
      }
    } else {
      completed.push(activeStep);
    }

    setCompleted([...completed]);
  };

  const isChecked = completed.includes(activeStep) ? true : false;

  return (
    <div>
      <Step
        stepNames={['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six']}
        completed={completed}
        clickable={[0, 1, 2, 3, 4, 5, 6]}
        activeIndex={activeStep}
        onClick={stepClicked}
      />
      <div>
        <h3>Please check the item for step {activeStep + 1}</h3>
        <Switch isChecked={isChecked} onClick={switchClicked} />
      </div>
    </div>
  );
};
