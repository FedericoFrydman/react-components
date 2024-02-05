import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Step, StepProps } from './Step';

describe('Step Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test-rbg';
    wrapper = shallow(
      <Step
        activeIndex={1}
        clickable={[0]}
        completed={[0]}
        counterPosition={'right'}
        stepNames={['One', 'Two', 'Three']}
        onClick={null}
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

        it('gives the RadioGroup the provided classNames', () => {
          const step = renderRadioGroup({ classNames });

          expect(step).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the snackbar', () => {
      expect(renderRadioGroup({ ref })).toEqual(ref.current);
    });
  });

  const renderRadioGroup = (props: Omit<StepProps, 'activeIndex' | 'onClick'> = {}): HTMLElement => {
    render(
      <Step
        {...props}
        activeIndex={1}
        clickable={[0]}
        completed={[0]}
        counterPosition={'right'}
        stepNames={['One', 'Two', 'Three']}
        onClick={null}
        data-testid={testId}
      />,
    );

    return screen.getByTestId(testId);
  };
});
