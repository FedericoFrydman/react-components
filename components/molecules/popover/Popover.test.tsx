import { shallow, ShallowWrapper } from 'enzyme';
import { Popover } from './Popover';
import { Text } from '../../atoms/text/Text';

describe('Popover Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Popover arrowSide="top" shadowSide="bottom">
        <Text text="I am a text child" as="p" />
      </Popover>,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
