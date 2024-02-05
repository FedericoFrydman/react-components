import { shallow, ShallowWrapper } from 'enzyme';
import { Select, SelectItem, SelectItemProps } from './Select';

const options: SelectItemProps[] = [
  {
    textValue: 'United States',
    value: 'US',
  },
  {
    textValue: 'Germany',
    value: 'DE',
  },
  {
    textValue: 'France',
    value: 'FR',
  },
];

describe('Select Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Select placeholder="Select a country">
        {options.map((c) => (
          <SelectItem key={c.value} {...c} />
        ))}
      </Select>,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
