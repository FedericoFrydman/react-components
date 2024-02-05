import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Link, LinkProps } from './Link';

describe('Link Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;
  let pplsiEventId: string;

  beforeEach(() => {
    wrapper = shallow(<Link text="button" />);
    testId = 'test link';
    pplsiEventId = 'test prop';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the text the provided classNames', () => {
          const text = renderLink({ classNames });

          expect(text).toHaveClass(cn(classNames), { exact: false });
        });
      });

      describe('when decoration is true', () => {
        const className = 'lsux-link--decoration';

        it('gives the text the provided classNames', () => {
          const text = renderLink({ decoration: true });

          expect(text).toHaveClass(cn(className), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLAnchorElement>();

    it('provides a ref to the spinner', () => {
      expect(renderLink({ ref })).toEqual(ref.current);
    });
  });

  const renderLink = (props: Omit<LinkProps, 'text'>): HTMLAnchorElement => {
    render(<Link {...props} text="Button" data-testid={testId} />);

    return screen.getByTestId(testId);
  };

  describe('unspecified html attributes', () => {
    it('allows pplsi event id data attribute to be passed to the underlying link element', () => {
      render(<Link pplsiEventId={pplsiEventId} data-testid={testId} text="button" />);

      const link = screen.getByTestId(testId);

      expect(link).toHaveAttribute('data-pplsi-event-id', pplsiEventId);
    });
  });
});
