import { Ref, HTMLProps, forwardRef, ReactElement } from 'react';
import cn from 'classnames';

import { FormFieldProps } from '../form-field/FormField';

export interface FormProps extends Omit<HTMLProps<HTMLFormElement>, 'css'> {
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Controls of the form
   */
  children: ReactElement<FormFieldProps> | ReactElement<FormFieldProps>[];
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLFormElement>;
}

const FormComponent = ({ classNames = [], children, ...props }: FormProps, ref: FormProps['ref']) => {
  return (
    <form {...props} className={cn('lsux-form', classNames)} ref={ref}>
      {children}
    </form>
  );
};

/**
 * The Form component works as a wrapper for FormFields. It has all the properties and events of a HTML form so it can handle the validity state of the form and the onSubmit event.
 */

export const Form = forwardRef<HTMLFormElement, FormProps>(FormComponent);
