import { FC, forwardRef, Ref } from 'react';
import cn from 'classnames';

import './list-item-input.scss';
import { Radio, RadioProps } from '../radio/Radio';
import { Checkbox, CheckboxProps } from '../checkbox/Checkbox';
import { ListItem, ListItemProps, ListItemText } from './ListItem';
import { Switch, SwitchProps } from '../switch/Switch';
import { TextProps } from 'components/atoms/text/Text';

type LIInputElemProps = CheckboxProps | RadioProps | SwitchProps;

const classLIInputControl = 'lsux-list-item-input__control';

export const ListItemInputCheckboxComponent = (props: ListItemInputProps<CheckboxProps>) => {
  const { inputProps, ...otherProps } = props;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.checked) {
      otherProps.handleClick(e.currentTarget?.id);
    } else {
      otherProps.handleClick(null);
    }
    otherProps.handleClick(e.currentTarget?.id);
  }

  return (
    <ListItemInput {...otherProps} classNames={[classLIInputControl, ...(props?.classNames ?? [])]}>
      <Checkbox {...inputProps} checked={props.isSelected} onChange={handleChange} />
    </ListItemInput>
  );
};

export const ListItemInputRadioComponent = ({ ...props }: ListItemInputProps<RadioProps>) => {
  const { inputProps, ...otherProps } = props;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    otherProps.handleClick(e.currentTarget?.id);
  }

  return (
    <ListItemInput {...otherProps} classNames={[classLIInputControl, ...(props?.classNames ?? [])]}>
      <Radio {...inputProps} checked={props.isSelected} onChange={handleChange} />
    </ListItemInput>
  );
};

export const ListItemInputSwitchComponent = ({ ...props }: ListItemInputProps<SwitchProps>) => {
  const { inputProps, ...otherProps } = props;
  return (
    <ListItemInput {...otherProps} classNames={[classLIInputControl, ...(props?.classNames ?? [])]}>
      <Switch {...inputProps} isChecked={props.isSelected} onClick={(e) => props.handleClick(e.currentTarget?.id)} />
    </ListItemInput>
  );
};

export interface ListItemInputProps<T> extends ListItemProps {
  /**
   * The ID of the ListItemInput.
   */
  id?: string;
  /**
   * The children of the ListItemInput.
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * Primary text for the ListItemInput.
   */
  primary?: string;
  /**
   * Props for the primary text
   * @default {}
   */
  primaryProps?: TextProps;
  /**
   * Secondary text for the ListItemInput.
   */
  secondary?: string;
  /**
   * Props for the secondary text
   * @default {}
   */
  secondaryProps?: TextProps;
  /**
   * Determines the position of the control.
   * @default 'left'
   */
  controlPosition?: 'left' | 'right';
  /**
   * Determines if the ListItemInput is selected.
   */
  isSelected?: boolean;
  /**
   * Determines if the halo around the input is displayed when selected.
   */
  showHalo?: boolean;
  /**
   * Callback function for when the ListItemInput is clicked.
   */
  handleClick?: (id: string) => void;
  /**
   * Props for the underlying input (checkbox, radio, switch)
   */
  inputProps?: T;
  /**
   * Additional classNames to add to the list item.
   * @default []
   */
  classNames?: string[];
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLLIElement>;
}

const ListItemInputComponent = forwardRef<HTMLLIElement, ListItemInputProps<LIInputElemProps>>(
  (
    {
      children,
      controlPosition = 'left',
      id,
      isSelected,
      primary,
      primaryProps,
      secondary,
      secondaryProps,
      showHalo,
      handleClick,
      classNames = [],
      ...props
    }: ListItemInputProps<LIInputElemProps>,
    ref: ListItemInputProps<LIInputElemProps>['ref'],
  ) => {
    const classLIInput = 'lsux-list-item-input';
    const cnListItemInput = cn({ [`${classLIInput}`]: true }, ...classNames);

    const classLIInputButton = `${classLIInput}__button`;
    const cnLIInputButton = cn({
      [`${classLIInputButton}`]: true,
      [`${classLIInputButton}--selected`]: isSelected,
      [`show-halo`]: showHalo,
    });

    const listItemText = (
      <ListItemText
        primary={primary}
        primaryProps={primaryProps}
        secondary={secondary}
        secondaryProps={secondaryProps}
      />
    );

    return (
      <ListItem {...props} ref={ref} classNames={[cnListItemInput]}>
        <a className={cnLIInputButton} onClick={() => handleClick(id)}>
          {controlPosition === 'right' ? listItemText : null}
          <div className={cn(`${classLIInputButton}__children`, `${classLIInputButton}__children--${controlPosition}`)}>
            {children}
          </div>
          {controlPosition === 'left' ? listItemText : null}
        </a>
      </ListItem>
    );
  },
) as FC<ListItemInputProps<LIInputElemProps>>;

ListItemInputComponent.displayName = 'Modal';

type LIInputCheckboxComponent = React.FC<ListItemInputProps<CheckboxProps>>;
type LIInputRadioComponent = React.FC<ListItemInputProps<RadioProps>>;
type LIInputSwitchComponent = React.FC<ListItemInputProps<SwitchProps>>;
type LIInputComp = React.FC<ListItemInputProps<LIInputElemProps>> & {
  Checkbox: LIInputCheckboxComponent;
  Radio: LIInputRadioComponent;
  Switch: LIInputSwitchComponent;
};

export const ListItemInput = ListItemInputComponent as LIInputComp;

ListItemInput.Checkbox = ListItemInputCheckboxComponent;
ListItemInput.Radio = ListItemInputRadioComponent;
ListItemInput.Switch = ListItemInputSwitchComponent;
