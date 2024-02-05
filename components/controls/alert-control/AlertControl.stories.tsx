import { Story, Meta } from '@storybook/react';
import { AlertProps } from '../../../components/molecules/alert/Alert';

import { AlertControl } from './AlertControl';

import docs from './AlertControl.docs.mdx';

const AlertControlStory: Story<AlertProps> = () => <AlertControl />;

export const Default = AlertControlStory.bind({});

export default {
  argTypes: {
    market: {
      control: { type: 'select' },
      options: ['en-us', 'es-us', 'en-ca', 'fr-ca'],
    },
  },
  component: AlertControlStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/AlertControl',
} as Meta;
