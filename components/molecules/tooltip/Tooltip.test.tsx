import { shallow, ShallowWrapper } from 'enzyme';
import { Tooltip } from './Tooltip';
import { Button } from '../../molecules/button/Button';

describe('Tooltip Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Tooltip theme="light" animation="scale" duration={500} arrow placement="top" text="Some text">
        <Button label="Hover" />
      </Tooltip>,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
