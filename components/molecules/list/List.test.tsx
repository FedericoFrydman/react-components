import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { ListProps } from './List';
import { ListTest } from './ListTest';

describe('List Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test list';
    wrapper = shallow(<ListTest />);
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the list the provided classNames', () => {
          const list = renderList({ classNames });

          expect(list).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('noBorder', () => {
      it('should contain border class when false', () => {
        const list = renderList();
        expect(list).toHaveClass('lsux-list--border');
      });
      it('should not contain border class when true', () => {
        const list = renderList({ noBorder: true });
        expect(list).not.toHaveClass('lsux-list--border');
      });
    });
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const renderList = (props: ListProps = {}): HTMLElement => {
    render(<ListTest {...props} data-testid={testId} />);

    return screen.queryByTestId(testId);
  };
});
