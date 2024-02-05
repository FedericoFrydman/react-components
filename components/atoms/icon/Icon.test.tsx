import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { Icon, IconAndBadgeSizes, IconProps } from './Icon';
import { ICON_NAMES } from '../../../components/assets/icons';
import { excludedCategories } from '../../atoms/icon/Icon';

describe('Icon Component', () => {
  let baseClass: string;
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    baseClass = 'lsux-icon';
    testId = 'test icon';
    wrapper = shallow(<Icon name="action_add" />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('name', () => {
      describe('if name is in excluded category', () => {
        const monoIconNames = ICON_NAMES.filter((n) => excludedCategories.includes(n.split('_')[0]));

        function expectMonoClass(iconName: string) {
          it('does contain mono class', () => {
            const icon = renderIcon({ name: iconName });
            expect(icon).toHaveClass(`${baseClass}--mono`, { exact: false });
          });
        }

        monoIconNames.forEach((name) => {
          expectMonoClass(name);
        });
      });

      describe('if name is not in excluded category', () => {
        const nonMonoIconNames = ICON_NAMES.filter((n) => !excludedCategories.includes(n.split('_')[0]));

        function expectNonMonoClass(iconName: string) {
          it('does not contain mono class', () => {
            const icon = renderIcon({ name: iconName });
            expect(icon).not.toHaveClass(`${baseClass}--mono`, { exact: false });
          });
        }

        nonMonoIconNames.forEach((name) => {
          expectNonMonoClass(name);
        });
      });
    });

    describe('noTransition', () => {
      describe('when noTransition is true', () => {
        it('does contain no transition class', () => {
          const icon = renderIcon({ name: 'action_add', noTransition: true });
          expect(icon).toHaveClass(`${baseClass}--no-transition`, { exact: false });
        });
      });

      describe('when noTransition is not present', () => {
        it('does not contain the no transition class', () => {
          const icon = renderIcon({ name: 'action_add' });
          expect(icon).not.toHaveClass(`${baseClass}--no-transition`, { exact: false });
        });
      });
    });

    describe('size', () => {
      const iconSizes: IconAndBadgeSizes[] = ['xsmall', 'small', 'medium-small', 'medium', 'large', 'xlarge'];
      const iconName = 'calendar';
      let iconSizeClass: string;

      describe('when size is present', () => {
        it('defaults "size" to the "medium"', () => {
          const iconEl = renderIcon({ name: iconName });
          expect(iconEl).toHaveClass(`${baseClass}--medium`);
        });

        function itAssignsTheRightClassForIconSize(iconSize: IconAndBadgeSizes) {
          describe(`when "size" is "${iconSize}"`, () => {
            beforeEach(() => {
              iconSizeClass = `${baseClass}--${iconSize}`;
            });

            it(`assigns the label the ${iconSizeClass} class`, () => {
              const iconEl = renderIcon({ name: iconName, size: iconSize });
              expect(iconEl).toHaveClass(iconSizeClass);
            });
          });
        }

        iconSizes.forEach((iconSize) => itAssignsTheRightClassForIconSize(iconSize));
      });
    });

    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the icon the provided classNames', () => {
          const icon = renderIcon({ classNames, name: 'action_add' });

          expect(icon).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('onClick', () => {
      describe('when onClick is present', () => {
        const onClickSpy = jest.fn();

        beforeEach(() => jest.clearAllMocks());

        it('adds the clickable class to the icon', () => {
          const icon = renderIcon({ name: 'action_add', onClick: onClickSpy });
          const onClickClass = `${baseClass}--clickable`;

          expect(icon).toHaveClass(onClickClass, { exact: false });
        });

        it('calls the onClick handler when pressed', () => {
          const icon = renderIcon({ name: 'calendar', onClick: onClickSpy });

          icon.click();

          expect(onClickSpy).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLImageElement>();

    it('provides a ref to the text', () => {
      expect(renderIcon({ name: 'calendar', ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    const altText = 'My accessible button';

    it('allows html attributes to be passed to the underlying button element', () => {
      renderIcon({ alt: altText, name: 'calendar' } as IconProps);

      const icon = screen.getByTestId(testId);

      expect(icon).toHaveAttribute('alt', altText);
    });
  });

  const renderIcon = (props: IconProps): HTMLElement => {
    render(<Icon {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
