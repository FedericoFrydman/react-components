import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './radio-group.scss';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../../components/atoms/text/Text';

interface Option {
  name: string;
  price: number;
  value: string;
}

export interface RadioGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick' | 'css'> {
  /**
   * An event to handle option selection.
   */
  onClick?: (option: Option) => void;
  /**
   * A list of options for RadioGroup.
   */
  options?: Option[];
  /**
   * title props to show label.
   */
  title?: string;
  /**
   * Value props to show selected option
   */
  value?: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const RadioGroupComponent = (
  { title, options, value, onClick, classNames = [], ...props }: RadioGroupProps,
  ref: RadioGroupProps['ref'],
) => {
  const classCheckbox = 'lsux-checkbox';
  const classOption = 'lsux-option';

  return (
    <div {...props} className={cn('lsux-rbg-container', 'checkbox-section', classNames)} ref={ref}>
      {title && <Heading as="T20" className="lsux-checkbox-title" text={title} />}
      <div className={`${classCheckbox}-options-section`}>
        <ul className={`${classCheckbox}-option-div`}>
          {options &&
            options?.length &&
            options.map((option, index) => (
              <li className={`${classOption}-li`} key={option.name} onClick={() => onClick && onClick(option)}>
                <div className={`${classOption}-div`}>
                  <div className={`${classOption}-subdiv`}>
                    <label htmlFor={'helper-radio-' + index}>
                      <Text textWeight="normal" text={option.name} classNames={['mb-1']} />
                      <Text textWeight="semibold" text={`$${option.price}/mo`} />
                    </label>
                  </div>
                  <div className="lsux-checked-icon">
                    {value === option.value ? (
                      <Icon name="warning_circle_check" color={'P200'} size="medium" />
                    ) : (
                      <Icon name="warning_circle" color={'N700'} size="medium" />
                    )}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * A radio button is a quick way to extract a single coded answer from our users by presenting multiple possibilities and allowing only one option to be chosen.
 */

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(RadioGroupComponent);
