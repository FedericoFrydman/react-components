import { FC, useState } from 'react';
import { Switch } from './Switch';

export const SwitchTest: FC = ({}) => {
  const [selected, setSelected] = useState(false);

  const setSelectedSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
  };

  return (
    <div>
      <div>Value is {selected ? 'On' : 'Off'}</div>
      <Switch onClick={setSelectedSwitch} isChecked={selected} />
    </div>
  );
};
