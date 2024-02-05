import { shallow, ShallowWrapper } from 'enzyme';
import { Radio } from './Radio';

describe('Radio Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test-radio';
    wrapper = shallow(<Radio name={testId} />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
