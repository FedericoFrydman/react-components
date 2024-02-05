import { forwardRef, useState } from 'react';
import { Card, Container, List, ListItemInput, ListProps, Text } from '../../../';

const ListTestComponent = ({ ...props }: ListProps) => {
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
    />
  ));

  return (
    <Container classNames={['m-5']} style={{ maxWidth: 340 }}>
      <Card background="white">
        <Card.Content background="white">
          <Card.Title>Plan Name</Card.Title>
          <Text text="Example plan description text" />
        </Card.Content>
        <Card.Content background="light-gray">
          <Card.Title classNames={['mb-3']}>Coverage Add-ons</Card.Title>
          <List background="white" {...props}>
            {checkboxItems}
          </List>
        </Card.Content>
      </Card>
    </Container>
  );
};

export const ListTest = forwardRef<HTMLDivElement, ListProps>(ListTestComponent);
