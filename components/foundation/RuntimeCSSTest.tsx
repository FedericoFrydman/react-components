import { FC } from 'react';
import { Button } from '../molecules/button/Button';

export const RuntimeCSSTest: FC = ({}) => {
  const bothOffClicked = () => {
    document.body.classList.remove('using-key');
    document.body.classList.remove('using-mouse');
  };

  const keyboardClicked = () => {
    document.body.classList.add('using-key');
    document.body.classList.remove('using-mouse');
  };
  const keyboardOffClicked = () => {
    document.body.classList.remove('using-key');
    document.body.classList.add('using-mouse');
  };

  return (
    <div>
      <Button onClick={keyboardClicked} label="Keyboard On/Mouse Off" />
      <br />
      <Button onClick={keyboardOffClicked} label="Keyboard Off/Mouse On" />
      <br />
      <Button onClick={bothOffClicked} label="Both Off" />
      <br />
      <br />
    </div>
  );
};
