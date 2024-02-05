import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Button, ButtonProps, ButtonType, ButtonVariant } from './Button';
import { render, screen } from '@testing-library/react';
import { IconColors } from '../../assets/icons';
import { ICON_COLORS_V2 } from '../../assets/icons/icons-v2';
import { TextSize } from '../../atoms/text/Text';
import { IconNames } from '../../atoms/icon/Icon';

describe('Button Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;
  let pplsiEventId: string;

  beforeEach(() => {
    wrapper = shallow(<Button label="button" />);
    testId = 'test button';
    pplsiEventId = 'test prop';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the button the provided classNames', () => {
          const button = renderButton({ classNames });

          expect(button).toHaveClass(cn(classNames), { exact: false });
        });
      });

      describe('when provided variant prop', () => {
        const classNames = 'lsux-button--primary';

        it('gives the button the provided classNames', () => {
          const button = renderButton({ variant: 'primary' });

          expect(button).toHaveClass(classNames, { exact: false });
        });
      });

      describe('when is iconOnly button', () => {
        const classNames = 'lsux-button--icon-only';

        it('gives the button the provided classNames', () => {
          const button = renderButton({ iconRight: 'object_truck' });

          expect(button).toHaveClass(classNames, { exact: false });
        });
      });
    });

    describe('disabled', () => {
      let disabled: boolean;

      it('defaults to enabled', () => {
        expect(renderButton()).toBeEnabled();
      });

      describe('when true', () => {
        beforeEach(() => (disabled = true));

        it('disables the button', () => {
          expect(renderButton({ disabled })).toBeDisabled();
        });
      });

      describe('when false', () => {
        beforeEach(() => (disabled = false));

        it('the button is enabled', () => {
          expect(renderButton({ disabled })).toBeEnabled();
        });
      });
    });

    describe('iconLeft', () => {
      const iconLeftClass = `lsux-button--icon-left`;
      const iconLeftColor = `lsux-icon--R300`;
      let iconLeft: IconNames;

      describe('when "iconLeft" is present', () => {
        beforeEach(() => (iconLeft = 'edit_add_plus'));

        it(`gives the icon the ${iconLeftClass} class`, () => {
          renderButton({ iconLeft });

          const icon = screen.getByRole('img');
          expect(icon).toHaveClass(iconLeftClass);
        });

        it('passes the icon name to the icon', () => {
          renderButton({ iconLeft });

          const icon = screen.getByRole('img');
          expect(icon).toHaveAttribute('alt', iconLeft + '.');
        });
      });

      describe('when "iconLeft" is not present', () => {
        it('the button does not have the icon', () => {
          renderButton();

          const icon = screen.queryByRole('img');
          expect(icon).toBeNull();
        });
      });

      describe('when "iconLeft" has color', () => {
        it('the button does have a colored icon', () => {
          const iconColor = 'R300';
          renderButton({ iconColor, iconLeft });
          const icon = screen.getByRole('img');
          expect(icon).toHaveClass(iconLeftColor);
        });
      });
    });

    describe('iconOnly', () => {
      const iconOnlyClass = `lsux-button--icon-only`;
      let label: string;
      let iconLeft: IconNames, iconRight: IconNames;

      describe('when there is no "label"', () => {
        describe('when there is no "iconLeft" or "iconRight"', () => {
          it('does not give the button the "iconOnly" class', () => {
            expect(renderButton()).not.toHaveClass(iconOnlyClass);
          });
        });

        describe('when there is an "iconLeft"', () => {
          beforeEach(() => (iconLeft = 'object_truck'));

          it(`gives the button the ${iconOnlyClass} class`, () => {
            expect(renderButton({ iconLeft })).toHaveClass(iconOnlyClass, { exact: false });
          });
        });

        describe('when there is an "iconRight"', () => {
          beforeEach(() => (iconRight = 'object_truck'));

          it(`gives the button the ${iconOnlyClass} class`, () => {
            expect(renderButton({ iconRight })).toHaveClass(iconOnlyClass, { exact: false });
          });
        });
      });

      describe('when there is a label and a single icon', () => {
        beforeEach(() => {
          label = "Hi I'm testing";
          iconLeft = 'action_close';
        });

        it('does not give the button the icon-only class', () => {
          const button = renderButton({ iconLeft, label });

          expect(button).not.toHaveClass(iconOnlyClass);
        });
      });
    });

    describe('iconRight', () => {
      const iconRightClass = `lsux-button--icon-right`;
      let iconRight: IconNames;

      describe('when "iconRight" is present', () => {
        beforeEach(() => (iconRight = 'edit_add_plus'));

        it(`gives the icon the ${iconRightClass} class`, () => {
          renderButton({ iconRight });

          const icon = screen.getByRole('img');
          expect(icon).toHaveClass(iconRightClass);
        });

        it('passes the icon name to the icon', () => {
          renderButton({ iconRight });

          const icon = screen.getByRole('img');
          expect(icon).toHaveAttribute('alt', iconRight + '.');
        });
      });

      describe('when "iconRight" is not present', () => {
        it('the button does not have the icon', () => {
          renderButton();

          const icon = screen.queryByRole('img');
          expect(icon).toBeNull();
        });
      });
    });

    describe('label', () => {
      const label = 'my button label';

      it('is displayed when present', () => {
        renderButton({ label });

        expect(screen.getByText(label)).toBeVisible();
      });
    });

    describe('stretch', () => {
      const stretchClass = `lsux-button--stretch`;
      let stretch: boolean;

      describe('when stretch is true', () => {
        beforeEach(() => (stretch = true));

        it(`has the ${stretchClass} class`, () => {
          expect(renderButton({ stretch })).toHaveClass(stretchClass, { exact: false });
        });
      });

      describe('when stretch is false', () => {
        beforeEach(() => (stretch = false));

        it(`does not have the ${stretchClass} class`, () => {
          expect(renderButton({ stretch })).not.toHaveClass(stretchClass, { exact: false });
        });
      });
    });

    describe('textSize', () => {
      const textSizes: TextSize[] = ['body', 'description', 'tiny', 'small', 'medium', 'large', 'extra-large'];
      const label = 'My test button';
      let textSizeClass: string;

      describe('when there is a label', () => {
        it('defaults "textSize" to the "large"', () => {
          renderButton({ label });

          const labelEl = screen.getByText(label);
          expect(labelEl).toHaveClass('lsux-text--large');
        });

        function itAssignsTheRightClassForTextSize(textSize: TextSize) {
          describe(`when "textSize" is "${textSize}"`, () => {
            beforeEach(() => {
              textSizeClass = `lsux-text--${textSize}`;
            });

            it(`assigns the label the ${textSizeClass} class`, () => {
              renderButton({ label, textSize });

              const labelEl = screen.getByText(label);
              expect(labelEl).toHaveClass(textSizeClass);
            });
          });
        }

        textSizes.forEach((textSize) => itAssignsTheRightClassForTextSize(textSize));
      });
    });

    describe('type', () => {
      describe('when provided a valid button type', () => {
        const buttonTypes: ButtonType[] = ['button', 'reset', 'submit'];

        function itAssignsTheRightButtonType(type: ButtonType) {
          describe(`when the type is ${type}`, () => {
            it(`sets the type html attribute as ${type}`, () => {
              const button = renderButton({ type });

              expect(button).toHaveAttribute('type', type);
            });
          });
        }

        buttonTypes.forEach((type) => itAssignsTheRightButtonType(type));
      });

      describe('when not provided a button type', () => {
        it('defaults to the "button" type', () => {
          expect(renderButton()).toHaveAttribute('type', 'button');
        });
      });
    });

    describe('destructive', () => {
      describe('when destructive is true', () => {
        it('has the correct classname', () => {
          const button = renderButton({ destructive: true });

          expect(button).toHaveClass(`lsux-button--destructive`);
        });
      });
    });

    describe('variant', () => {
      const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary'];

      it('defaults to the primary variant', () => {
        const button = renderButton();

        expect(button).toHaveClass(`lsux-button--primary`);
      });

      // Backwards compatibility
      it(`defaults to 'secondary' when value is 'standard'`, () => {
        const button = renderButton({ variant: 'standard' });

        expect(button).toHaveClass(`lsux-button--secondary`, { exact: false });
      });

      // Backwards compatibility
      it(`defaults to 'tertiary' when value is 'link'`, () => {
        const button = renderButton({ variant: 'link' });

        expect(button).toHaveClass(`lsux-button--tertiary`, { exact: false });
      });

      // Backwards compatibility
      it(`defaults to 'primary' when value is 'destructive'`, () => {
        const button = renderButton({ variant: 'destructive' });

        expect(button).toHaveClass(`lsux-button--primary`, { exact: false });
      });

      // Backwards compatibility
      it(`sets 'destructive' to true when variant is 'destructive'`, () => {
        const button = renderButton({ variant: 'destructive' });

        expect(button).toHaveClass(`lsux-button--destructive`, { exact: false });
      });

      describe('when the button contains an icon', () => {
        const iconRight: IconNames = 'edit_add_plus';

        describe('variants with a dark background', () => {
          const darkVariants: ButtonVariant[] = ['primary'];

          function useAwhiteIconColor(variant: ButtonVariant) {
            const whiteIconClass = `lsux-icon--N00`;

            it('use a white icon color', () => {
              renderButton({ iconRight, variant });

              const img = screen.getByRole('img');
              expect(img).toHaveClass(whiteIconClass);
            });
          }

          darkVariants.forEach((variant) => useAwhiteIconColor(variant));
        });

        describe('variants with a light background', () => {
          const lightVariants: ButtonVariant[] = ['secondary', 'tertiary'];

          function usePurpleIconColor(variant: ButtonVariant) {
            const purpleIconClass = `lsux-icon-v2--BRAND200`;

            xit('use a purple icon color', () => {
              renderButton({ iconRight, variant });

              const img = screen.getByRole('img');
              const iconColorClasses = ICON_COLORS_V2.map((color) => `lsux-icon--${color}`);
              const containsIconColorClass = Object.values(img.classList).some((klass) =>
                iconColorClasses.includes(klass as IconColors),
              );
              expect(containsIconColorClass).toEqual(false);
            });
          }

          lightVariants.forEach((variant) => usePurpleIconColor(variant));
        });
      });

      function itAssignsTheRightButtonTypeClassForVariant(variant: ButtonVariant) {
        const buttonTypeClass = `lsux-button--${variant}`;

        describe(`when the variant is ${variant}`, () => {
          it(`assigns the ${buttonTypeClass} to the button`, () => {
            const button = renderButton({ variant });

            expect(button).toHaveClass(buttonTypeClass);
          });
        });
      }

      variants.forEach((variant) => itAssignsTheRightButtonTypeClassForVariant(variant));
    });

    describe('widthLong', () => {
      describe('when "widthLong" is provided', () => {
        const widthLong = `200px`;

        it('sets the button width to the provided value', () => {
          const button = renderButton({ widthLong });

          expect(button).toHaveStyle({ width: widthLong });
        });
      });
    });
  });

  describe('onClick', () => {
    const onClickSpy = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    it('when "onClick" is provided it is called when clicked', () => {
      render(<Button onClick={onClickSpy} data-testid={testId} />);
      const button = screen.getByTestId(testId);

      button.click();

      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLButtonElement>();

    it('provides a ref to the button', () => {
      expect(renderButton({ ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    const altText = 'My accessible button';

    it('allows html attributes to be passed to the underlying button element', () => {
      render(<Button alt={altText} data-testid={testId} />);

      const button = screen.getByTestId(testId);

      expect(button).toHaveAttribute('alt', altText);
    });

    it('allows pplsi event id data attribute to be passed to the underlying button element', () => {
      render(<Button pplsiEventId={pplsiEventId} data-testid={testId} />);

      const button = screen.getByTestId(testId);

      expect(button).toHaveAttribute('data-pplsi-event-id', pplsiEventId);
    });
  });

  const renderButton = (props: ButtonProps = {}): HTMLElement => {
    render(<Button {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
