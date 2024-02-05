import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';

import {
  PlanCard,
  IPlanCardProps,
  PlanCardInfo,
  PlanCardAddOns,
  PlanCardRegionPicker,
  planCardAvailableRegions,
  IPlanCardRegionPickerProps,
  IPlanCardInfoProps,
} from './PlanCard';
import { ContainerBgColors } from '../../../components/atoms/container/Container';

describe('PlanCard Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PlanCard id="ls-card" isSelected={true} selectable>
        <PlanCardInfo
          appName="LegalShield"
          planDescription={'Legal protection for you and your family'}
          planFees={'+ processing fees'}
          planName={'Individual & Family Legal'}
          planPrice={'$29.95'}
          planRecurrence={'/mo'}
          planType={'Legal Plan'}
          showFees={true}
          onClick={null}
          onSeeDetailsClick={() => alert('See more!')}
        >
          <PlanCardRegionPicker
            availableRegions={planCardAvailableRegions}
            selectedRegion={'CA'}
            onRegionSelect={null}
          />
        </PlanCardInfo>
        <PlanCardAddOns />
      </PlanCard>,
    );
    testId = 'test plan card';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the card the provided classNames', () => {
          const card = renderPlanCard({ classNames });

          expect(card).toHaveClass(classNames.join(' '), { exact: false });
        });
      });
    });

    describe('isSelected', () => {
      const selectedClassName = ['lsux-plan-card--selected'].join(' ');

      it('gives the card the selected class', () => {
        const card = renderPlanCard({ isSelected: true });

        expect(card).toHaveClass(selectedClassName, { exact: false });
      });
    });

    describe('background', () => {
      const backgrounds: ContainerBgColors[] = ['light-gray', 'white', 'none'];

      it('defaults to white', () => {
        const card = renderPlanCard();

        expect(card).toHaveClass(`lsux-card--bg--white`);
      });

      function itAssignsTheRightClassForBackground(background: ContainerBgColors) {
        const cardBgClass = `lsux-card--bg--${background}`;

        describe(`when the background is ${background}`, () => {
          it(`assigns the ${cardBgClass} to the card`, () => {
            const card = renderPlanCard({ background: background });

            expect(card).toHaveClass(cardBgClass);
          });
        });
      }

      backgrounds.forEach((bg) => itAssignsTheRightClassForBackground(bg));
    });

    describe('cardHeight', () => {
      describe('when "cardHeight" is provided', () => {
        const cardHeight = `200px`;

        it('sets the card width to the provided value', () => {
          const card = renderPlanCard({ cardHeight });

          expect(card).toHaveStyle({ height: cardHeight });
        });
      });
    });

    describe('cardWidth', () => {
      describe('when "cardWidth" is provided', () => {
        const cardWidth = `200px`;

        it('sets the card width to the provided value', () => {
          const card = renderPlanCard({ cardWidth });

          expect(card).toHaveStyle({ width: cardWidth });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the card', () => {
      expect(renderPlanCard({ ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    const altText = 'My accessible card';

    it('allows html attributes to be passed to the underlying card element', () => {
      render(<PlanCard alt={altText} data-testid={testId} />);

      const card = screen.getByTestId(testId);

      expect(card).toHaveAttribute('alt', altText);
    });
  });

  const renderPlanCard = (props: IPlanCardProps = {}): HTMLElement => {
    render(<PlanCard {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});

describe('PlanCardInfo Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PlanCardInfo
        appName="LegalShield"
        planDescription={'Legal protection for you and your family'}
        planFees={'+ processing fees'}
        planName={'Individual & Family Legal'}
        planPrice={'$29.95'}
        planRecurrence={'/mo'}
        planType={'Legal Plan'}
        showFees={true}
        onClick={null}
        onSeeDetailsClick={() => alert('See more!')}
      />,
    );
    testId = 'test-plan-card-info';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('planDescription', () => {
      describe('when provided', () => {
        const planDescription = 'Test plan description';

        it('renders the plan description', () => {
          const cardInfo = renderPlanCardInfo({ planDescription });

          expect(cardInfo).toHaveTextContent(planDescription);
        });
      });
    });
  });

  const renderPlanCardInfo = (props: IPlanCardInfoProps = {}): HTMLElement => {
    render(<PlanCardInfo {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});

describe('PlanCardRegionPicker Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PlanCardRegionPicker
        availableRegions={planCardAvailableRegions}
        selectedRegion={'CA'}
        onRegionSelect={null}
        invalidRegions={[]}
        invalidRegionComponent={null}
        invalidRegionMessage="Test invalid region message"
        showValidationMessage={true}
      />,
    );
    testId = 'test-plan-card-region-picker';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('availableRegions', () => {
      it('renders the provided regions', () => {
        const regionPicker = renderPlanCardRegionPicker({
          availableRegions: [{ label: 'California', value: 'CA' }],
          selectedRegion: 'CA',
        });

        expect(regionPicker).toHaveTextContent('California');
      });
    });
    describe('invalidRegions', () => {
      it('renders the region even when invalid', () => {
        const regionPicker = renderPlanCardRegionPicker({
          availableRegions: [{ label: 'California', value: 'CA' }],
          invalidRegions: ['CA'],
          selectedRegion: 'CA',
        });

        expect(regionPicker).toHaveTextContent('California');
      });
    });
    describe('invalidRegionComponent', () => {
      it('renders the provided component when invalid', () => {
        const regionPicker = renderPlanCardRegionPicker({
          availableRegions: [{ label: 'California', value: 'CA' }],
          invalidRegionComponent: <div>You canot purchase this plan in your state.</div>,
          invalidRegions: ['CA'],
          selectedRegion: 'CA',
        });

        expect(regionPicker).toHaveTextContent('You canot purchase this plan in your state.');
      });
    });
    describe('invalidRegionMessage', () => {
      it('renders the provided message when invalid', () => {
        const regionPicker = renderPlanCardRegionPicker({
          availableRegions: [{ label: 'California', value: 'CA' }],
          invalidRegionMessage: 'Please call us for more information.',
          invalidRegions: ['CA'],
          selectedRegion: 'CA',
        });

        expect(regionPicker).toHaveTextContent('Please call us for more information.');
      });
    });
    describe('invalidRegionTitle', () => {
      it('renders the provided title when invalid', () => {
        const regionPicker = renderPlanCardRegionPicker({
          availableRegions: [{ label: 'California', value: 'CA' }],
          invalidRegionTitle: 'This plan is not available in your state.',
          invalidRegions: ['CA'],
          selectedRegion: 'CA',
        });

        expect(regionPicker).toHaveTextContent('This plan is not available in your state.');
      });
    });
    describe('selectedRegion', () => {
      it('renders the provided selected region', () => {
        const regionPicker = renderPlanCardRegionPicker({
          availableRegions: [{ label: 'California', value: 'CA' }],
          selectedRegion: 'CA',
        });

        expect(regionPicker).toHaveTextContent('California');
      });
    });
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the card the provided classNames', () => {
          const card = renderPlanCardRegionPicker({ classNames });

          expect(card).toHaveClass(classNames.join(' '), { exact: false });
        });
      });
    });
  });

  const renderPlanCardRegionPicker = (props: IPlanCardRegionPickerProps = {}): HTMLElement => {
    render(<PlanCardRegionPicker {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
