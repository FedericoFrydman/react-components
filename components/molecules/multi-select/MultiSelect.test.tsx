import { shallow, ShallowWrapper } from 'enzyme';
import { MultiSelect, SelectOption } from './MultiSelect';

const options: SelectOption[] = [
  {
    label: 'United States',
    value: 'unitedstates',
  },
  {
    disabled: true,
    label: 'Germany',
    value: 'germany',
  },
  {
    label: 'France',
    value: 'france',
  },
  {
    disabled: true,
    label: 'Costa Rica',
    value: 'costarica',
  },
  {
    label: 'England',
    value: 'england',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Iceland',
    value: 'iceland',
  },
  {
    label: 'Scotland',
    value: 'scotland',
  },
];

describe('MultiSelect Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<MultiSelect id="multiselect" options={options} placeholder="Select a country" />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
