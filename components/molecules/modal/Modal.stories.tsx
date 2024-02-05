import { Story, Meta } from '@storybook/react';

import { Button } from '../button/Button';
import { Modal, ModalProps } from './Modal';
import { Text } from '../../../components/atoms/text/Text';

import docs from './Modal.docs.mdx';

function btnCloseClick() {
  alert('Close Clicked');
}
function btnPrimaryClick() {
  alert('OK Clicked');
}
function btnSecondaryClick() {
  alert('Secondary OK Clicked');
}

const ModalStory: Story<ModalProps> = (args: ModalProps) => <Modal {...args} />;
const ModalStoryWithActions: Story<ModalProps> = (args: ModalProps) => (
  <Modal position="center" closeFunction={btnCloseClick} closeButton={true} {...args}>
    <Modal.Title>Terms & Conditions</Modal.Title>
    <Text text="Example terms and conditions text for the user to read." />
    <Modal.Actions>
      <Button label="Accept & Continue" variant="primary" onClick={btnPrimaryClick} />
      <Button label="Cancel" variant="secondary" onClick={btnCloseClick} />
    </Modal.Actions>
  </Modal>
);

export const DefaultWithActions = ModalStoryWithActions.bind({});

export const Default = ModalStory.bind({});
Default.args = {
  children: (
    <>
      <Modal.Title>Terms & Conditions</Modal.Title>
      <Text textSize="large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Text>
      <Modal.Actions>
        <Button label="Accept & Continue" variant="primary" onClick={btnPrimaryClick} />
        <Button label="Cancel" variant="secondary" onClick={btnCloseClick} />
      </Modal.Actions>
    </>
  ),
  closeButton: true,
  closeFunction: btnCloseClick,
  position: 'center',
};

export const WithThirdButton = ModalStory.bind({});
WithThirdButton.args = {
  children: (
    <>
      <Modal.Title>Terms & Conditions</Modal.Title>
      <Text>This is text inside the modal</Text>
      <Modal.Actions>
        <Button label="Accept & Continue" variant="primary" onClick={btnPrimaryClick} />
        <Button label="Customize" variant="primary" onClick={btnSecondaryClick} />
        <Button label="Cancel" variant="secondary" onClick={btnCloseClick} />
      </Modal.Actions>
    </>
  ),
  closeButton: true,
  closeFunction: btnCloseClick,
  position: 'center',
};

export const WithChildren = ModalStory.bind({});
WithChildren.args = {
  children: <Text>This is text inside the modal</Text>,
  position: 'center',
};

export default {
  argTypes: {
    closeButton: { control: { type: 'boolean' } },
    isFullScreen: { control: { type: 'boolean' } },
    maxHeight: {
      control: { type: 'text' },
    },
    maxWidth: {
      control: { type: 'text' },
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'center'],
    },
    title: {
      control: { type: 'text' },
    },
  },
  component: ModalStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Modal',
} as Meta;
