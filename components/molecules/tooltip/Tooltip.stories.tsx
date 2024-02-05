import { Meta, Story } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import docs from './Tooltip.docs.mdx';

import { Badge } from '../../molecules/badge/Badge';
import { Button } from '../button/Button';
import { Container } from '../../../components/atoms/container/Container';

const TooltipStory: Story<TooltipProps> = (args: TooltipProps) => (
  <Container classNames={['m-3']}>
    <Tooltip {...args} />
  </Container>
);

export const Default = TooltipStory.bind({});
Default.args = {
  children: <Badge text="Hover" />,
  text: 'Some text',
};

export const BottomPlacement = TooltipStory.bind({});
BottomPlacement.args = {
  children: <Badge text="Hover" />,
  placement: 'bottom',
  text: 'Some text',
};

export const RightPlacement = TooltipStory.bind({});
RightPlacement.args = {
  children: <Badge text="Hover" />,
  placement: 'right',
  text: 'Some text',
};

export const WithArrow = TooltipStory.bind({});
WithArrow.args = {
  arrow: true,
  children: <Badge text="Hover" />,
  placement: 'bottom',
  text: 'Some text',
};

export const WithoutAnimation = TooltipStory.bind({});
WithoutAnimation.args = {
  animation: '',
  children: <Badge text="Hover" />,
  placement: 'bottom',
  text: 'Some text',
};

export const WithShiftAwayAnimation = TooltipStory.bind({});
WithShiftAwayAnimation.args = {
  animation: 'shift-away',
  children: <Badge text="Hover" />,
  placement: 'bottom',
  text: 'Some text',
};
export const LightTheme = TooltipStory.bind({});
LightTheme.args = {
  animation: 'scale',
  children: <Badge text="Hover" />,
  placement: 'bottom',
  text: 'Some text',
  theme: 'light',
};

export const WithInnerHTMLContent = TooltipStory.bind({});
WithInnerHTMLContent.args = {
  animation: 'shift-away',
  arrow: true,
  children: <Badge text="Hover" />,
  placement: 'bottom',
  text: 'Some text',
  theme: 'light',
  tooltipHTML: <Button label="Cool button" variant="tertiary" />,
};

export default {
  argTypes: {
    animation: {
      control: { type: 'select' },
      options: ['shift-away', 'shift-toward', 'scale', 'perspective', ''],
    },
    arrow: { control: { type: 'boolean' } },
    duration: { control: { type: 'number' } },
    placement: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    text: {
      control: { type: 'text' },
    },
    textSize: {
      control: { type: 'select' },
      options: ['body', 'description', 'tiny', 'small', 'medium', 'large', 'extra-large'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'light-border', 'material', 'translucent'],
    },
  },
  component: TooltipStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Tooltip',
} as Meta;
