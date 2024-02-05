import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Input, InputProps, InputType, InputValidationStatus } from './Input';
import { render, screen } from '@testing-library/react';
import { IconNames } from '../../../components/atoms/icon/Icon';

describe('Input Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Input name={testId} />);
    testId = 'test input';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the input the provided classNames', () => {
          const input = renderInput({ classNames });

          expect(input).toHaveClass(classNames.join(' '), { exact: false });
        });
      });
    });

    describe('disabled', () => {
      let disabled: boolean;

      it('defaults to enabled', () => {
        expect(renderInput()).toBeEnabled();
      });

      describe('when true', () => {
        beforeEach(() => (disabled = true));

        it('disables the input', () => {
          expect(renderInput({ disabled })).toBeDisabled();
        });
      });

      describe('when false', () => {
        beforeEach(() => (disabled = false));

        it('the input is enabled', () => {
          expect(renderInput({ disabled })).toBeEnabled();
        });
      });
    });

    describe('icon', () => {
      const iconClass = `lsux-input__icon`;
      const iconDefaultColor = 'BRAND200';
      const iconColorClass = `lsux-icon--${iconDefaultColor}`;
      let iconName: IconNames;

      describe('when "icon" is present', () => {
        beforeEach(() => (iconName = 'edit_add_plus'));

        it(`gives the icon the ${iconClass} class`, () => {
          renderInput({ icon: iconName });

          const icon = screen.getByRole('img');
          expect(icon).toHaveClass(iconClass);
        });

        it(`defaults the icon the color to ${iconColorClass} and gives the icon the class ${iconColorClass} class`, () => {
          renderInput({ icon: iconName });

          const icon = screen.getByRole('img');
          expect(icon).toHaveClass(iconColorClass);
        });

        it('passes the icon name to the icon', () => {
          renderInput({ icon: iconName });

          const icon = screen.getByRole('img');
          expect(icon).toHaveAttribute('alt', iconName + '.');
        });
      });

      describe('when "icon" is not present', () => {
        it('the input does not have the icon', () => {
          renderInput();

          const icon = screen.queryByRole('img');
          expect(icon).toBeNull();
        });
      });
    });

    describe('type', () => {
      describe('when provided a valid input type', () => {
        const inputTypes: InputType[] = [
          'color',
          'date',
          'datetime-local',
          'email',
          'hidden',
          'month',
          'number',
          'password',
          'range',
          'search',
          'tel',
          'text',
          'time',
          'url',
          'week',
          'currency',
        ];

        function itAssignsTheRightInputType(type: InputType) {
          describe(`when the type is ${type}`, () => {
            it(`sets the type html attribute as ${type}`, () => {
              const input = renderInput({ type });

              if (type === 'currency') type = 'text';

              expect(input).toHaveAttribute('type', type);
            });
          });
        }

        inputTypes.forEach((type) => itAssignsTheRightInputType(type));
      });

      describe('when not provided an input type', () => {
        it('defaults to the "text" type', () => {
          expect(renderInput()).toHaveAttribute('type', 'text');
        });
      });
    });

    describe('status', () => {
      const variants: InputValidationStatus[] = ['valid', 'warning', 'invalid'];

      it('defaults to no status', () => {
        const input = renderInput();

        expect(input).not.toHaveClass(`lsux-input-container__input--`);
      });

      function itAssignsTheClassForStatus(status: InputValidationStatus) {
        const inputStatusClass = `lsux-input-container__input--${status}`;

        describe(`when the status is ${status}`, () => {
          it(`assigns the ${inputStatusClass} to the input`, () => {
            const nput = renderInput({ status });

            expect(nput).toHaveClass(inputStatusClass);
          });
        });
      }

      variants.forEach((variant) => itAssignsTheClassForStatus(variant));
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLInputElement>();

    it('provides a ref to the input', () => {
      expect(renderInput({ ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    const altText = 'My accessible input';

    it('allows html attributes to be passed to the underlying input element', () => {
      render(<Input name={testId} alt={altText} data-testid={testId} />);

      const input = screen.getByTestId(testId);

      expect(input).toHaveAttribute('alt', altText);
    });
  });

  const renderInput = (props: InputProps = {}): HTMLElement => {
    render(<Input {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
