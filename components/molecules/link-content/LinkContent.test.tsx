import { shallow, ShallowWrapper } from 'enzyme';
import { LinkContent } from './LinkContent';

describe('LinkContent Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<LinkContent text="some text" />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
