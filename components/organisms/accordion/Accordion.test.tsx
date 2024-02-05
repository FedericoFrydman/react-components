import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Accordion, AccordionProps } from './Accordion';
import { render, screen } from '@testing-library/react';

describe('Accordion Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Accordion title="Test Accordion" />);
    testId = 'test accordion';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the button the provided classNames', () => {
          const accordion = renderAccordion({ classNames });

          expect(accordion).toHaveClass(classNames.join(' '), { exact: false });
        });
      });
    });

    describe('title', () => {
      const title = 'test accordion';

      it('is displayed when present', () => {
        renderAccordion({ title });

        expect(screen.getByText(title)).toBeVisible();
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the accordion', () => {
      expect(renderAccordion({ ref })).toEqual(ref.current);
    });
  });

  const renderAccordion = (props: AccordionProps = {}): HTMLElement => {
    render(<Accordion {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
