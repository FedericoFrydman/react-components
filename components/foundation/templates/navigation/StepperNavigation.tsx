import { Card, Container, Heading, GridRow, Step, Text, useMedia } from '../../../..';

export const StepperNavigationDemo = () => {
  const isSmall = useMedia(['(max-width: 1023px)'], [true], false);
  return (
    <Container classNames={['StepperForm']}>
      <Container classNames={['p-6']}>
        <Heading text="Wizard" as="T28" classNames={['mb-3']} />
      </Container>
      <Container classNames={['p-8']} background={isSmall ? 'white' : 'light-gray'}>
        <Step
          activeIndex={1}
          clickable={[]}
          completed={[0]}
          counterPosition={'right'}
          stepNames={['One', 'Two', 'Three']}
          onClick={null}
          background="light-gray"
        />
      </Container>
      <Container classNames={['p-8']} background="white">
        <GridRow>
          <Card id={'card1'} onClick={null} className="card">
            <Card.Content>
              <Card.Title>Step Two</Card.Title>
              <Text text={'This is the content of the form step.'} />
            </Card.Content>
          </Card>
        </GridRow>
      </Container>
    </Container>
  );
};
