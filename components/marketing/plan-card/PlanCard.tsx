import { FC, forwardRef, MouseEvent, ReactNode } from 'react';
import cn from 'classnames';

import { Alert } from '../..//molecules/alert/Alert';
import { Card, CardProps } from '../../organisms/card/Card';
import { CheckboxProps } from '../../molecules/checkbox/Checkbox';
import { ContainerProps } from '../../atoms/container/Container';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';
import { Link } from '../../atoms/link/Link';
import { List } from '../../molecules/list/List';
import { ListItemInput, ListItemInputProps } from '../../molecules/list/ListItemInput';
import { Select, SelectItem } from '../../molecules/select/Select';
import { Text } from '../../atoms/text/Text';
import { Title } from '../../atoms/title/Title';

import '../../assets/styles/utilities.scss';
import './plan-card.scss';
import { Tabs } from '../../molecules/tabs/Tabs';
import { ListItemInputRadioComponent } from '../../molecules/list/ListItemInput';
import { SelectOption } from '../../molecules/multi-select/MultiSelect';

const classPlanCard = 'lsux-plan-card';

export type RadioGroupOption = {
  name: string;
  price: number;
};

export const planCardAvailableRegions: SelectOption[] = [
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska', value: 'AK' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'California', value: 'CA' },
  { label: 'Colorado', value: 'CO' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Delaware', value: 'DE' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maine', value: 'ME' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Montana', value: 'MT' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'Wyoming', value: 'WY' },
];

export interface IPlanCardTierRadioButtonGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * List of available tiers
   * @default []
   */
  availableTiers?: RadioGroupOption[];
  /**
   * Event handler for tier
   */
  handleTierClick?: (selectedTierName: string) => void;
  /**
   * Selected tier
   * @default null;
   */
  selectedTier?: string;
  /**
   * Additional class names
   */
  classNames?: cn.Argument;
}

export interface IPlanCardBillingTermProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * List of billing terms
   * @default []
   */
  availableBillingTerms?: string[];
  /**
   * Event handler for billing term
   */
  handleBillingTermClick?: (index: number) => void;
  /**
   * Selected billing term
   * @default null;
   */
  selectedBillingTerm?: string;
  /**
   * Additional class names
   */
  classNames?: cn.Argument;
}

export interface IPlanCardRegionPickerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * List of available regions
   * @default []
   * @description e.g. [{ label: 'Alabama', value: 'AL' }, { label: 'Alaska', value: 'AK' }]
   */
  availableRegions?: SelectOption[];
  /**
   * List of invalid regions
   * @default []
   * @description e.g. ['AK', 'MS']
   */
  invalidRegions?: string[];
  /**
   * Component to render when region is invalid
   * @default null
   */
  invalidRegionComponent?: ReactNode;
  /**
   * Message to be displayed when a region is invalid
   * @description e.g. 'Please call us for more information.'
   */
  invalidRegionMessage?: string;
  /**
   * Message to be displayed when a region is invalid
   * @description e.g. 'This plan is not available in your state'
   */
  invalidRegionTitle?: string;
  /**
   * Placeholder for region select
   * @default 'Select your state'
   */
  placeholder?: string;
  /**
   * Selected region
   * @default null;
   */
  selectedRegion?: string;
  /**
   * Determines if the validation message shows on selection of invalid region
   * @default true
   */
  showValidationMessage?: boolean;
  /**
   * Event handler for region
   */
  onRegionSelect?: (r: string) => void;
  /**
   * Additional class names
   */
  classNames?: cn.Argument;
}

export const PlanCardRegionPicker: FC<IPlanCardRegionPickerProps> = ({
  availableRegions = [],
  invalidRegions = [],
  invalidRegionComponent = null,
  invalidRegionMessage,
  invalidRegionTitle,
  placeholder = 'Select your state',
  selectedRegion,
  showValidationMessage = true,
  onRegionSelect,
  classNames = [],
  ...props
}) => {
  if (placeholder) {
    availableRegions = [
      {
        hidden: true,
        label: placeholder,
        value: '',
      },
      ...availableRegions,
    ];
  }

  return (
    <div {...props} className={cn(`${classPlanCard}__region-selector pt-5`, classNames)}>
      <Select placeholder={placeholder} onValueChange={onRegionSelect} value={selectedRegion} stretch>
        {availableRegions
          .filter((r) => !r.hidden)
          .map((region) => (
            <SelectItem key={region.value} value={region.value.toString()}>
              {region.label}
            </SelectItem>
          ))}
      </Select>
      {invalidRegions.includes(selectedRegion) && showValidationMessage ? (
        invalidRegionComponent ? (
          invalidRegionComponent
        ) : (
          <Alert
            severity="warning"
            title={invalidRegionTitle}
            classNames={[`${classPlanCard}__region-selector__alert`, 'mt-4']}
          >
            {invalidRegionMessage}
          </Alert>
        )
      ) : null}
    </div>
  );
};

export const PlanCardTierRadioButtonGroup: FC<IPlanCardTierRadioButtonGroupProps> = ({
  availableTiers = [],
  classNames = [],
  handleTierClick,
  selectedTier,
  ...props
}) => {
  return (
    <div {...props} className={cn(`${classPlanCard}__tier-radio-button-group`, classNames, 'pt-4')}>
      {availableTiers.map((availableTier) => (
        <ListItemInputRadioComponent
          key={availableTier.name}
          controlPosition="right"
          classNames={[`${classPlanCard}__tier-list-item-input`]}
          showHalo={true}
          handleClick={() => handleTierClick(availableTier.name)}
          primary={availableTier.name}
          primaryProps={{ textHeight: '26px', textSize: 'small', textWeight: 'bold' }}
          secondary={`$` + availableTier.price.toString() + `/month`}
          secondaryProps={{ textSize: 'extra-large', textWeight: 'bold' }}
          isSelected={availableTier.name === selectedTier}
        />
      ))}
    </div>
  );
};

export const PlanCardBillingTerm: FC<IPlanCardBillingTermProps> = ({
  availableBillingTerms = [],
  classNames = [],
  handleBillingTermClick,
  selectedBillingTerm,
  ...props
}) => {
  const activeIndex =
    availableBillingTerms.indexOf(selectedBillingTerm) == -1 ? 0 : availableBillingTerms.indexOf(selectedBillingTerm);
  return (
    <div {...props} className={cn(`pb-4 pt-6`, classNames)} style={{ margin: '0 auto' }}>
      <Tabs
        tabNames={availableBillingTerms}
        activeIndex={activeIndex}
        onClick={handleBillingTermClick}
        stretch={true}
      />
    </div>
  );
};

export interface IPlanCardInfoProps extends Omit<ContainerProps, 'children'> {
  /**
   * Components to be shown in PlanCard
   */
  children?: ReactNode | ReactNode[];
  /**
   * App to be shown
   * @default 'LegalShield'
   */
  appName?: 'LegalShield' | 'IDShield';
  /**
   * Determines if the card is selected
   * @default false
   */
  isSelected?: boolean;
  /**
   * Description of the plan
   */
  planDescription?: string;
  /**
   * Fees of the plan
   * @default null
   */
  planFees?: string;
  /**
   * Name of the plan
   */
  planName?: string;
  /**
   * Price of the plan
   * @default '$0.00'
   */
  planPrice?: string;
  /**
   * Recurrence of the plan
   * @default '/mo'
   */
  planRecurrence?: string;
  /**
   * Type of the plan
   * @description e.g. 'Legal Plan' or 'ID Plan'
   */
  planType?: string;
  /**
   * Determines if the fees are shown
   * @default false
   */
  showFees?: boolean;
  /**
   * Determines if See Details is shown
   * @default false
   */
  showSeeDetails?: boolean;
  /**
   * Event handler for clicking the card
   */
  onClick?: () => void;
  /**
   * Event for clicking the See Details
   */
  onSeeDetailsClick?: () => void;
}
export const PlanCardInfo: FC<IPlanCardInfoProps> = ({
  appName = 'LegalShield',
  children,
  isSelected,
  planDescription,
  planFees,
  planName,
  planPrice = '$0.00',
  planRecurrence = '/mo',
  planType,
  showFees = false,
  showSeeDetails = false,
  onClick,
  onSeeDetailsClick,
  ...props
}) => {
  function onSeeMorePress(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    onSeeDetailsClick();
  }

  return (
    <Card.Content {...props}>
      <>
        <div onClick={onClick} className={`${classPlanCard}__header`}>
          <div className={`${classPlanCard}__header__logo-container`}>
            <Icon
              name={appName === 'LegalShield' ? 'apps_legal_shield' : 'apps_id_shield'}
              size="xlarge"
              classNames={`${classPlanCard}__header__logo-container__icon`}
            />
          </div>
          <div className={`${classPlanCard}__header__title-container`}>
            {planName && (
              <div>
                <Heading as="T16" text={planName} classNames={['pc-plan-name']} />
                <Text text={planType} textSize="small" classNames={['pc-plan-type']} />
              </div>
            )}
          </div>
          {isSelected && (
            <span>
              <Icon
                classNames={[`${classPlanCard}__icon-checkmark`]}
                name="warning_circle_check_filled"
                color="BRAND200"
                size="medium"
              />
            </span>
          )}
        </div>
        <div className={`${classPlanCard}__plan-info`}>
          <div className={`${classPlanCard}__plan-info-price pt-4`}>
            {planPrice || planRecurrence ? <Title text={planPrice + planRecurrence} textSize="large" /> : null}
            {showFees ? (
              <Text text={showFees ? planFees : ''} textSize="small" classNames={['plan-fee-text', 'pt-1']} />
            ) : null}
          </div>
          {planDescription ? (
            <div className={`${classPlanCard}__plan-info-description pt-4 pb-3`}>
              <Text text={planDescription} />
            </div>
          ) : null}
          {showSeeDetails ? (
            <div className={`${classPlanCard}__plan-info-see-details`}>
              <Link text="See Details" decoration={true} onClick={onSeeMorePress} />
            </div>
          ) : null}
        </div>
        {children}
      </>
    </Card.Content>
  );
};

export interface IPlanAddOnCoverage {
  /**
   * Name of the add-on
   * @description e.g. 'Business Plus Supplement'
   */
  name?: string;
  /**
   * Price of the add-on
   * @description e.g. '$10.00'
   */
  price?: string;
  /**
   * Value of the add-on
   * @description e.g. 'BPS'
   */
  value?: string;
}

export interface IPlanCardAddOnProps extends ListItemInputProps<CheckboxProps> {
  /**
   * The add-on to display
   * @type {IPlanAddOnCoverage}
   */
  addOn?: IPlanAddOnCoverage;
  /**
   * Type of input
   * @default 'checkbox'
   */
  inputType?: 'checkbox' | 'radio';
  /**
   * Recurrence of the plan
   * @default '/month'
   */
  planRecurrence?: string;
  /**
   * Event handler for when the add-on is selected
   */
  onPlanAddOnSelect?: (value: string) => void;
}
const PlanCardAddOn = ({
  addOn,
  inputType = 'checkbox',
  planRecurrence = '/month',
  onPlanAddOnSelect,
  ...props
}: IPlanCardAddOnProps) => {
  const LIInputComponent = inputType === 'checkbox' ? ListItemInput.Checkbox : ListItemInput.Radio;
  return (
    <LIInputComponent
      {...props}
      id={addOn.value}
      controlPosition="right"
      primary={addOn.name}
      primaryProps={{
        classNames: ['pc-add-on-coverage-name'],
      }}
      secondary={addOn.price + planRecurrence}
      secondaryProps={{ classNames: ['pc-add-on-coverage-price', 'pt-2'] }}
      handleClick={onPlanAddOnSelect}
    />
  );
};

export interface IPlanCardAddOnsProps {
  /**
   * List of available add-ons
   * @default []
   */
  availableAddOns?: IPlanAddOnCoverage[];
  /**
   * Type of input
   * @default 'checkbox'
   */
  inputType?: 'checkbox' | 'radio';
  /**
   * Recurrence of the plan
   * @default '/month'
   */
  planRecurrence?: string;
  /**
   * Selected add-ons
   * @default []
   */
  selectedAddOns?: string[];
  /**
   * Title for the add-ons section
   */
  title?: string;
  /**
   * Event handler for add-ons
   */
  onAddOnSelect?: (id: string) => void;
}
export const PlanCardAddOns: FC<IPlanCardAddOnsProps> = ({
  availableAddOns = [],
  inputType = 'checkbox',
  planRecurrence = '/month',
  selectedAddOns,
  title,
  onAddOnSelect,
}: IPlanCardAddOnsProps) => (
  <Card.Content background="light-gray" classNames={[`${classPlanCard}__add-ons`]}>
    {title ? (
      <Heading as="T16" text={title} classNames={[`${classPlanCard}__add-ons__heading`, 'pt-4', 'pb-5']} />
    ) : null}
    <List>
      <>
        {availableAddOns.map((addOn, index) => (
          <PlanCardAddOn
            key={index}
            addOn={addOn}
            inputType={inputType}
            isSelected={selectedAddOns?.includes(addOn.value)}
            onPlanAddOnSelect={onAddOnSelect}
            planRecurrence={planRecurrence}
          />
        ))}
      </>
    </List>
  </Card.Content>
);

export interface IPlanCardProps extends CardProps {
  /**
   * Components to be shown in PlanCard
   */
  children?: ReactNode | ReactNode[];
  /**
   * Determines if the card is selected
   * @default false
   */
  isSelected?: boolean;
  /**
   * Determines if the card can be selected or not
   * @default false
   */
  selectable?: boolean;
  /**
   * Additional class names
   */
  classNames?: cn.Argument;
}
const PlanCardComponent = (
  { isSelected = false, selectable = false, classNames = [], ...props }: IPlanCardProps,
  ref: IPlanCardProps['ref'],
) => {
  const cnPlanCard = cn(
    {
      [`${classPlanCard}`]: true,
      [`${classPlanCard}--selected`]: isSelected,
    },
    classNames,
  );

  const { title, ...otherProps } = props;

  return (
    <Card {...otherProps} ref={ref} selectable={selectable} isSelected={isSelected} classNames={[cnPlanCard]}>
      {props.children}
    </Card>
  );
};

/**
 * Plan Card displays information about a specific PPLSI plan.
 */
export const PlanCard = forwardRef<HTMLDivElement, IPlanCardProps>(PlanCardComponent);
