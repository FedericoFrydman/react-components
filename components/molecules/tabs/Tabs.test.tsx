import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Tabs, TabsProps, TabsVariant } from './Tabs';

describe('Tabs Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test-tabs';
    wrapper = shallow(<Tabs activeIndex={2} tabNames={['One', 'Two', 'Three']} variant={'bar'} />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the tabs', () => {
      expect(renderTabs({ ref })).toEqual(ref.current);
    });
  });

  describe('variant', () => {
    const variants: TabsVariant[] = ['pills', 'bar', 'tabs'];

    it(`defaults to 'pills'`, () => {
      const tabs = renderTabs();

      expect(tabs).toHaveClass(`lsux-tab--pills`, { exact: false });
    });

    function itAssignsTheRightClassForVariant(variant: TabsVariant) {
      const tabsTypeClass = `lsux-tab--${variant}`;

      describe(`when the variant is ${variant}`, () => {
        it(`assigns the ${tabsTypeClass} to the tabs`, () => {
          const tabs = renderTabs({ variant });

          expect(tabs).toHaveClass(tabsTypeClass);
        });
      });
    }

    variants.forEach((variant) => itAssignsTheRightClassForVariant(variant));
  });

  describe('stretch', () => {
    const stretchClass = `lsux-tab--stretch`;
    let stretch: boolean;

    describe('when stretch is true', () => {
      beforeEach(() => (stretch = true));

      it(`has the ${stretchClass} class`, () => {
        expect(renderTabs({ stretch })).toHaveClass(stretchClass, { exact: false });
      });
    });

    describe('when stretch is false', () => {
      beforeEach(() => (stretch = false));

      it(`does not have the ${stretchClass} class`, () => {
        expect(renderTabs({ stretch })).not.toHaveClass(stretchClass, { exact: false });
      });
    });
  });

  const renderTabs = (props: Omit<TabsProps, 'tabNames' | 'activeIndex'> = {}): HTMLElement => {
    render(<Tabs {...props} activeIndex={2} tabNames={['One', 'Two', 'Three']} data-testid={testId} />);
    return screen.getByTestId(testId);
  };
});
