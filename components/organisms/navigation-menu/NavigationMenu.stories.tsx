/**
 *  TODO: Create a story for DesktopNavigationMenu
 */

import { Story, Meta } from '@storybook/react';
// import docs from './Navigation.docs.mdx';
import { NavigationMenu, NavMenuProps, NavMenuSection } from './NavigationMenu';

const NavMenuStory: Story<NavMenuProps> = (args: NavMenuProps) => <NavigationMenu {...args} />;

const exampleNavSections: NavMenuSection[] = [
  {
    id: 'personal-family',
    items: [
      { href: '#', id: 'coverage-pricing', label: 'Coverage & Pricing' },
      { href: '#', id: 'add-on-coverage', label: 'Add-On Coverage' },
      { href: '#', id: 'faq', label: 'FAQ' },
    ],
    label: 'Personal & Family',
  },
  {
    id: 'run-business',
    items: [
      { href: '#', id: 'coverage-pricing', label: 'Run Business #1' },
      { href: '#', id: 'add-on-coverage', label: 'Run Business #2' },
      { href: '#', id: 'faq', label: 'Run Business #3' },
    ],
    label: 'Run a Business',
  },
  {
    id: 'start-business',
    items: [
      { href: '#', id: 'coverage-pricing', label: 'Business Coverage & Pricing' },
      { href: '#', id: 'add-on-coverage', label: 'Business Add-On Coverage' },
      { href: '#', id: 'faq', label: 'Business FAQ' },
    ],
    label: 'Start a Business',
  },
  {
    id: 'commercial-drivers',
    items: [
      { href: '#', id: 'coverage-pricing', label: 'Commercial Coverage & Pricing' },
      { href: '#', id: 'add-on-coverage', label: 'Commercial Add-On Coverage' },
      { href: '#', id: 'faq', label: 'Commercial FAQ' },
    ],
    label: 'Commercial Drivers',
  },
];

export const NavMenuDesktop = NavMenuStory.bind({});
NavMenuDesktop.args = {
  sections: exampleNavSections,
};

export default {
  argTypes: {},
  component: NavMenuStory,
  // parameters: {
  //   docs: { page: docs },
  // },
  title: ' Navigation/NavigationMenu',
} as Meta;
