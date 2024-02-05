import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { Tree, TreeProps } from './Tree';

describe('Tree Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test-tree';
    wrapper = shallow(
      <Tree
        allowSelect={true}
        root={{
          children: [
            { id: 1, name: 'Nathan' },
            {
              children: [
                { id: 3, name: 'One' },
                { id: 4, name: 'Two' },
              ],
              id: 2,
              name: 'Jackie',
            },
            { id: 4, name: 'Leslie' },
          ],
          id: 0,
          name: 'Arnold Blinn',
        }}
      />,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the Tree the provided classNames', () => {
          const tree = renderTree({ classNames });

          expect(tree).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the snackbar', () => {
      expect(renderTree({ ref })).toEqual(ref.current);
    });
  });

  const renderTree = (props: Omit<TreeProps, 'root'> = {}): HTMLElement => {
    render(
      <Tree
        {...props}
        root={{
          children: [
            { id: 1, name: 'Nathan' },
            {
              children: [
                { id: 3, name: 'One' },
                { id: 4, name: 'Two' },
              ],
              id: 2,
              name: 'Jackie',
            },
            { id: 4, name: 'Leslie' },
          ],
          id: 0,
          name: 'Arnold Blinn',
        }}
        data-testid={testId}
      />,
    );

    return screen.getByTestId(testId);
  };
});
