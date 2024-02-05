import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { Divider, DividerProps } from './Divider';

describe('Divider Component', () => {
  const classDivider = 'lsux-divider';
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Divider label="or" />);
    testId = 'test-divider';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('no tint is set', () => {
        const className = `${classDivider}--tint-light`;

        it('defaults tint to light', () => {
          const Divider = renderDivider();

          expect(Divider).toHaveClass(className);
        });
      });
      describe('tint is set', () => {
        const className = `${classDivider}--tint-medium`;

        it('sets the tint class to the selected tint', () => {
          const Divider = renderDivider({ tint: 'medium' });

          expect(Divider).toHaveClass(className);
        });
      });
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the Divider the provided classNames', () => {
          const Divider = renderDivider({ classNames });

          expect(Divider).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('label', () => {
      describe('when label is provided', () => {
        const label = 'test';
        const dividerTextClass = `${classDivider}__text`;

        it('gives the Divider the text className', () => {
          const Divider = renderDivider({ label });

          expect(Divider).toHaveClass(dividerTextClass, { exact: false });
        });
      });

      describe('when label is not provided', () => {
        const label = '';
        const dividerLineClass = `${classDivider}__line`;

        it('gives the Divider the line className', () => {
          const Divider = renderDivider({ label });

          expect(Divider).toHaveClass(dividerLineClass, { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the divider', () => {
      expect(renderDivider({ ref })).toEqual(ref.current);
    });
  });

  const renderDivider = (props: DividerProps = {}): HTMLElement => {
    render(<Divider {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
