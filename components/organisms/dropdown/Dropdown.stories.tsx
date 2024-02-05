import { Fragment, useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Container } from '../../../components/atoms/container/Container';
import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownItem,
  DropdownItemWithSubMenu,
  DropdownLabel,
  DropdownProps,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
} from './Dropdown';
import docs from './Dropdown.docs.mdx';

const openAlert = (ev: React.MouseEvent<HTMLDivElement>) => {
  ev.preventDefault();
  alert('Action button pressed');
};

const DropdownStory: Story<DropdownProps> = (args: DropdownProps) => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState('one');

  return (
    <Container classNames={['m-3']}>
      <Dropdown.Root>
        <Dropdown.Trigger />
        <Dropdown.Portal>
          <DropdownLabel>Actions</DropdownLabel>
          <DropdownItem onClick={openAlert}>
            New Tab
            <div className="right-slot">⌘+T</div>
          </DropdownItem>
          <DropdownItem onClick={openAlert}>
            New Window
            <div className="right-slot">⌘+N</div>
          </DropdownItem>
          <DropdownItem disabled>New Private Window</DropdownItem>

          <DropdownSeparator />
          <DropdownLabel>Preferences</DropdownLabel>
          <DropdownCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            Show Bookmarks <div className="right-slot">⌘+B</div>
          </DropdownCheckboxItem>
          <DropdownCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            Show Full URLs
          </DropdownCheckboxItem>

          <DropdownSeparator />

          <DropdownLabel>Radio Buttons</DropdownLabel>
          <DropdownRadioGroup value={person} onValueChange={setPerson}>
            <DropdownRadioItem value="one">Option One</DropdownRadioItem>
            <DropdownRadioItem value="two">Option Two</DropdownRadioItem>
          </DropdownRadioGroup>
          <DropdownSeparator />
          <DropdownItemWithSubMenu
            subMenu={
              <Fragment>
                <DropdownItem>Create Shortcut…</DropdownItem>
                <DropdownItem>Name Window…</DropdownItem>
                <DropdownSeparator />
                <DropdownItem>Developer Tools</DropdownItem>
              </Fragment>
            }
          >
            Demo
          </DropdownItemWithSubMenu>
        </Dropdown.Portal>
      </Dropdown.Root>
    </Container>
  );
};

export const Default = DropdownStory.bind({});

export default {
  argTypes: {},
  component: DropdownStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Dropdown',
} as Meta;
