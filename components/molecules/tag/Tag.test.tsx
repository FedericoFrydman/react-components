import { shallow, ShallowWrapper } from 'enzyme';
import { Tag } from './Tag';

describe('Tag Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Tag text="something" />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
