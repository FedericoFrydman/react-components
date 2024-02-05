import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Footer, FooterProps } from './Footer';

describe('Footer Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
    testId = 'test-footer';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the image the provided classNames', () => {
          const image = renderImage({ classNames });

          expect(image).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the image', () => {
      expect(renderImage({ ref })).toEqual(ref.current);
    });
  });

  const renderImage = (props: FooterProps = {}): HTMLElement => {
    render(<Footer {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
