import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { ListItemInput, ListItemInputProps } from './ListItemInput';
import { CheckboxProps } from '../checkbox/Checkbox';

describe('ListItemInput Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test list item';
    wrapper = shallow(
      <ListItemInput.Checkbox
        inputProps={{ name: testId }}
        primary={`$10.00/mo`}
        secondary="Lorem ipsum dolor sit amet"
      />,
    );
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the component the provided classNames', () => {
          const listItemInput = renderListItemInput({ classNames });

          expect(listItemInput).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const renderListItemInput = (props: ListItemInputProps<CheckboxProps> = {}): HTMLElement => {
    render(<ListItemInput.Checkbox {...props} data-testid={testId} />);

    return screen.queryByTestId(testId);
  };
});
