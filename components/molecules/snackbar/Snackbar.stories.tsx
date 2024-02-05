import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { ICON_NAMES } from '../../../components/assets/icons';
import { Alert } from '../alert/Alert';
import { Snackbar, SnackbarProps } from './Snackbar';
import docs from './Snackbar.docs.mdx';

const SnackbarStory: Story<SnackbarProps> = (args: SnackbarProps) => <Snackbar {...args} />;
const SnackbarWithAlertStory: Story<SnackbarProps> = (args: SnackbarProps) => (
  <Snackbar {...args}>
    <Alert title={args.title} severity={args.severity} bold={args.bold} icon={args.icon}>
      {args.message}
    </Alert>
  </Snackbar>
);

const SnackbarWithHookStory: Story<SnackbarProps> = (args: SnackbarProps) => {
  const [open, setOpen] = useState(true);
  return (
    <Snackbar
      message="Press x to dismiss"
      open={open}
      onDismiss={() => {
        setOpen(false);
      }}
      {...args}
    />
  );
};
export const DefaultWithHook = SnackbarWithHookStory.bind({});

export const Default = SnackbarStory.bind({});
Default.args = {
  message: 'Example Message',
};

export const Bold = SnackbarStory.bind({});
Bold.args = {
  bold: true,
  message: 'Example Message',
};

export const Dismissible = SnackbarStory.bind({});
Dismissible.args = {
  message: 'Example Message',
  onDismiss: () => alert('Dissmis pressed'),
};

export const WithTitle = SnackbarStory.bind({});
WithTitle.args = {
  message: 'Example Message',
  title: 'Title',
};

export const PositionTopRight = SnackbarStory.bind({});
PositionTopRight.args = {
  message: 'Example Message',
  position: 'top-right',
};

export const PositionBottomRight = SnackbarStory.bind({});
PositionBottomRight.args = {
  message: 'Example Message',
  position: 'bottom-right',
};

export const AnimationFadeIn = SnackbarStory.bind({});
AnimationFadeIn.args = {
  animationType: 'fade-in',
  message: 'Example Message',
  position: 'top-right',
};

export const AnimationSlideUp = SnackbarStory.bind({});
AnimationSlideUp.args = {
  animationType: 'slide-up',
  message: 'Example Message',
  position: 'top-right',
};

export const WithAlertDefault = SnackbarWithAlertStory.bind({});
WithAlertDefault.args = {
  message: 'Example Message',
};

export const WithAlertSuccess = SnackbarWithAlertStory.bind({});
WithAlertSuccess.args = {
  message: 'Example Message',
  severity: 'success',
};

export const WithAlertError = SnackbarWithAlertStory.bind({});
WithAlertError.args = {
  message: 'Example Message',
  severity: 'error',
};

export const WithAlertInformation = SnackbarWithAlertStory.bind({});
WithAlertInformation.args = {
  message: 'Example Message',
  severity: 'information',
};

export default {
  argTypes: {
    animationType: { control: { type: 'select' }, options: ['fade-in', 'slide-up'] },
    autoHideDuration: { control: { default: null, type: 'number' } },
    bold: { control: { type: 'boolean' } },
    icon: { control: { type: 'select' }, options: ICON_NAMES },
    message: { control: { type: 'text' } },
    position: {
      control: { type: 'select' },
      options: ['default', 'top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    severity: { control: { type: 'select' }, options: ['default', 'error', 'information', 'success', 'warning'] },
    title: { control: { type: 'text' } },
  },
  component: SnackbarStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Snackbar',
} as Meta;
