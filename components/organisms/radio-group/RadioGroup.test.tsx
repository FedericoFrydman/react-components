import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { shallow, ShallowWrapper } from 'enzyme';
import { RadioGroup, RadioGroupProps } from './RadioGroup';

describe('RadioGroup Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test-rbg';
    wrapper = shallow(
      <RadioGroup
        onClick={() => alert('Radio button was pressed')}
        options={[
          {
            name: 'Trial Defense',
            price: 14.95,
            value: 'Trial Defense',
          },

          { name: 'Gun Owner', price: 14.95, value: 'Gun Owner' },
          { name: 'Ride Share', price: 14.95, value: 'Ride Share' },
          {
            name: 'Home Business',
            price: 14.95,
            value: 'Home Business',
          },
          {
            name: 'Business Builder',
            price: 14.95,
            value: 'Business Builder',
          },
        ]}
        title="Plan add-ons"
        value="Home Business"
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

        it('gives the RadioGroup the provided classNames', () => {
          const rbgElem = renderRadioGroup({ classNames });

          expect(rbgElem).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the snackbar', () => {
      expect(renderRadioGroup({ ref })).toEqual(ref.current);
    });
  });

  const renderRadioGroup = (props: RadioGroupProps = {}): HTMLElement => {
    render(<RadioGroup {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
