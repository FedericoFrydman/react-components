import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Title, TitleProps } from './Title';

describe('Title Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Title text="some text" />);
    testId = 'test-text';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the text the provided classNames', () => {
          const text = renderTitle({ classNames });

          expect(text).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('text', () => {
      const text = 'testing text';

      it('is displayed when present', () => {
        renderTitle({ text });

        expect(screen.getByText(text)).toBeVisible();
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLParagraphElement>();

    it('provides a ref to the text', () => {
      expect(renderTitle({ ref })).toEqual(ref.current);
    });
  });

  const renderTitle = (props: TitleProps = {}): HTMLElement => {
    render(<Title {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
