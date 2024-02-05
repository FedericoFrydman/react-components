import { useState } from 'react';
import {
  Card,
  Checkbox,
  Container,
  FormField,
  Input,
  Heading,
  GridCol,
  Navigation,
  NavigationItem,
  Text,
} from '../../../..';
import './settings.scss';

export const SettingsExample = () => {
  const navigationItems: NavigationItem[] = [
    {
      data: 'home',
      divider: true,
      iconName: 'nav_home',
      name: 'Home',
    },
    {
      data: 'profile',
      divider: true,
      iconName: 'action_user_single',
      name: 'Profile',
    },
    {
      data: 'security',
      divider: true,
      iconName: 'object_lock',
      name: 'Security',
    },
    {
      data: 'payments',
      divider: true,
      iconName: 'payment_credit_card',
      name: 'Payments',
    },
    {
      data: 'notifications',
      divider: true,
      iconName: 'alert_notification',
      name: 'Notifications',
    },
  ];

  const CheckboxRow = ({ name, label }: { name: string; label: string }) => {
    const [checked, setChecked] = useState(false);
    return (
      <Container flexbox justifyContent="space-between" classNames={['py-3']}>
        <Text text={label} />
        <Checkbox name={name} checked={checked} disabled={false} onChange={() => setChecked(!checked)} />
      </Container>
    );
  };

  return (
    <Container classNames={['Settings']}>
      <Container classNames={['Settings--controls-menu']}>
        <Navigation
          items={navigationItems}
          activeIndex={0}
          onClick={() => null}
          navigationType={'pane'}
          isOpen={true}
          onClose={null}
          disabledItems={[]}
          classNames={['pt-7']}
        />
      </Container>
      <Container classNames={['Settings--controls-container', 'p-8']} flexbox>
        <GridCol width={600}>
          <Heading text="Settings" classNames={['mb-5']} />
          <Container style={{ width: '100%' }} classNames={['']}>
            <Heading text="Section One" as="T16" classNames={['mb-4']} />
            <Card classNames={['card', 'mb-5']}>
              <Card.Content>
                <CheckboxRow name="Setting One" label="Setting One" />
                <CheckboxRow name="Setting Two" label="Setting Two" />
                <CheckboxRow name="Setting Three" label="Setting Three" />
              </Card.Content>
            </Card>
            <Heading text="Section Two" as="T16" classNames={['mb-4']} />
            <Card classNames={['card']}>
              <Card.Content>
                <FormField id="name" label="Name" classNames={['mt-0']}>
                  <Input name="name" placeholder="First Name" />
                </FormField>
                <FormField id="lastName" label="Last Name">
                  <Input name="lastName" placeholder="Last Name" />
                </FormField>
              </Card.Content>
            </Card>
          </Container>
        </GridCol>
      </Container>
    </Container>
  );
};
