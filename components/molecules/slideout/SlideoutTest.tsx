import { FC, useState, useCallback } from 'react';
import { Button } from '../button/Button';
import { Slideout } from './Slideout';

export const SlideoutTest: FC = () => {
  const [stateTopOpen, setStateTopOpen] = useState(false);
  const [stateLeftOpen, setStateLeftOpen] = useState(false);
  const [stateRightOpen, setStateRightOpen] = useState(false);
  const [stateBottomOpen, setStateBottomOpen] = useState(false);

  const openTopSlideout = useCallback(() => {
    setStateTopOpen(true);
  }, []);

  const openLeftSlideout = useCallback(() => {
    setStateLeftOpen(true);
  }, []);

  const openRightSlideout = useCallback(() => {
    setStateRightOpen(true);
  }, []);

  const openBottomSlideout = useCallback(() => {
    setStateBottomOpen(true);
  }, []);

  const closeTopSlideout = useCallback(() => {
    setStateTopOpen(false);
  }, []);

  const closeLeftSlideout = useCallback(() => {
    setStateLeftOpen(false);
  }, []);

  const closeRightSlideout = useCallback(() => {
    setStateRightOpen(false);
  }, []);

  const closeBottomSlideout = useCallback(() => {
    setStateBottomOpen(false);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Slideout
        side="top"
        isOpen={stateTopOpen}
        closeFunction={closeTopSlideout}
        modal={false}
        autoClose={false}
        closeButton="float"
        size={60}
      >
        <div style={{ margin: '20px' }}>My content</div>
      </Slideout>
      <Slideout
        side="left"
        isOpen={stateLeftOpen}
        closeFunction={closeLeftSlideout}
        modal={true}
        autoClose={false}
        closeButton="float"
      >
        <div style={{ margin: '20px' }}>My content</div>
      </Slideout>
      <Slideout
        side="right"
        isOpen={stateRightOpen}
        closeFunction={closeRightSlideout}
        modal={false}
        autoClose={true}
        closeButton="float"
      >
        <div style={{ margin: '20px' }}>My content</div>
      </Slideout>
      <Slideout
        side="bottom"
        isOpen={stateBottomOpen}
        closeFunction={closeBottomSlideout}
        modal={true}
        autoClose={true}
        closeButton="float"
        size={60}
      >
        <div style={{ margin: '20px' }}>My content</div>
      </Slideout>

      <Button
        label="Open Top: modal false, auto false"
        variant="secondary"
        onClick={openTopSlideout}
        classNames={['mb-4']}
      />
      <Button
        label="Open Left: modal true, auto false"
        variant="secondary"
        onClick={openLeftSlideout}
        classNames={['mb-4']}
      />
      <Button
        label="Open Right: modal false, auto true"
        variant="secondary"
        onClick={openRightSlideout}
        classNames={['mb-4']}
      />
      <Button
        label="Open Bottom: modal true, auto true"
        variant="secondary"
        onClick={openBottomSlideout}
        classNames={['mb-4']}
      />
    </div>
  );
};
