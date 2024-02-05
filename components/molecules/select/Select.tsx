import { forwardRef, ReactNode, Ref } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import cn from 'classnames';

import { Icon } from '../../../components/atoms/icon/Icon';
import { InputValidationStatus } from '../input/Input';

import './select.scss';

export const SelectGroup = (props: RadixSelect.SelectGroupProps) => <RadixSelect.Group {...props} />;
export const SelectLabel = (props: RadixSelect.SelectLabelProps) => (
  <RadixSelect.Label className="lsux-select-item--label" {...props} />
);
export const SelectSeparator = (props: RadixSelect.SelectSeparatorProps) => (
  <RadixSelect.Separator className="lsux-select-item--separator" {...props} />
);

export interface SelectItemProps extends RadixSelect.SelectItemProps {
  classNames?: cn.Argument;
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, classNames, ...props }, forwardedRef) => {
    let textValue = props.textValue || '';
    if (typeof children === 'string' && children.length > 0) {
      textValue = children;
    }

    return (
      <RadixSelect.Item
        className={cn('lsux-select-item', classNames)}
        disabled={props.disabled}
        value={props.value}
        textValue={textValue}
        ref={forwardedRef}
        {...props}
      >
        <RadixSelect.ItemIndicator className="lsux-select-item--indicator">
          <Icon name="interface_check" />
        </RadixSelect.ItemIndicator>
        <RadixSelect.ItemText>{textValue}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  },
);
SelectItem.displayName = 'SelectItem';

export interface SelectProps extends RadixSelect.SelectProps {
  /**
   * Value of the select component.
   */
  value?: string;
  /**
   * Triggers error | warning | success styles on the component. Important for accessibility.
   * @type {InputValidationStatus}
   * @default undefined
   */
  status?: InputValidationStatus;
  /**
   * Placeholder text to display.
   * @default 'Select an option'
   */
  placeholder?: string;
  /**
   * Items to render in the select component.
   * @description This expects the `SelectItem` component.
   */
  children?: ReactNode;
  /**
   * Stretch the select component to fill the width of the parent container.
   * @default false
   */
  stretch?: boolean;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLButtonElement>;
}

const SelectComponent = (
  {
    children,
    value,
    placeholder = 'Select an option',
    status,
    stretch = false,
    classNames = [],
    ...props
  }: SelectProps,
  ref: SelectProps['ref'],
) => {
  const classSelectTrigger = 'lsux-select__trigger';
  const cnSelectTrigger = cn({
    [`${classSelectTrigger}`]: true,
    [`${classSelectTrigger}--${status}`]: status,
    [`${classSelectTrigger}--stretch`]: stretch,
  });

  return (
    <RadixSelect.Root onValueChange={props.onValueChange} value={value} disabled={props.disabled} {...props}>
      <RadixSelect.Trigger
        ref={ref}
        aria-label={props.name}
        className={cn(cnSelectTrigger, classNames)}
        placeholder={placeholder}
      >
        <div className="lsux-select__trigger__row">
          <RadixSelect.Value className="lsux-select__trigger__value" placeholder={placeholder} />
          <RadixSelect.Icon className="lsux-select__trigger__icon">
            <Icon name="arrow_caret_down_md" />
          </RadixSelect.Icon>
        </div>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="lsux-select__content">
          <RadixSelect.ScrollUpButton className="lsux-select__content__button">
            <Icon name="arrow_caret_up_md" />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="lsux-select__viewport">{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="lsux-select__content__button">
            <Icon name="arrow_caret_down_md" />
          </RadixSelect.ScrollDownButton>
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(SelectComponent);
