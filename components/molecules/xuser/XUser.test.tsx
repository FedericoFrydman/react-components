import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { XUser, XUserProps } from './XUser';

describe('XUser Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<XUser />);
    testId = 'test-xuser';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the XUser the provided classNames', () => {
          const XUser = renderXUser({ classNames });

          expect(XUser).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the xuser', () => {
      expect(renderXUser({ ref })).toEqual(ref.current);
    });
  });

  const renderXUser = (props: XUserProps = {}): HTMLElement => {
    render(<XUser {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
