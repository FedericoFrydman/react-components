import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { FormField, FormFieldProps } from './FormField';
import { Input } from '../../molecules/input/Input';
import { createRef } from 'react';

describe('FormField Component', () => {
  const testId = 'test-form-field';
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FormField id="input" label="text" data-testid={testId}>
        <Input />
      </FormField>,
    );
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the component the provided classNames', () => {
          const formField = renderFormField({ classNames });

          expect(formField).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the FormField', () => {
      expect(renderFormField({ ref })).toEqual(ref.current);
    });
  });

  const renderFormField = (props: FormFieldProps = {}): HTMLElement => {
    render(
      <FormField {...props} data-testid={testId}>
        <Input />
      </FormField>,
    );

    return screen.getByTestId(testId);
  };
});
