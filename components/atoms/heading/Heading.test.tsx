import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { Heading, HeadingAs, HeadingProps } from './Heading';

describe('Heading Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Heading text="some text" />);
    testId = 'test-heading';
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('headingSize', () => {
    const headingSizes: HeadingAs[] = ['T95', 'T76', 'T61', 'T49', 'T39', 'T31', 'T28', 'T26', 'T20', 'T16', 'T14'];
    const text = 'Test my heading size';

    describe('when "headingSize" is defined', () => {
      function itAssignsTheRightClassForHeadingSize(as: HeadingAs) {
        const asClass = `lsux-heading--${as.toLowerCase()}`;
        describe(`when "as" is "${as}"`, () => {
          it(`assigns the element the ${asClass} class`, () => {
            renderHeading({ as, text });

            const textEl = screen.getByText(text);
            expect(textEl).toHaveClass(asClass);
          });
        });
      }

      headingSizes.forEach((headingSize) => itAssignsTheRightClassForHeadingSize(headingSize));
    });

    describe('when titleHeight is defined', () => {
      const text = 'testing text';
      it('is present on the heading element', () => {
        renderHeading({ text, titleHeight: '10px' });
        expect(screen.getByText(text)).toContainHTML('height: 10px;');
      });
    });
  });

  const renderHeading = (props: HeadingProps = { text: 'test' }): HTMLElement => {
    render(<Heading {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
