import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { AppTitle, AppTitleProps } from './AppTitle';

describe('AppTitle Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<AppTitle text="some text" classNames={['custom--class']} />);
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
          const text = renderLabel({ classNames });

          expect(text).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('text', () => {
      const text = 'testing text';

      it('is displayed when present', () => {
        renderLabel({ text });

        expect(screen.getByText(text)).toBeVisible();
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLParagraphElement>();

    it('provides a ref to the text', () => {
      expect(renderLabel({ ref })).toEqual(ref.current);
    });
  });

  const renderLabel = (props: AppTitleProps = {}): HTMLElement => {
    render(<AppTitle {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
