import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Spinner, SpinnerColor, SpinnerProps, SpinnerSize } from './Spinner';

describe('Spinner Component', () => {
  const baseClass = `lsux-spinner`;
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
    testId = 'test-spinner';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the text the provided classNames', () => {
          const text = renderSpinner({ classNames });

          expect(text).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('spinnerSize', () => {
      const spinnerSizes: SpinnerSize[] = ['small', 'medium', 'large', 'xlarge'];
      let spinnerSizeClass: string;

      describe('when "spinnerSize" is not defined', () => {
        it('defaults "spinnerSize" to the "medium"', () => {
          const spinnerEl = renderSpinner({ spinnerSize: 'medium' });

          expect(spinnerEl).toHaveClass(`${baseClass}--medium`);
        });

        function itAssignsTheRightClassForSpinnerSize(spinnerSize: SpinnerSize) {
          describe(`when "spinnerSize" is "${spinnerSize}"`, () => {
            beforeEach(() => {
              spinnerSizeClass = `${baseClass}--${spinnerSize}`;
            });

            it(`assigns the element the ${baseClass}--${spinnerSize} class`, () => {
              const spinnerEl = renderSpinner({ spinnerSize });

              expect(spinnerEl).toHaveClass(spinnerSizeClass);
            });
          });
        }

        spinnerSizes.forEach((spinnerSize) => itAssignsTheRightClassForSpinnerSize(spinnerSize));
      });
    });

    describe('color', () => {
      const colors: SpinnerColor[] = ['brand', 'neutral'];
      let spinnerColorClass: string;

      describe('when "color" is not defined', () => {
        it('defaults "color" to the "neutral"', () => {
          const spinnerEl = renderSpinner();

          expect(spinnerEl).toHaveClass(`${baseClass}--neutral`);
        });
      });

      function itAssignsTheRightClassForSpinnerColor(color: SpinnerColor) {
        describe(`when "color" is "${color}"`, () => {
          beforeEach(() => {
            spinnerColorClass = `${baseClass}--${color}`;
          });

          it(`assigns the element the ${baseClass}--${color} class`, () => {
            const spinnerEl = renderSpinner({ color });

            expect(spinnerEl).toHaveClass(spinnerColorClass);
          });
        });
      }

      colors.forEach((color) => itAssignsTheRightClassForSpinnerColor(color));
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the spinner', () => {
      expect(renderSpinner({ ref })).toEqual(ref.current);
    });
  });

  const renderSpinner = (props: SpinnerProps = {}): HTMLElement => {
    render(<Spinner {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
