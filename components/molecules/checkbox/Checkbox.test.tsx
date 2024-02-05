import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { Checkbox, CheckboxProps, CheckboxVariant } from './Checkbox';

describe('Checkbox Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Checkbox name="checkbox-test" />);
    testId = 'test checkbox';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the checkbox the provided classNames', () => {
          const checkbox = renderCheckboxContainer({ classNames });

          expect(checkbox).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('checked', () => {
      describe('when checked is provided', () => {
        it('gives the checkbox the checked property', () => {
          const checkbox = renderCheckbox({ checked: true });

          expect(checkbox).toHaveProperty('checked');
        });
      });
    });

    describe('leftLabel', () => {
      const label = 'my button label';

      it('is displayed when present', () => {
        renderCheckbox({ leftLabel: label });

        expect(screen.getByText(label)).toBeVisible();
      });
    });

    describe('rightLabel', () => {
      const label = 'my button label';

      it('is displayed when present', () => {
        renderCheckbox({ rightLabel: label });

        expect(screen.getByText(label)).toBeVisible();
      });
    });

    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the checkbox the provided classNames', () => {
          const checkbox = renderCheckboxContainer({ classNames });

          expect(checkbox).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('left label', () => {
      const leftLabel = 'my checkbox leftLabel';

      it('is displayed when present', () => {
        renderCheckbox({ leftLabel });

        expect(screen.getByText(leftLabel)).toBeVisible();
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLInputElement>();

    it('provides a ref to the checkbox', () => {
      expect(renderCheckbox({ ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    const altText = 'My accessible checkbox';

    it('allows html attributes to be passed to the underlying checkbox element', () => {
      render(<Checkbox name={testId} alt={altText} data-testid={testId} />);

      const checkbox = screen.getByTestId(testId);

      expect(checkbox).toHaveAttribute('alt', altText);
    });
  });

  describe('variant', () => {
    const variants: CheckboxVariant[] = ['filled', 'outlined'];

    it(`defaults to 'filled'`, () => {
      const checkbox = renderCheckboxIcon();

      expect(checkbox).toHaveClass(`lsux-cb-container__cb--filled`, { exact: false });
    });

    function itAssignsTheRightClassForVariant(variant: CheckboxVariant) {
      const checkboxTypeClass = `lsux-cb-container__cb--${variant}`;

      describe(`when the variant is ${variant}`, () => {
        it(`assigns the ${checkboxTypeClass} to the Checkbox`, () => {
          const checkbox = renderCheckboxIcon({ checked: true, variant });

          expect(checkbox).toHaveClass(checkboxTypeClass);
        });
      });
    }

    variants.forEach((variant) => itAssignsTheRightClassForVariant(variant));
  });

  const renderCheckboxContainer = (props: Omit<CheckboxProps, 'name'> = {}): HTMLElement => {
    render(<Checkbox {...props} name={testId} />);

    return screen.queryByTestId('lsux-cb-container');
  };

  const renderCheckbox = (props: Omit<CheckboxProps, 'name'> = {}): HTMLElement => {
    render(<Checkbox {...props} name={testId} data-testid={testId} />);

    return screen.getByTestId(testId);
  };

  const renderCheckboxIcon = (props: Omit<CheckboxProps, 'name'> = {}): HTMLElement => {
    render(<Checkbox {...props} name={testId} data-testid={testId} />);

    return screen.getByTestId('lsux-cb-container__icon');
  };
});
