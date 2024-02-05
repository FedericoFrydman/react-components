import { Container, GridCol, GridRow, Heading, Navigation, NavigationItem, Text } from '../../../..';

export const PaneNavigationDemo = () => {
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
      iconName: 'nav_profile',
      name: 'Profile',
    },
    {
      data: 'payments',
      divider: true,
      iconName: 'interface_credit_card_01',
      name: 'Payments',
    },
    {
      data: 'security',
      divider: true,
      iconName: 'interface_lock',
      name: 'Security',
    },
    {
      data: 'resources',
      divider: true,
      iconName: 'interface_book',
      name: 'Resources',
    },
    {
      data: 'requests',
      divider: true,
      iconName: 'nav_requests',
      name: 'Requests',
    },
    {
      data: 'inbox',
      divider: true,
      iconName: 'nav_inbox',
      name: 'Inbox',
    },
    {
      data: 'files',
      divider: true,
      iconName: 'nav_files',
      name: 'Files',
    },
  ];

  return (
    <Container classNames={['p-2']}>
      <GridRow>
        <Container>
          <Navigation
            items={navigationItems}
            activeIndex={0}
            onClick={null}
            navigationType={'pane'}
            isOpen={true}
            onClose={null}
            disabledItems={[]}
            classNames={['pt-7']}
          />
        </Container>
        <Container classNames={['p-8']} flexbox>
          <GridCol>
            <Heading text="Home" />
            <Text as="p" classNames={['pt-3']}>
              Content goes here
            </Text>
          </GridCol>
        </Container>
      </GridRow>
    </Container>
  );
};
