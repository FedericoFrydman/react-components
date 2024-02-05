import { Story, Meta } from '@storybook/react';
import { FormEvent } from 'react';
import { useArgs } from '@storybook/client-api';

import { Button } from '../../molecules/button/Button';
import { CardActions } from '../../organisms/card/Card';
import { Container } from '../../atoms/container/Container';
import { Icon } from '../../atoms/icon/Icon';
import {
  IPlanCardAddOnsProps,
  IPlanCardInfoProps,
  IPlanCardProps,
  IPlanCardRegionPickerProps,
  PlanCard,
  PlanCardAddOns,
  PlanCardInfo,
  PlanCardRegionPicker,
  planCardAvailableRegions,
  IPlanAddOnCoverage,
  IPlanCardTierRadioButtonGroupProps,
  PlanCardTierRadioButtonGroup,
  PlanCardBillingTerm,
  IPlanCardBillingTermProps,
  RadioGroupOption,
} from './PlanCard';
import { Text } from '../../atoms/text/Text';

import docs from './PlanCard.docs.mdx';

const PlanCardStory: Story<IPlanCardProps> = (
  args: IPlanCardProps &
    IPlanCardInfoProps &
    IPlanCardRegionPickerProps &
    IPlanCardAddOnsProps &
    IPlanCardTierRadioButtonGroupProps &
    IPlanCardBillingTermProps,
) => {
  const [{}, updateArgs] = useArgs();

  function onAddOnSelect(id: string, inputType: 'checkbox' | 'radio') {
    if (inputType === 'radio') {
      if (args.selectedAddOns?.includes(id)) {
        updateArgs({ selectedAddOns: [] });
      } else {
        updateArgs({ selectedAddOns: [id] });
      }
    } else {
      const updatedAddOns = args.selectedAddOns || [];
      if (args.selectedAddOns?.includes(id)) {
        updatedAddOns.splice(updatedAddOns.indexOf(id), 1);
      } else {
        updatedAddOns.push(id);
      }
      updateArgs({ selectedAddOns: updatedAddOns });
    }
  }

  function onRegionSelect(newRegion: string) {
    updateArgs({ selectedRegion: newRegion });
  }

  function handleTierClick(selectedTierName: string) {
    updateArgs({ selectedTier: selectedTierName });
  }

  function handleBillingTermClick(index: number) {
    updateArgs({ selectedBillingTerm: planCardAvailableBillingTerms[index] });
  }

  const planCardProps: IPlanCardProps = {
    isSelected: args.isSelected,
  };

  const planCardInfoProps: IPlanCardInfoProps = {
    appName: args.appName,
    isSelected: args.isSelected,
    onClick: args.onClick,
    onSeeDetailsClick: args.onSeeDetailsClick,
    planDescription: args.planDescription,
    planFees: args.planFees,
    planName: args.planName,
    planPrice: args.planPrice,
    planRecurrence: args.planRecurrence,
    planType: args.planType,
    showFees: args.showFees,
    showSeeDetails: args.showSeeDetails,
  };

  const planCardRegionPickerProps: IPlanCardRegionPickerProps = {
    availableRegions: planCardAvailableRegions,
    invalidRegionComponent: args.invalidRegionComponent,
    invalidRegionMessage: args.invalidRegionMessage,
    invalidRegionTitle: args.invalidRegionTitle,
    invalidRegions: args.invalidRegions,
    onRegionSelect: onRegionSelect,
    placeholder: args.placeholder,
    selectedRegion: args.selectedRegion,
    showValidationMessage: args.showValidationMessage,
  };

  const planCardTierRadioButtonProps: IPlanCardTierRadioButtonGroupProps = {
    availableTiers: planCardAvailableTiers,
    handleTierClick: handleTierClick,
    selectedTier: args.selectedTier,
  };

  const planCardBillingTermsProps: IPlanCardBillingTermProps = {
    availableBillingTerms: args.availableBillingTerms,
    handleBillingTermClick: handleBillingTermClick,
    selectedBillingTerm: args.selectedBillingTerm,
  };

  const planCardAddOnsProps: IPlanCardAddOnsProps = {
    availableAddOns: args.availableAddOns,
    inputType: args.inputType,
    onAddOnSelect: (id) => onAddOnSelect(id, args.inputType),
    selectedAddOns: args.selectedAddOns,
    title: args.title,
  };

  return (
    <Container style={{ maxWidth: 400 }} classNames={['m-4']}>
      <PlanCard {...planCardProps}>
        <PlanCardInfo {...planCardInfoProps}>
          <PlanCardRegionPicker {...planCardRegionPickerProps} />
          <PlanCardTierRadioButtonGroup {...planCardTierRadioButtonProps} />
          <PlanCardBillingTerm {...planCardBillingTermsProps} />
        </PlanCardInfo>
        <PlanCardAddOns {...planCardAddOnsProps} />
      </PlanCard>
    </Container>
  );
};

const planCardAvailableTiers: RadioGroupOption[] = [
  { name: 'Essentials', price: 29.95 },
  { name: 'Plus', price: 29.95 },
  { name: 'Pro', price: 29.95 },
];

const planCardAvailableBillingTerms: string[] = ['Monthly', 'Quarterly', 'Yearly'];
const planCardBillingTermsTwoOptions: string[] = ['Monthly', 'Quarterly'];

const planCardAvailableAddOns: IPlanAddOnCoverage[] = [
  { name: 'Business Plus Supplement', price: '$14.95', value: 'BPS' },
  { name: "Gun Owner's Supplement", price: '$14.95', value: 'GOS' },
  { name: 'Home Business Supplement', price: '$14.95', value: 'HBS' },
];

export const Default = PlanCardStory.bind({});
Default.args = {
  appName: 'LegalShield',
  availableAddOns: planCardAvailableAddOns,
  availableBillingTerms: planCardAvailableBillingTerms,
  availableRegions: planCardAvailableRegions,
  id: 'ls-card',
  isSelected: true,
  onClick: null,
  onRegionSelect: (r: string) => console.log(`Region selected: ${r}`),
  onSeeMoreClick: () => alert('See more!'),
  planDescription: 'Legal protection for you and your family',
  planFees: '+ processing fees',
  planName: 'Individual & Family Legal',
  planPrice: '$29.95',
  planRecurrence: '/mo',
  planType: 'Legal Plan',
  showFees: true,
  showSeeDetails: true,
};

export const WithAddOnCheckboxes = PlanCardStory.bind({});
WithAddOnCheckboxes.args = {
  appName: 'LegalShield',
  availableAddOns: planCardAvailableAddOns,
  availableBillingTerms: planCardAvailableBillingTerms,
  availableRegions: planCardAvailableRegions,
  id: 'ls-card',
  isSelected: true,
  onClick: null,
  onRegionSelect: (r: string) => console.log(`Region selected: ${r}`),
  onSeeMoreClick: () => alert('See more!'),
  planDescription: 'Legal protection for you and your family',
  planFees: '+ processing fees',
  planName: 'Individual & Family Legal',
  planPrice: '$29.95',
  planRecurrence: '/mo',
  planType: 'Legal Plan',
  showFees: true,
  showSeeDetails: true,
};

export const WithAddOnRadioButtons = PlanCardStory.bind({});
WithAddOnRadioButtons.args = {
  appName: 'LegalShield',
  availableAddOns: planCardAvailableAddOns,
  availableBillingTerms: planCardAvailableBillingTerms,
  availableRegions: planCardAvailableRegions,
  id: 'ls-card',
  inputType: 'radio',
  isSelected: true,
  onClick: null,
  onRegionSelect: (r: string) => console.log(`Region selected: ${r}`),
  onSeeMoreClick: () => alert('See more!'),
  planDescription: 'Legal protection for you and your family',
  planFees: '+ processing fees',
  planName: 'Individual & Family Legal',
  planPrice: '$29.95',
  planRecurrence: '/mo',
  planType: 'Legal Plan',
  showFees: true,
  showSeeDetails: true,
};

export const WithInvalidRegion = PlanCardStory.bind({});
WithInvalidRegion.args = {
  appName: 'LegalShield',
  availableAddOns: planCardAvailableAddOns,
  availableBillingTerms: planCardAvailableBillingTerms,
  availableRegions: planCardAvailableRegions,
  id: 'ls-card',
  invalidRegionMessage: 'Please call us for more information.',
  invalidRegionTitle: 'This plan is not available in your state.',
  invalidRegions: ['AK', 'FL', 'MS', 'ND', 'UT'],
  isSelected: true,
  onClick: null,
  onRegionSelect: (r: string) => console.log(`Region selected: ${r}`),
  onSeeMoreClick: () => alert('See more!'),
  planDescription: 'Legal protection for you and your family',
  planFees: '+ processing fees',
  planName: 'Individual & Family Legal',
  planPrice: '$29.95',
  planRecurrence: '/mo',
  planType: 'Legal Plan',
  selectedRegion: 'AK',
  showFees: true,
  showSeeDetails: true,
};

export const WithInvalidRegionCustomMsg = PlanCardStory.bind({});
WithInvalidRegionCustomMsg.args = {
  appName: 'LegalShield',
  availableAddOns: planCardAvailableAddOns,
  availableBillingTerms: planCardAvailableBillingTerms,
  availableRegions: planCardAvailableRegions,
  id: 'ls-card',
  invalidRegionComponent: (
    <div>
      <Container flexbox flexDirection="row" alignItems="center" classNames={'pt-4 pb-2'}>
        <Icon name="feedback_warning" color="Y200" size="medium" classNames={['mr-3']} />
        <Text textSize="medium" text="This plan is not available in your state. Please call us for more information." />
      </Container>
      <CardActions align="center">
        <Button
          label="Call 1 (800) 654-7757"
          iconLeft="comm_phone"
          iconColor="BRAND300"
          onClick={() => window.open('tel:1-800-654-7757')}
        />
      </CardActions>
    </div>
  ),
  invalidRegions: ['AK', 'FL', 'MS', 'ND', 'UT'],
  isSelected: true,
  onClick: null,
  onRegionSelect: (r: string) => console.log(`Region selected: ${r}`),
  onSeeMoreClick: () => alert('See more!'),
  planDescription: 'Legal protection for you and your family',
  planFees: '+ processing fees',
  planName: 'Individual & Family Legal',
  planPrice: '$29.95',
  planRecurrence: '/mo',
  planType: 'Legal Plan',
  selectedRegion: 'AK',
  showFees: true,
  showSeeDetails: true,
};

export const WithTwoBillingTermsTab = PlanCardStory.bind({});
WithTwoBillingTermsTab.args = {
  appName: 'LegalShield',
  availableAddOns: planCardAvailableAddOns,
  availableBillingTerms: planCardBillingTermsTwoOptions,
  availableRegions: planCardAvailableRegions,
  id: 'ls-card',
  isSelected: true,
  onClick: null,
  onRegionSelect: (r: string) => console.log(`Region selected: ${r}`),
  onSeeMoreClick: () => alert('See more!'),
  planDescription: 'Legal protection for you and your family',
  planFees: '+ processing fees',
  planName: 'Individual & Family Legal',
  planPrice: '$29.95',
  planRecurrence: '/mo',
  planType: 'Legal Plan',
  showFees: true,
  showSeeDetails: true,
};

export const WithIDShieldPlan = PlanCardStory.bind({});
WithIDShieldPlan.args = {
  appName: 'IDShield',
  availableAddOns: planCardAvailableAddOns,
  availableBillingTerms: planCardAvailableBillingTerms,
  availableRegions: planCardAvailableRegions,
  id: 'ls-card',
  isSelected: true,
  onClick: null,
  onRegionSelect: (r: string) => console.log(`Region selected: ${r}`),
  onSeeMoreClick: () => alert('See more!'),
  planDescription: 'Legal protection for you and your family',
  planFees: '+ processing fees',
  planName: 'IDShield Family',
  planPrice: '$29.95',
  planRecurrence: '/mo',
  planType: 'Identity Plan',
  showFees: true,
  showSeeDetails: true,
};

export default {
  argTypes: {
    appName: { control: { type: 'select' }, options: ['LegalShield', 'IDShield'] },
    inputType: { control: { type: 'select' }, options: ['checkbox', 'radio'] },
    invalidRegionMessage: { control: { type: 'text' } },
    invalidRegionTitle: { control: { type: 'text' } },
    isSelected: { control: { type: 'boolean' } },
    placeholder: { control: { type: 'text' } },
    planDescription: { control: { type: 'text' } },
    planFees: { control: { type: 'text' } },
    planName: { control: { type: 'text' } },
    planPrice: { control: { type: 'text' } },
    planRecurrence: { control: { type: 'text' } },
    planType: { control: { type: 'text' } },
    selectedRegion: { control: { type: 'select' }, options: planCardAvailableRegions?.map((r) => r.value) },
    showFees: { control: { type: 'boolean' } },
    showSeeDetails: { control: { type: 'boolean' } },
    showValidationMessage: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
  },
  component: PlanCardStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Marketing/PlanCard',
} as Meta;
