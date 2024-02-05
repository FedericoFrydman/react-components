import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { InputValidationStatus } from '../../molecules/input/Input';
import './text-area.scss';

export type TextAreaResize = 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit';

export interface TextAreaProps extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'css'> {
  /**
   * Triggers error | warning | success styles on the component. Important for accessibility.
   */
  status?: InputValidationStatus;
  /**
   * Resize attribute on textarea.
   * @default none
   */
  resize?: TextAreaResize;
  /**
   * Custom classes for component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLTextAreaElement>;
}

const TextAreaComponent = (
  { status, classNames = [], resize = 'both', ...props }: TextAreaProps,
  ref: TextAreaProps['ref'],
) => {
  const classTextArea = 'lsux-text-area';
  const cnTextArea = cn(
    {
      [`${classTextArea}`]: true,
      [`${classTextArea}--${status}`]: status,
      [`${classTextArea}--resize-${resize}`]: resize,
      [`pt-4`]: true,
    },
    classNames,
  );

  return <textarea {...props} ref={ref} aria-invalid={status === 'invalid'} className={cnTextArea} />;
};

/**
 * It is a type of input that allows multiple lines of text.
 */

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(TextAreaComponent);
