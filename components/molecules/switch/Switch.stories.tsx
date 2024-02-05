import { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Switch, SwitchProps } from './Switch';
import { Container } from '../../../components/atoms/container/Container';

import docs from './Switch.docs.mdx';

const SwitchStory: Story<SwitchProps> = (args: SwitchProps) => {
  const [selected, setSelected] = useState(false);

  const setSelectedSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
  };
  return (
    <Container classNames={['p-3']}>
      <Switch {...args} isChecked={selected} onClick={setSelectedSwitch} />
    </Container>
  );
};

export const Small = SwitchStory.bind({});

Small.args = {
  switchSize: 'small',
};

export const Large = SwitchStory.bind({});

Large.args = {
  switchSize: 'large',
};

export default {
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    isChecked: { control: { type: 'boolean' } },
    switchSize: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  },
  component: SwitchStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Switch',
} as Meta;
