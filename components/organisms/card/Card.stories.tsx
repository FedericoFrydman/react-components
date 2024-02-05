import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';
import docs from './Card.docs.mdx';
import { Container } from '../../atoms/container/Container';
import { Button } from '../../../components/molecules/button/Button';
import { Heading } from '../../../components/atoms/heading/Heading';
import { Text } from '../../../components/atoms/text/Text';
import { useArgs } from '@storybook/client-api';

const CardStory: Story<CardProps> = (args: CardProps) => (
  <Container style={{ width: 340 }} classNames={['m-4']}>
    <Card {...args} />
  </Container>
);

const SelectableCardStory: Story<CardProps> = (args: CardProps) => {
  const [{ isSelected }, updateArgs] = useArgs();
  const toggleSelected = () => {
    updateArgs({ isSelected: !isSelected });
  };
  return (
    <Container style={{ width: 340 }} classNames={['m-4']}>
      <Card onClick={toggleSelected} {...args} />
    </Container>
  );
};

export const Default = CardStory.bind({});
Default.args = {
  children: (
    <>
      <Card.Content>
        <Card.Title>Card Title</Card.Title>
        <Text text="This is the body text of a card. It can be used to describe its content or associated action. This is the body text of a card." />
      </Card.Content>
    </>
  ),
  id: 'card1',
};

export const WithActions = CardStory.bind({});
WithActions.args = {
  children: (
    <>
      <Card.Content>
        <Card.Title>Card Title</Card.Title>
        <Text text="This is the body text of a card. It can be used to describe its content or associated action. This is the body text of a card." />
      </Card.Content>
      <Card.Actions>
        <Button label="Button one" onClick={() => console.log('primary test')} />
        <Button label="Button two" onClick={() => console.log('primary test')} />
      </Card.Actions>
    </>
  ),
  id: 'card-actions',
};

export const WithImage = CardStory.bind({});
WithImage.args = {
  children: (
    <>
      <Card.Image imageURL="https://www.iliketowastemytime.com/sites/default/files/imagecache/blog_image/Abu-Dhabi-United-Arab-Emirates-infinity-dunes-wallpaper-by-daniel-olah-iltwmt.jpg" />
      <Card.Content>
        <Card.Title>Card Title</Card.Title>
        <Text text="This is the body text of a card. It can be used to describe its content or associated action. This is the body text of a card." />
      </Card.Content>
    </>
  ),
  id: 'card-image',
};

export const Selectable = SelectableCardStory.bind({});
Selectable.args = {
  children: (
    <>
      <Card.Image imageURL="https://www.iliketowastemytime.com/sites/default/files/imagecache/blog_image/Abu-Dhabi-United-Arab-Emirates-infinity-dunes-wallpaper-by-daniel-olah-iltwmt.jpg" />
      <Card.Content>
        <Card.Title>Card Title</Card.Title>
        <Text text="This is the body text of a card. It can be used to describe its content or associated action. This is the body text of a card." />
      </Card.Content>
    </>
  ),
  id: 'card-image',
};

export const OnlyChildren = CardStory.bind({});
OnlyChildren.args = {
  children: (
    <>
      <Card.Content>
        <Heading as="T20" text="Card Title" classNames={['pb-3']} />
        <Text
          as="p"
          text="This is the body text of a card. It can be used to describe its content or associated action."
        />
      </Card.Content>
      <Card.Actions>
        <Button label="View Details" onClick={() => alert('Details clicked')} />
        <Button
          label="More Information"
          onClick={() => alert('Details clicked')}
          iconRight="arrow_right_lg"
          iconColor="P200"
        />
      </Card.Actions>
    </>
  ),
};

export default {
  argTypes: {
    background: { control: { type: 'select' }, options: ['light-gray', 'white', 'none'] },
    buttonText: { control: { type: 'text' } },
    cardHeight: { control: { type: 'text' } },
    cardTextHeight: { control: { type: 'text' } },
    cardTitleHeight: { control: { type: 'text' } },
    cardWidth: { control: { type: 'text' } },
    imageAltText: { control: { type: 'text' } },
    imageURL: { control: { type: 'text' } },
    isSelected: { control: { type: 'boolean' } },
    padding: { control: { type: 'select' }, options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    text: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
  },
  component: CardStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Layout/Card',
} as Meta;
