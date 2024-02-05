import { Story, Meta } from '@storybook/react';
import { Text } from '../../../components/atoms/text/Text';
import { Card } from '../../../components/organisms/card/Card';
import { useState } from 'react';
import { Container } from '../../../components/atoms/container/Container';

import { List, ListProps } from './List';
import { ListItem } from './ListItem';
import { ListItemInput } from './ListItemInput';

import docs from './List.docs.mdx';

const ListStory: Story<ListProps> = (args: ListProps) => (
  <Container classNames={['m-5']} style={{ maxWidth: 340 }}>
    <List {...args}></List>
  </Container>
);

const ListStoryCheckboxes: Story<ListProps> = (args: ListProps) => {
  const checkboxItems = ['0', '1', '2', '3', '4', '5', '6', '7'];
  const [selectedIds, setSelectedIds] = useState(['0']);

  function handleSelectionChange(id: string) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  return (
    <Container classNames={['m-5']} style={{ maxWidth: 340 }}>
      <List {...args}>
        <>
          {checkboxItems.map((id, i) => (
            <ListItemInput.Checkbox
              key={id}
              id={id.toString()}
              inputProps={{ name: id.toString() }}
              primary={`$${i + 1}0.00/mo`}
              secondary="Lorem ipsum dolor sit amet"
              isSelected={selectedIds.includes(id)}
              handleClick={handleSelectionChange}
            />
          ))}
        </>
      </List>
    </Container>
  );
};
export const ListOfCheckboxes = ListStoryCheckboxes.bind({});

const ListStoryRadioButtons: Story<ListProps> = (args: ListProps) => {
  const radioItems = ['0', '1', '2', '3', '4', '5', '6', '7'];
  const [selectedId, setSelectedId] = useState('0');

  function handleSelectionChange(id: string) {
    setSelectedId(id);
  }

  return (
    <Container classNames={['m-5']} style={{ maxWidth: 340 }}>
      <List {...args}>
        <>
          {radioItems.map((id, i) => (
            <ListItemInput.Radio
              key={id}
              id={id.toString()}
              inputProps={{ name: id.toString() }}
              primary={`$${i + 1}0.00/mo`}
              secondary="Lorem ipsum dolor sit amet"
              isSelected={selectedId === id}
              handleClick={handleSelectionChange}
            />
          ))}
        </>
      </List>
    </Container>
  );
};
export const ListOfRadioButtons = ListStoryRadioButtons.bind({});

const ListStorySwitches: Story<ListProps> = (args: ListProps) => {
  const switchItems = ['0', '1', '2', '3', '4', '5', '6', '7'];
  const [selectedIds, setSelectedIds] = useState(['0']);

  function handleSelectionChange(id: string) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  return (
    <Container classNames={['m-5']} style={{ maxWidth: 340 }}>
      <List {...args}>
        <>
          {switchItems.map((id, i) => (
            <ListItemInput.Switch
              key={id}
              id={id.toString()}
              inputProps={{ name: id.toString() }}
              primary={`$${i + 1}0.00/mo`}
              secondary="Lorem ipsum dolor sit amet"
              isSelected={selectedIds.includes(id)}
              handleClick={handleSelectionChange}
            />
          ))}
        </>
      </List>
    </Container>
  );
};
export const ListOfSwitches = ListStorySwitches.bind({});

const CardWithListOfCheckboxes: Story<ListProps> = (args: ListProps) => {
  const exampleItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [selectedIds, setSelectedIds] = useState(['1']);

  function handleSelectionChange(id: string) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  const checkboxItems = exampleItems.map((id, i) => (
    <ListItemInput.Switch
      key={id}
      id={id.toString()}
      inputProps={{ name: id.toString() }}
      primary={`$${i + 1}0.00/mo`}
      secondary="Lorem ipsum dolor sit amet"
      isSelected={selectedIds.includes(id)}
      handleClick={handleSelectionChange}
      controlPosition="left"
    />
  ));

  return (
    <Container classNames={['m-5']} style={{ maxWidth: 340 }}>
      <Card background="white">
        <Card.Content background="white">
          <Card.Title>Card Title</Card.Title>
          <Text text="Example description text" />
        </Card.Content>
        <Card.Content background="light-gray">
          <Card.Title classNames={['mb-3']}>Coverage Add-ons</Card.Title>
          <List background="white" {...args}>
            {checkboxItems}
          </List>
        </Card.Content>
      </Card>
    </Container>
  );
};
export const CardWithCheckboxes = CardWithListOfCheckboxes.bind({});
CardWithCheckboxes.args = {
  classNames: ['test-example'],
  noBorder: true,
};

export const ListOfText = ListStory.bind({});
ListOfText.args = {
  children: [...Array(8)].map((_, i) => (
    <ListItem key={i}>
      <ListItem.Text primary="Item Name" secondary="Description" />
      <ListItem.Text primary="$0.00/mo" textAlign="right" />
    </ListItem>
  )),
};

export const ListOfButtons = ListStory.bind({});
ListOfButtons.args = {
  children: [...Array(5)].map((_, i) => (
    <ListItem key={i}>
      <ListItem.Button>Press me</ListItem.Button>
    </ListItem>
  )),
};

export default {
  argTypes: {
    noBorder: { control: { type: 'boolean' } },
    stretch: { control: { type: 'boolean' } },
  },
  component: ListStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/List',
} as Meta;
