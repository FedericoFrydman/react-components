import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TextArea, TextAreaProps, TextAreaResize } from './TextArea';
import { render, screen } from '@testing-library/react';
import { InputValidationStatus } from 'components/molecules/input/Input';

describe('TextArea Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<TextArea id="text-area" rows={5} />);
    testId = 'test textarea';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the textarea the provided classNames', () => {
          const textarea = renderTextArea({ classNames });

          expect(textarea).toHaveClass(classNames.join(' '), { exact: false });
        });
      });
    });

    describe('resize', () => {
      const classResize = `lsux-text-area--resize-`;
      const defaultResize: TextAreaResize = 'both';
      const resizeValues: TextAreaResize[] = ['none', 'both', 'horizontal', 'vertical', 'initial', 'inherit'];

      it('defaults to both', () => {
        const textarea = renderTextArea();

        expect(textarea).toHaveClass(classResize + defaultResize, { exact: false });
      });

      function itAssignsResizeAttributeForValue(value: TextAreaResize) {
        describe(`when the value is ${value}`, () => {
          it(`assigns the ${value} resize class to the element`, () => {
            const textarea = renderTextArea({ resize: value });

            expect(textarea).toHaveClass(classResize + value, { exact: false });
          });
        });
      }

      resizeValues.forEach((value) => itAssignsResizeAttributeForValue(value));
    });

    describe('disabled', () => {
      let disabled: boolean;

      it('defaults to enabled', () => {
        expect(renderTextArea()).toBeEnabled();
      });

      describe('when true', () => {
        beforeEach(() => (disabled = true));

        it('disables the textarea', () => {
          expect(renderTextArea({ disabled })).toBeDisabled();
        });
      });

      describe('when false', () => {
        beforeEach(() => (disabled = false));

        it('the textarea is enabled', () => {
          expect(renderTextArea({ disabled })).toBeEnabled();
        });
      });
    });

    describe('status', () => {
      const variants: InputValidationStatus[] = ['valid', 'warning', 'invalid'];

      it('defaults to no status', () => {
        const textarea = renderTextArea();

        expect(textarea).not.toHaveClass(`lsux-text-area-container--`);
      });

      function itAssignsTheClassForStatus(status: InputValidationStatus) {
        const textAreaStatusClass = `lsux-text-area--${status}`;

        describe(`when the status is ${status}`, () => {
          it(`assigns the ${textAreaStatusClass} to the textarea`, () => {
            const textarea = renderTextArea({ status });

            expect(textarea).toHaveClass(textAreaStatusClass);
          });
        });
      }

      variants.forEach((variant) => itAssignsTheClassForStatus(variant));
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLTextAreaElement>();

    it('provides a ref to the textarea', () => {
      expect(renderTextArea({ ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    const altText = 'My accessible textarea';

    it('allows html attributes to be passed to the underlying textarea element', () => {
      render(<TextArea name={testId} alt={altText} data-testid={testId} />);

      const textarea = screen.getByTestId(testId);

      expect(textarea).toHaveAttribute('alt', altText);
    });
  });

  const renderTextArea = (props: TextAreaProps = {}): HTMLElement => {
    render(<TextArea {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
