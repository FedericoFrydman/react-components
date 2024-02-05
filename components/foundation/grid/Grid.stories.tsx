import { Story, Meta } from '@storybook/react';

import { Text } from '../../atoms/text/Text';
import { Grid, GridProps } from './Grid';
import { GridRow } from './GridRow';
import { GridCol } from './GridCol';
import docs from './Grid.docs.mdx';

const GridStory: Story = (args: GridProps) => (
  <Grid {...args}>
    <GridRow variant="thirds">
      <GridCol>
        <Text text="Thirds (thirds)" textWeight="bold" />
        <br />
        <Text text="Displays as Three Columns on largest devices only (thirds)" />
      </GridCol>
      <GridCol>
        <Text text="Stacks on small screens" />
      </GridCol>
      <GridCol>
        <Text italic={true} textSize="small" text="Class/Variant in row: thirds" />
      </GridCol>
    </GridRow>
    <GridRow variant="halves">
      <GridCol>
        <Text text="Halves (halves)" textWeight="bold" />
        <br />
        <Text text="Displays as Two Columns on largest devices only (halves)" />
        <br />
        <Text text="50%, stacks on small screens" />
        <br />
        <Text text="Previously called 'mobile-full'" />
      </GridCol>
      <GridCol>
        <Text italic={true} textSize="small" text="Class/Variant in row: halves" />
      </GridCol>
    </GridRow>
    <GridRow variant="halves-fixed">
      <GridCol>
        <Text text="Halves-Fixed (halves-fixed)" textWeight="bold" />
        <br />
        <Text text="Always 50%, never stacks" />
        <br />
        <Text text="Previously called 'half'" />
      </GridCol>
      <GridCol>
        <Text italic={true} textSize="small" text="Class/Variant in row: halves-fixed" />
      </GridCol>
    </GridRow>
    <GridRow variant="plain" classNames={['mt-30', 'mb-30']}>
      <GridCol>
        <Text text="Displays as One Column on all devices (plain)" textWeight="bold" />
        <br />
        <Text text="Page title / nav / breadcrumbs, etc" />
        <br />
        <Text italic={true} textSize="small" text="Class/Variant in row: plain" />
      </GridCol>
    </GridRow>
    <GridRow variant="center">
      <GridCol>
        <Text text="Center (center)" textWeight="bold" />
        <br />
        <Text text="Centered, filling most space on medium or small view" />
        <br />
        <Text italic={true} textSize="small" text="Class/Variant in row: center" />
      </GridCol>
    </GridRow>
    <GridRow variant="pillar">
      <GridCol>
        <Text text="Pillar (pillar)" textWeight="bold" />
        <br />
        <Text text="Third on full, Half on medium, and Full on small view" />
        <br />
        <Text italic={true} textSize="small" text="Class/Variant in row: pillar" />
      </GridCol>
    </GridRow>

    <GridRow variant="four-eight">
      <GridCol>
        <Text text="4-8 (four-eight)" textWeight="bold" />
        <br />
        <Text text="Proportional, stacks on small screens" />
      </GridCol>
      <GridCol>
        <Text italic={true} textSize="small" text="Class/Variant in row: four-eight" />
      </GridCol>
    </GridRow>
    <GridRow variant="eight-four">
      <GridCol>
        <Text text="8-4 (eight-four)" textWeight="bold" />
        <br />
        <Text text="Proportional, stacks on tablet screens" />
      </GridCol>
      <GridCol>
        <Text italic={true} textSize="small" text="Class/Variant in row: eight-four" />
      </GridCol>
    </GridRow>
    <GridRow variant="nine-three">
      <GridCol>
        <Text text="9-3 (nine-three)" textWeight="bold" />
        <br />
        <Text text="Proportional, stacks on small screens" />
      </GridCol>
      <GridCol>
        <Text italic={true} textSize="small" text="Class/Variant in row: nine-three" />
      </GridCol>
    </GridRow>
    <GridRow variant="quarters">
      <GridCol>
        <Text text="Quarters (quarter) " textWeight="bold" />
      </GridCol>
      <GridCol>
        <Text text="Stacks on small screens" />
      </GridCol>
      <GridCol>
        <Text textSize="small" text="Not a drinking game" />
      </GridCol>
      <GridCol>
        <Text italic={true} textSize="small" text="Class/Variant in row: quarters" />
      </GridCol>
    </GridRow>
  </Grid>
);

export const Primary = GridStory.bind({});
Primary.args = {
  classNames: ['show'],
};

export default {
  argTypes: {
    width: {
      control: { type: 'text' },
    },
  },
  component: GridStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Layout/Grid',
} as Meta;
