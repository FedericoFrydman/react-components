import { FocusEvent, FormEventHandler, ReactElement, useEffect, useState } from 'react';
import { TextArea } from '../../atoms/text-area/TextArea';
import { Checkbox } from '../../molecules/checkbox/Checkbox';
import { Input, InputType } from '../../molecules/input/Input';
import { MultiSelect, SelectOption } from '../../molecules/multi-select/MultiSelect';
import { FormField } from '../../organisms/form-field/FormField';

type HTMLElementEvent<T extends HTMLElement> = FormEventHandler & {
  target: T;
};

type HTMLFormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type IFieldType =
  | 'checkbox'
  | 'text'
  | 'password'
  | 'tel'
  | 'number'
  | 'search'
  | 'select'
  | 'textarea'
  | 'custom'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'range'
  | 'time'
  | 'url'
  | 'week';

type OnGroupRender = (groupName: string, fields: JSX.Element[]) => void | null;
type OnGlobalValidate = (values: Record<string, IFields>) => Record<string, IFields>;

interface MyFormEngine {
  hasChanged: boolean;
  isValid: boolean;
  renderField: (key: string) => ReactElement;
  renderForm: (onGroupRender?: OnGroupRender) => ReactElement;
  renderControl: (key: string) => ReactElement;
  setValues: React.Dispatch<React.SetStateAction<Record<string, IFields>>>;
}
export interface IFields {
  value: string;
  type: IFieldType;
  errorMessage?: string;
  groupName?: string;

  isValid?: boolean;
  hasFocus?: boolean;
  hasChanged?: boolean;
  visited?: boolean;
  disabled?: boolean;
  readOnly?: boolean;

  // FormField attributes
  label?: string;
  description?: string;
  noMargin?: boolean;
  leftLabel?: string;
  rightLabel?: string;

  // Validation
  required?: boolean;

  // Triggers
  onValidate?: (value: string) => boolean;
  onPreRender?: (values: Record<string, IFields>) => ReactElement;
  onPostRender?: (values: Record<string, IFields>) => ReactElement;

  // Specific to 'custom'
  onRender?: (name: string) => ReactElement;

  // Specific to Input and/or Textarea
  regEx?: RegExp;
  placeHolder?: string;
  maxLength?: number;
  inputMode?: 'none' | 'numeric' | 'tel' | 'decimal' | 'email' | 'url' | 'search';

  // Specific to Input
  min?: number;
  max?: number;
  autoComplete?: 'on' | 'off' | 'none';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  format?: string;

  // Specific to Textarea
  wrap?: string;
  rows?: number;

  // Specific to select
  options?: SelectOption[];
  optionsSelected?: SelectOption[];

  // Specific to checkbox
  checked?: boolean;
}

export const useForm = (initialState: Record<string, IFields> = {}, onGlobalValidate: OnGlobalValidate | null) => {
  const [values, setValues] = useState<Record<string, IFields>>(initialState);

  const [isValid, setIsValid] = useState(false);

  const [hasChanged, setHasChanged] = useState(false);

  const validateField = (element: IFields) => {
    if (element.type === 'checkbox') {
      if (element.required && !element.checked) {
        return false;
      }
    } else {
      if (element.required && !element.value) return false;

      if (element.regEx && !element.regEx.test(element.value)) return false;

      if (element.type === 'number' && (element.min || element.max)) {
        const v = Number(element.value);
        if (Number.isNaN(v)) return false;
        if (element.min && v < element.min) return false;
        if (element.max && v > element.max) return false;
      }

      if (element.maxLength && element.value.length > element.maxLength) return false;
    }

    if (element.onValidate) {
      return element.onValidate(element.value);
    }

    return true;
  };

  const handleOnFocus = (e: FocusEvent<HTMLFormElement>) => {
    const currentElement = values[e.target.name];
    setValues({
      ...values,
      [e.target.name]: { ...currentElement, hasFocus: true, visited: true },
    });
  };

  const handleOnBlur = (e: FocusEvent<HTMLFormElement>): void => {
    const currentElement = values[e.target.name];

    setValues({
      ...values,
      [e.target.name]: { ...currentElement, hasFocus: false },
    });
  };

  const handleSelectChange = (value: string) => {
    const currentElement = values[value];
    const fieldIsValid = validateField(currentElement);
    setValues({
      ...values,
      [value]: { ...currentElement, hasChanged: true, isValid: fieldIsValid, value: value },
    });
  };

  const handleInputChange = (e: HTMLElementEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const currentElement = values[e.target.name];

    let myValue;
    if (e.target.type === 'checkbox') {
      myValue = currentElement.value;
      currentElement.checked = !currentElement.checked;
    } else {
      currentElement.value = e.target.value;
      myValue = e.target.value;
    }

    const fieldIsValid = validateField(currentElement);

    let newValues = {
      ...values,
      [e.target.name]: { ...currentElement, hasChanged: true, isValid: fieldIsValid, value: myValue },
    };
    if (onGlobalValidate) {
      newValues = onGlobalValidate(newValues);
    }

    setValues(newValues);
    setHasChanged(true);
  };

  useEffect(() => {
    let lv: Record<string, IFields> = {};
    for (const key in values) {
      const element: IFields = values[key];

      if (element.isValid === null || element.isValid === undefined) {
        const fieldIsValid = validateField(element);
        element.isValid = fieldIsValid;
      }

      lv = { ...lv, [key]: element };
    }
    if (onGlobalValidate) {
      lv = onGlobalValidate(lv);
    }
    setValues(lv);
  }, []);

  useEffect(() => {
    let allValid = true;
    for (const key in values) {
      const element = values[key];
      if (!element.isValid) {
        allValid = false;
        break;
      }
    }
    setIsValid(allValid);
  }, [values]);

  const renderControl = (key: string) => {
    const record = values[key];

    return (
      <>
        {record.type === 'custom' && record.onRender != null ? record.onRender(key) : <></>}
        {(record.type === 'text' ||
          record.type === 'color' ||
          record.type === 'date' ||
          record.type === 'datetime-local' ||
          record.type === 'email' ||
          record.type === 'month' ||
          record.type === 'range' ||
          record.type === 'time' ||
          record.type === 'url' ||
          record.type === 'week' ||
          record.type === 'password' ||
          record.type === 'number' ||
          record.type === 'search' ||
          record.type === 'tel') && (
          <Input
            id={'fc' + key}
            name={key}
            onChange={handleInputChange as () => FormEventHandler<HTMLInputElement>}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            placeholder={record.placeHolder}
            value={record.value.toString()}
            type={record.type as InputType}
            format={record.format}
            disabled={record.disabled}
            readOnly={record.readOnly}
            maxLength={record.maxLength}
            min={record.min}
            max={record.max}
            inputMode={record.inputMode}
            autoComplete={record.autoComplete}
            autoCapitalize={record.autoCapitalize}
            status={!record.isValid && record.visited ? 'invalid' : ''}
          />
        )}
        {record.type === 'textarea' && (
          <TextArea
            id={'fc' + key}
            name={key}
            onBlur={handleOnBlur}
            onChange={handleInputChange as () => FormEventHandler<HTMLTextAreaElement>}
            onFocus={handleOnFocus}
            placeholder={record.placeHolder ? record.placeHolder : undefined}
            value={record.value.toString()}
            rows={record.rows ? record.rows : 5}
            disabled={record.disabled}
            readOnly={record.readOnly}
            maxLength={record.maxLength}
            wrap={record.wrap}
            inputMode={record.inputMode}
            autoCapitalize={record.autoCapitalize}
            autoComplete={record.autoComplete}
            status={!record.isValid && record.visited ? 'invalid' : ''}
          >
            {record.value.toString()}
          </TextArea>
        )}
        {record.type === 'checkbox' && (
          <Checkbox
            id={'fc' + key}
            checked={record.checked}
            disabled={record.disabled}
            name={key}
            onBlur={handleOnBlur}
            onChange={handleInputChange as () => FormEventHandler<HTMLInputElement>}
            onFocus={handleOnFocus}
            readOnly={record.readOnly}
          ></Checkbox>
        )}
        {record.type === 'select' && (
          <MultiSelect
            disabled={record.disabled || record.readOnly}
            name={key}
            options={record.options}
            onChange={handleSelectChange}
            value={record.value}
            status={!record.isValid && record.visited ? 'invalid' : ''}
          />
        )}
      </>
    );
  };

  const renderField = (key: string) => {
    const record = values[key];

    return (
      <div key={key}>
        {record.onPreRender != null ? record.onPreRender(values) : <></>}
        <FormField
          id={key}
          noMargin={record.noMargin ? true : false}
          status={record.visited && !record.isValid && !record.hasFocus && !record.disabled ? 'invalid' : 'valid'}
          validationHint={
            record.visited && !record.isValid && !record.hasFocus && !record.disabled ? record.errorMessage : ''
          }
          label={record.label}
          required={record.required && !record.disabled}
          description={record.description}
          leftLabel={record.leftLabel}
          rightLabel={record.rightLabel}
        >
          {renderControl(key)}
        </FormField>
        {record.onPostRender != null ? record.onPostRender(values) : <></>}
      </div>
    );
  };

  const renderFormSimple = (): ReactElement => {
    let index = 0;
    const fields = [];
    const keys = Object.entries(values);
    while (index < keys.length) {
      const [key] = keys[index];
      fields.push(renderField(key));
      index++;
    }

    return <>{fields}</>;
  };

  const renderFormComplex = (groupName: string, index: number, onGroupRender: OnGroupRender): [JSX.Element, number] => {
    const fields: any[] = [];

    const keys = Object.entries(values);

    while (index < keys.length) {
      const [key] = keys[index];

      const currentElement: IFields = values[key];

      if (currentElement.groupName === groupName) {
        fields.push(renderField(key));
        index++;
      } else if (currentElement.groupName?.startsWith(groupName)) {
        let elements = null;
        [elements, index] = renderFormComplex(currentElement.groupName, index, onGroupRender);
        fields.push(elements);
      } else {
        break;
      }
    }

    return [onGroupRender(groupName, fields) as any, index];
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderForm = (onGroupRender: OnGroupRender): ReactElement => {
    if (onGroupRender === null || onGroupRender === undefined) {
      return renderFormSimple();
    } else {
      const [elements, index] = renderFormComplex('', 0, onGroupRender);
      return <>elements</>;
    }
  };

  return [values, { hasChanged, isValid, renderControl, renderField, renderForm, setValues }] as [
    Record<string, IFields>,
    MyFormEngine,
  ];
};
