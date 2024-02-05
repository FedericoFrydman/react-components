import { shallow, ShallowWrapper } from 'enzyme';
import { Loader } from './Loader';

describe('Loader Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Loader
        loaderState={{
          alertAppearance: 'default',
          alertBold: false,
          alertIcon: '',
          callback: function (): void {
            throw new Error('Function not implemented.');
          },
          loading: false,
          message: '',
          modalLabel: '',
          modalTitle: '',
          spinnerBlocking: false,
          spinnerSize: 'small',
        }}
      />,
    );
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
