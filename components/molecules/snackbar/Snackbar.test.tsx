import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Snackbar, SnackbarProps } from './Snackbar';

describe('Snackbar Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test-snackbar';
    wrapper = shallow(
      <Snackbar
        autoHideDuration={5000}
        bold={false}
        message="Actionable"
        title="This is a description"
        icon="alert_warning"
        severity="error"
      />,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the switch the provided classNames', () => {
          const switchElem = renderSnackbar({ classNames });

          expect(switchElem).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the snackbar', () => {
      expect(renderSnackbar({ ref })).toEqual(ref.current);
    });
  });

  const renderSnackbar = (props: SnackbarProps = {}): HTMLElement => {
    render(<Snackbar {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
