import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Switch, SwitchProps } from './Switch';

describe('Switch Component', () => {
  const testId = 'test-switch';
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Switch />);
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the switch the provided classNames', () => {
          const switchElem = renderSwitch({ classNames });

          expect(switchElem).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLButtonElement>();

    it('provides a ref to the switch', () => {
      expect(renderSwitch({ ref })).toEqual(ref.current);
    });
  });

  const renderSwitch = (props: SwitchProps = {}): HTMLElement => {
    render(<Switch {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
