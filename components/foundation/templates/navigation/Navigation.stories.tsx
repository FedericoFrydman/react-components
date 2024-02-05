import { Story, Meta } from '@storybook/react';
import { PaneNavigationDemo } from './SidebarNavigation';
import { StepperNavigationDemo } from './StepperNavigation';

export default {
  argTypes: {},
  component: PaneNavigationDemo,
  title: 'Page Layouts/Navigation',
} as Meta;

const SideBarStory: Story = () => <PaneNavigationDemo />;
const StepperStory: Story = () => <StepperNavigationDemo />;

StepperStory.args = {
  activeIndex: 1,
  brand: 'ls',
  clickable: [],
  completed: [0],
  counterPosition: 'right',
  stepNames: ['One', 'Two', 'Three'],
};

export const Sidebar = SideBarStory.bind({});
export const Stepper = StepperStory.bind({});
