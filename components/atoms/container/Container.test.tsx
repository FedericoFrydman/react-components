import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { Container, ContainerProps } from './Container';

describe('Container Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Container Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />);
    testId = 'test-container';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the text the provided classNames', () => {
          const text = renderContainer({ classNames });

          expect(text).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the spinner', () => {
      expect(renderContainer({ ref })).toEqual(ref.current);
    });
  });

  const renderContainer = (props: ContainerProps = {}): HTMLElement => {
    render(<Container {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
