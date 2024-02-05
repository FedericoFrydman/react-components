import { shallow, ShallowWrapper } from 'enzyme';
import { Alert } from './Alert';

describe('Alert Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Alert dismissible severity="error" icon="alert_warning">
        Actionable
      </Alert>,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
