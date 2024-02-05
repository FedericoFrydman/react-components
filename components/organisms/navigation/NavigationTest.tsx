import { FC, useState } from 'react';
import { Navigation } from './Navigation';
import { Button } from '../../molecules/button/Button';
import { useMedia } from '../../foundation/utilities/useMedia';
import { Container } from '../../atoms/container/Container';

export const NavigationTest: FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navigationClicked = (index: number) => {
    setActiveIndex(index);
  };

  const isSmall = useMedia(['(max-width: 1023px)'], [true], false);

  const openClicked = () => {
    setIsOpen(true);
  };

  const closeClicked = () => {
    setIsOpen(false);
  };

  return (
    <Container flexbox>
      {isSmall && <Button label="Open Slideout" onClick={openClicked} />}
      <Navigation
        items={[
          {
            childItems: [
              {
                data: 'child1',
                name: 'childOne',
              },
            ],
            data: 'zero',
            iconName: 'action_attach',
            name: 'one',
          },
          {
            childItems: [
              {
                data: 'twochild1',
                name: 'twochild1',
              },
              {
                data: 'twochild2',
                name: 'twochild2',
              },
              {
                data: 'twochild3',
                name: 'twochild3',
              },
            ],
            data: 'one',
            iconName: 'action_add',
            name: 'two',
            useBadge: true,
          },
        ]}
        activeIndex={activeIndex}
        onClick={navigationClicked}
        navigationType={!isSmall ? 'pane' : 'slideout'}
        isOpen={isOpen}
        onClose={closeClicked}
        disabledItems={[4]}
        classNames={['pt-7']}
      />
    </Container>
  );
};
