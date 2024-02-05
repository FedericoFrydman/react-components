import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Text, TextProps, TextSize, TextWeight } from './Text';

describe('Text Component', () => {
  const baseClass = `lsux-text`;
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Text text="some text" classNames={['custom--class']} />);
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
          const text = renderText({ classNames });

          expect(text).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('text', () => {
      const text = 'testing text';

      it('is displayed when present', () => {
        renderText({ text });

        expect(screen.getByText(text)).toBeVisible();
      });
    });

    describe('children', () => {
      const childrenText = 'testing children';
      const children = <span>{childrenText}</span>;
      const childrenHTML = shallow(children).html();

      it('is renders the children when passed', () => {
        const wrapper = renderText({ children });
        expect(wrapper).toContainHTML(childrenHTML);
      });
    });

    describe('textHeight', () => {
      const text = 'testing text';
      describe('when it is defined', () => {
        it('is present on the text element', () => {
          renderText({ text, textHeight: '10px' });
          expect(screen.getByText(text)).toContainHTML('height: 10px;');
        });
      });
    });

    describe('textSize', () => {
      const textSizes: TextSize[] = ['body', 'description', 'tiny', 'small', 'medium', 'large', 'extra-large'];
      const text = 'Test my text size';
      let textSizeClass: string;

      describe('when "textSize" is not defined', () => {
        it('defaults "textSize" to the "body"', () => {
          renderText({ text });

          const labelEl = screen.getByText(text);
          expect(labelEl).toHaveClass(`${baseClass}--medium`);
        });

        function itAssignsTheRightClassForTextSize(textSize: TextSize) {
          describe(`when "textSize" is "${textSize}"`, () => {
            beforeEach(() => {
              textSizeClass = `${baseClass}--${textSize}`;
            });

            it(`assigns the element the ${textSizeClass} class`, () => {
              renderText({ text, textSize });

              const textEl = screen.getByText(text);
              expect(textEl).toHaveClass(textSizeClass);
            });
          });
        }

        textSizes.forEach((textSize) => itAssignsTheRightClassForTextSize(textSize));
      });
    });

    describe('textWeight', () => {
      const textWeights: TextWeight[] = ['normal', 'semibold', 'bold'];
      const text = 'Test my text weight';
      let textWeightClass: string;

      describe('when "textWeight" is not defined', () => {
        it('defaults "textWeight" to the "normal"', () => {
          renderText({ text });

          const labelEl = screen.getByText(text);
          expect(labelEl).toHaveClass(`${baseClass}--normal`);
        });

        function itAssignsTheRightClassForTextWeight(textWeight: TextWeight) {
          describe(`when "textWeight" is "${textWeight}"`, () => {
            beforeEach(() => {
              textWeightClass = `${baseClass}--${textWeight}`;
            });

            it(`assigns the element the ${textWeightClass} class`, () => {
              renderText({ text, textWeight });

              const textEl = screen.getByText(text);
              expect(textEl).toHaveClass(textWeightClass);
            });
          });
        }

        textWeights.forEach((textWeight) => itAssignsTheRightClassForTextWeight(textWeight));
      });
    });

    describe('bold', () => {
      const boldClass = `${baseClass}--bold`;
      let bold: boolean;

      describe('when bold is true', () => {
        beforeEach(() => (bold = true));

        it(`has the ${boldClass} class`, () => {
          expect(renderText({ bold })).toHaveClass(boldClass, { exact: false });
        });
      });

      describe('when bold is false', () => {
        beforeEach(() => (bold = false));

        it(`does not have the ${boldClass} class`, () => {
          expect(renderText({ bold })).not.toHaveClass(boldClass, { exact: false });
        });
      });
    });

    describe('semiBold', () => {
      const semiBoldClass = `${baseClass}--semibold`;
      let semiBold: boolean;

      describe('when semiBold is true', () => {
        beforeEach(() => (semiBold = true));

        it(`has the ${semiBold} class`, () => {
          expect(renderText({ semiBold })).toHaveClass(semiBoldClass, { exact: false });
        });
      });

      describe('when semiBold is false', () => {
        beforeEach(() => (semiBold = false));

        it(`does not have the ${semiBold} class`, () => {
          expect(renderText({ semiBold })).not.toHaveClass(semiBoldClass, { exact: false });
        });
      });
    });

    describe('italic', () => {
      const italicClass = `${baseClass}--italic`;
      let italic: boolean;

      describe('when italic is true', () => {
        beforeEach(() => (italic = true));

        it(`has the ${italicClass} class`, () => {
          expect(renderText({ italic })).toHaveClass(italicClass, { exact: false });
        });
      });

      describe('when italic is false', () => {
        beforeEach(() => (italic = false));

        it(`does not have the ${italicClass} class`, () => {
          expect(renderText({ italic })).not.toHaveClass(italicClass, { exact: false });
        });
      });
    });

    describe('strike', () => {
      const strikeClass = `${baseClass}--strike`;
      let strike: boolean;

      describe('when strike is true', () => {
        beforeEach(() => (strike = true));

        it(`has the ${strikeClass} class`, () => {
          expect(renderText({ strike })).toHaveClass(strikeClass, { exact: false });
        });
      });

      describe('when strike is false', () => {
        beforeEach(() => (strike = false));

        it(`does not have the ${strikeClass} class`, () => {
          expect(renderText({ strike })).not.toHaveClass(strikeClass, { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLParagraphElement>();

    it('provides a ref to the text', () => {
      expect(renderText({ ref })).toEqual(ref.current);
    });
  });

  const renderText = (props: TextProps = {}): HTMLElement => {
    render(<Text {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
