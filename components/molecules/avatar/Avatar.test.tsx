import { shallow, ShallowWrapper } from 'enzyme';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Avatar avatarType="user-icon" />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
