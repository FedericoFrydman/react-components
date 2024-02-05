import { shallow, ShallowWrapper } from 'enzyme';
import { Badge } from './Badge';

describe('Badge Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Badge text="something" />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
