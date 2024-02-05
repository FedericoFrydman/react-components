import { shallow, ShallowWrapper } from 'enzyme';
import { Form } from './Form';
import { Input } from '../../molecules/input/Input';
import { FormField } from '../../organisms/form-field/FormField';

describe('Form Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Form>
        <FormField id="input" label="text">
          <Input />
        </FormField>
      </Form>,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
