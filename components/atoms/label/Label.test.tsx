import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Label, LabelProps, LabelSize } from './Label';

describe('Text Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Label text="some text" classNames={['custom--class']} />);
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

    describe('labelSize', () => {
      const labelSizes: LabelSize[] = ['tiny', 'small', 'medium', 'large'];
      const text = 'Test my label size';
      let labelSizeClass: string;

      describe('when "labelSize" is not defined', () => {
        it('defaults "labelSize" to the "body"', () => {
          renderLabel({ text });

          const labelEl = screen.getByText(text);
          expect(labelEl).toHaveClass('lsux-text--medium');
        });

        function itAssignsTheRightClassForTextSize(labelSize: LabelSize) {
          describe(`when "labelSize" is "${labelSize}"`, () => {
            beforeEach(() => {
              labelSizeClass = `lsux-text--${labelSize}`;
            });

            it(`assigns the element the ${labelSizeClass} class`, () => {
              renderLabel({ labelSize, text });

              const textEl = screen.getByText(text);
              expect(textEl).toHaveClass(labelSizeClass);
            });
          });
        }

        labelSizes.forEach((labelSize) => itAssignsTheRightClassForTextSize(labelSize));
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLParagraphElement>();

    it('provides a ref to the text', () => {
      expect(renderLabel({ ref })).toEqual(ref.current);
    });
  });

  const renderLabel = (props: LabelProps = {}): HTMLElement => {
    render(<Label {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
