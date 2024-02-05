import { shallow, ShallowWrapper } from 'enzyme';
import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownItem,
  DropdownItemWithSubMenu,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
} from './Dropdown';
import { Fragment } from 'react';

describe('Dropdown Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const openAlert = (ev: React.MouseEvent<HTMLDivElement>) => {
      ev.preventDefault();
      alert('Action button pressed');
    };

    wrapper = shallow(
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
          <DropdownCheckboxItem checked={false} onCheckedChange={() => null}>
            Show Bookmarks <div className="right-slot">⌘+B</div>
          </DropdownCheckboxItem>
          <DropdownCheckboxItem checked={true} onCheckedChange={() => null}>
            Show Full URLs
          </DropdownCheckboxItem>

          <DropdownSeparator />

          <DropdownLabel>Radio Buttons</DropdownLabel>
          <DropdownRadioGroup value="one" onValueChange={() => null}>
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
      </Dropdown.Root>,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
