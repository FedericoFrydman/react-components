import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { ProfilePictureProps } from './ProfilePicture';
import { ProfilePictureExample } from './ProfilePictureExample';

describe('ProfilePicture Component', () => {
  const testId = 'test-profile-picture';
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ProfilePictureExample />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the component the provided classNames', () => {
          const picture = renderProfilePicture({ classNames });

          expect(picture).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  const renderProfilePicture = (props: ProfilePictureProps = {}): HTMLElement => {
    render(<ProfilePictureExample {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
