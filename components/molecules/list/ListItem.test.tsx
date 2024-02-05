import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { ListItem, ListItemProps } from './ListItem';

describe('ListItem Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test list item';
    wrapper = shallow(<ListItem>{testId}</ListItem>);
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the list the provided classNames', () => {
          const listItem = renderListItem({ classNames });

          expect(listItem).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    // describe('noBorder', () => {
    //   it('should contain border class when false', () => {
    //     const listItem = renderListItem();
    //     expect(listItem).toHaveClass('lsux-list--border');
    //   });
    //   it('should not contain border class when true', () => {
    //     const list = renderListItem({ noBorder: true });
    //     expect(list).not.toHaveClass('lsux-list--border');
    //   });
    // });
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const renderListItem = (props: ListItemProps = {}): HTMLElement => {
    render(<ListItem {...props} data-testid={testId} />);

    return screen.queryByTestId(testId);
  };
});
