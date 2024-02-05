import { HTMLProps, ReactNode, useRef, useMemo, useState } from 'react';
import cn from 'classnames';

import { beforeWrite, ModifierArguments, Options } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { useOutsideClick } from '../../foundation/utilities';

import { Badge } from '../badge/Badge';
import { Checkbox } from '../checkbox/Checkbox';
import { Container } from '../../atoms/container/Container';
import { Icon } from '../../atoms/icon/Icon';
import { InputValidationStatus } from '../input/Input';
import { LinkContent } from '../link-content/LinkContent';
import { Text } from '../../atoms/text/Text';

import './multi-select.scss';

export type DisplayOption = 'chips' | 'text';

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
  hidden?: boolean;
};

export interface MultiSelectProps extends Omit<HTMLProps<HTMLSelectElement>, 'label' | 'css'> {
  /**
   * Visually and functionally disable the button.
   * @default false
   */
  disabled?: boolean;
  /**
  /**
   * Visually and functionally hidding the button.
   * @default false
   */
  hidden?: boolean;
  /**
   * Triggers error | warning | success styles on the component. Important for accessibility.
   */
  status?: InputValidationStatus;
  /**
   * Children component
   */
  children?: ReactNode;
  placeholder?: string;
  placeholderValue?: string;
  value?: string;
  /**
   * Options to select from.
   */
  options?: SelectOption[];
  /**
   * Options selected.
   */
  optionsSelected?: SelectOption[];
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Options to display the options as chips or text
   */
  displayFormat?: DisplayOption;
  /**
   * Triggers
   */
  onChange?: (e: any) => void;
}

const MultiSelectComponent = ({
  status,
  options = [],
  optionsSelected,
  displayFormat,
  placeholder,
  placeholderValue,
  disabled,
  hidden,
  onChange,
  classNames = [],
  value,
  ...props
}: MultiSelectProps) => {
  let selectRef: any = useRef();
  const classContainer = 'lsux-select-container';
  const classSelect = `${classContainer}__select`;
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [showPopper, setShowPopper] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const selectedValue = options?.filter((op) => op.value === value);
  const [selectedOption, setSelectedOption] = useState<SelectOption>(
    selectedValue.length
      ? selectedValue[0]
      : {
          label: placeholder || options[0]?.label,
          value: placeholderValue,
        },
  );

  const [selectedList, setSelectedList] = useState<SelectOption[]>(optionsSelected || []);
  const cnSelect = cn(
    {
      [`${classSelect}`]: true,
      [`${classSelect}--open`]: showPopper,
      [`${classSelect}--multi`]: selectedList.length,
      [`${classSelect}--disabled`]: disabled,
      [`${classSelect}--hidden`]: hidden,
    },
    classNames,
  );
  const popperModifiers = useMemo(
    () => [
      {
        effect({ state }: ModifierArguments<Options>) {
          state.elements.popper.style.minWidth = `${(state.elements.reference as HTMLElement).offsetWidth}px`;
        },
        enabled: true,
        fn({ state }: ModifierArguments<Options>) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`;
        },
        name: 'sameWidth',
        phase: beforeWrite,
        requires: ['computeStyles'],
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
      {
        enabled: true,
        name: 'preventOverflow',
      },
    ],
    [],
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: popperModifiers,
    placement: 'bottom',
  });

  useOutsideClick(
    popperElement,
    (event: MouseEvent) => {
      if (displayFormat) {
        if (!popperElement.contains(event.target)) {
          setShowPopper(false);
        }
      } else {
        setShowPopper(false);
      }
    },
    referenceElement,
  );

  const renderPopperElement = () => {
    const classNames = ['select-items--wrapper', 'py-3'];
    return (
      <div ref={setPopperElement} style={styles.popper} className={cn(classNames)} {...attributes.popper}>
        {options.map(option)}
      </div>
    );
  };

  const optionChip = (option: SelectOption, key: any) => (
    <Badge key={key} text={option.label} variant="default" circle={true} classNames={['selected-items--chips']} />
  );

  const checkSelectedList = (option: SelectOption) => {
    if (selectedList.find((op) => op.value === option.value)) {
      setSelectedList(selectedList.filter((op) => op.value != option.value));
    } else {
      setSelectedList([...selectedList, option]);
    }
  };

  const option = (option: SelectOption) => {
    if (displayFormat === 'text') {
      return (
        <Checkbox
          key={option.value}
          classNames={['selected-items--checkbox']}
          name={option.label}
          rightLabel={option.label}
          checked={selectedList.find((op) => op.value === option.value) != undefined}
          onChange={() => checkSelectedList(option)}
        />
      );
    } else {
      return (
        <LinkContent
          linkContentStyle="menu"
          key={option.value}
          value={option.value}
          text={option.label}
          disabled={option.disabled}
          hidden={option.hidden}
          onClick={(e) => {
            if (displayFormat === 'chips') {
              checkSelectedList(option);
            } else {
              setSelectedOption(option);
            }
          }}
        />
      );
    }
  };

  return (
    <div className={cn(cnSelect, classNames)}>
      <select
        {...props}
        hidden={true}
        ref={(input) => (selectRef = input)}
        onChange={onChange}
        value={displayFormat ? selectedList.map((op) => op.value.toString()).join(',') : selectedOption.value}
      >
        {options &&
          options.map(function (item: SelectOption) {
            return (
              <option
                onChange={() => {
                  setSelectedOption(item);
                }}
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </option>
            );
          })}
        {selectedList.length && (
          <option value={selectedList.map((op) => op.value.toString()).join(',')}>
            {selectedList.map((op) => op.value.toString()).join(',')}
          </option>
        )}
      </select>
      <div hidden={true} className="select--nav_dropdown_arrow_down">
        <Icon name="arrow_caret_down_md" />
      </div>
      <>
        <Container
          onClick={() => {
            setShowPopper(!showPopper);
            selectRef.focus();
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          classNames={['lsux-input-container', isFocused && 'lsux-input-container--focused']}
          ref={setReferenceElement}
          tabIndex={0}
        >
          <Container classNames={['lsux-input-container__input', `lsux-input-container__input--${status}`]}>
            <>
              {displayFormat && selectedList.length ? (
                displayFormat === 'chips' ? (
                  selectedList.map(optionChip)
                ) : (
                  <Text textSize={'large'} text={selectedList.map((op) => op.label).join(', ')} />
                )
              ) : (
                <Text textSize={'large'} text={selectedOption.label} />
              )}
            </>
          </Container>
          <Icon
            name={showPopper ? 'arrow_caret_up_md' : 'arrow_caret_down_md'}
            classNames={['lsux-select-button--icon-right']}
          />
        </Container>
        {showPopper && renderPopperElement()}
      </>
    </div>
  );
};

/**
 * A select dropdown is a form field that allows users to choose one of the multiple options from a menu. An example being the expiration date for a users credit card.
 */

export const MultiSelect = MultiSelectComponent;
