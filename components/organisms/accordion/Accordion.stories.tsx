import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Accordion, AccordionProps } from './Accordion';
import docs from './Accordion.docs.mdx';
import { Alert } from '../../../components/molecules/alert/Alert';
import { Checkbox } from '../../../components/molecules/checkbox/Checkbox';
import { ICON_NAMES } from '../../../components/assets/icons';
import { Container } from '../../../components/atoms/container/Container';
import { Text } from '../../../components/atoms/text/Text';

interface Canvas {
  canvasElement: HTMLElement;
}

const AccordionStory: Story<AccordionProps> = (args: AccordionProps) => (
  <Container classNames={['p-3']}>
    <Accordion {...args}></Accordion>
  </Container>
);
const AccordionStoryWithAlert: Story<AccordionProps> = (args: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Accordion
        {...args}
        allowOnClickCallback={(e: React.MouseEvent) => {
          const allow = (e.target as HTMLElement).classList.contains('lsux-icon');
          if (!allow) {
            setIsOpen(true);
          }
          return allow;
        }}
        {...(args.buttonText !== undefined
          ? {
              buttonOnClick: () => {
                setIsOpen(true);
              },
            }
          : null)}
      />
      {isOpen && (
        <Alert
          icon="alert_warning"
          severity="warning"
          dismissible
          onDismiss={() => {
            setIsOpen(false);
          }}
        >
          Click registered
        </Alert>
      )}
    </>
  );
};

export const Default = AccordionStory.bind({});

Default.args = {
  children: 'Some text',
  id: 'accordion',
  initialOpen: false,
  title: 'My Title',
};

Default.play = async ({ canvasElement }: Canvas) => {
  const canvas = within(canvasElement);

  const dropdown = canvas.getByText('My Title');

  await userEvent.click(dropdown);

  expect(await canvas.getByText('Some text')).toBeVisible();
};

export const WithIcon = AccordionStory.bind({});
WithIcon.args = {
  children: 'Some text',
  id: 'accordion-icon',
  initialOpen: false,
  title: 'My Title',
  titleIcon: 'id_family',
};

WithIcon.play = async ({ canvasElement }: Canvas) => {
  const canvas = within(canvasElement);

  const dropdown = canvas.getByText('My Title');

  await userEvent.click(dropdown);

  expect(await canvas.getByText('Some text')).toBeVisible();
};

export const WithClickHandler = AccordionStoryWithAlert.bind({});
WithClickHandler.args = {
  children: `
SAMPLE FUNCTION - 
allowOnClickCallback: (e: React.MouseEvent) => {
  const allow = (e.target as HTMLElement).classList.contains('lsux-icon');
  if (!allow) {
    alert('Click Event Blocked');
  }
  return allow;
},
`,
  id: 'accordion-icon',
  initialOpen: false,
  title: 'Only Chevron Open/Close, custom method to control open and close',
};

WithClickHandler.play = async ({ canvasElement }: Canvas) => {
  const canvas = within(canvasElement);

  const chevronArrow = canvas.getByAltText('nav_chevron_single_down.');

  await userEvent.click(chevronArrow);

  expect(
    await canvas.getByText(
      `SAMPLE FUNCTION - allowOnClickCallback: (e: React.MouseEvent) => { const allow = (e.target as HTMLElement).classList.contains('lsux-icon'); if (!allow) { alert('Click Event Blocked'); } return allow; },`,
    ),
  ).toBeVisible();

  const title = canvas.getByText('Only Chevron Open/Close, custom method to control open and close');

  await userEvent.click(title);

  expect(await canvas.getByText('Click registered')).toBeVisible();

  const alertCloseBtn = canvas.getByAltText('menu_close_md.');

  await userEvent.click(alertCloseBtn);
};

export const WithMaxHeight = AccordionStory.bind({});
WithMaxHeight.args = {
  accordionIcon: 'plus-sign',
  border: false,
  children: (
    <>
      <Checkbox name="checkbox-one" rightLabel="Jacob Jones" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-two" rightLabel="Arlene McCoy" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-three" rightLabel="Devon Lane" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-four" rightLabel="Courtney Henry" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-five" rightLabel="Jacob Jones" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-six" rightLabel="Arlene McCoy" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-se" rightLabel="Devon Lane" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-four" rightLabel="Courtney Henry" classNames={['mt-4']} readOnly />
      <Checkbox name="checkbox-one" rightLabel="Jacob Jones" classNames={['mt-4']} readOnly />
    </>
  ),
  id: 'accordion-extra',
  initialOpen: false,
  title: 'I have max-height, no borders and plus sign',
};

WithMaxHeight.play = async ({ canvasElement }: Canvas) => {
  const canvas = within(canvasElement);

  const dropdown = canvas.getByText('I have max-height, no borders and plus sign');

  await userEvent.click(dropdown);

  expect(await canvas.getAllByText('Jacob Jones')[0]).toBeVisible();
};

export const WithInnerChildrenBadgeAndButton = AccordionStoryWithAlert.bind({});
WithInnerChildrenBadgeAndButton.args = {
  badgeText: 'Operational',
  badgeVariant: 'success',
  children: 'Some text',
  id: 'accordion-icon',
  initialOpen: false,
  title: 'My Title',
};

export const ToggleIconChevron = AccordionStory.bind({});
ToggleIconChevron.args = {
  accordionIcon: 'chevron',
  children: 'Some text',
  id: 'accordion-icon',
  initialOpen: false,
  title: 'My Title',
};

export const ToggleIconPlusSign = AccordionStory.bind({});
ToggleIconPlusSign.args = {
  accordionIcon: 'plus-sign',
  children: 'Some text',
  id: 'accordion-icon',
  initialOpen: false,
  title: 'My Title',
};

export const WithInnerChildren = AccordionStory.bind({});
WithInnerChildren.args = {
  children: 'Content text',
  id: 'accordion-badge-link',
  initialOpen: false,
  innerChildren: (
    <>
      <Text text="Sign in error message" />
      <Text text="May 20, 2021 12:29 pm EST" style={{ color: 'var(--n500)' }} textSize={'description'} />
      <Text text="Canada" />
    </>
  ),
  title: 'My Title',
};

WithInnerChildrenBadgeAndButton.play = async ({ canvasElement }: Canvas) => {
  const canvas = within(canvasElement);

  const dropdownIcon = canvas.getByAltText('nav_chevron_single_down.');

  await userEvent.click(dropdownIcon);

  expect(await canvas.getByText('Some text')).toBeVisible();

  const editBtn = canvas.getByText('Edit');

  await userEvent.click(editBtn);

  expect(await canvas.getByText('Click registered')).toBeVisible();

  const alertCloseBtn = canvas.getByAltText('menu_close_md.');

  await userEvent.click(alertCloseBtn);
};

export default {
  argTypes: {
    accordionIcon: {
      control: { type: 'select' },
      options: ['chevron', 'plus-sign'],
    },
    badgeText: { control: { type: 'text' } },
    badgeVariant: {
      control: { type: 'select' },
      options: ['default', 'success', 'attention', 'important', 'new', 'primary'],
    },
    border: { control: { type: 'boolean' } },
    headingTitle: { control: { type: 'boolean' } },
    initialOpen: { control: { type: 'boolean' } },
    isExpanded: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    titleIcon: { control: { type: 'select' }, options: ICON_NAMES },
  },
  component: AccordionStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Layout/Accordion',
} as Meta;
