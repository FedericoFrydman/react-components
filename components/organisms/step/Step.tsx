import { forwardRef, HTMLProps, Ref, useEffect, useState } from 'react';
import cn from 'classnames';

import { Button } from '../../molecules/button/Button';
import { Container, ContainerBgColors } from '../../atoms/container/Container';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { useViewportSize } from '../../foundation/utilities';
import './Step.scss';

export type StepSize = 'small' | 'medium' | 'auto';

export interface StepSection {
  name: string;
  percentComplete: number;
  isActive: boolean;
}

export interface StepProps extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onClick' | 'css'> {
  /**
   * Defines step background color
   */
  background?: ContainerBgColors;
  /**
   * Names of the steps in the process
   */
  stepNames?: string[];
  /**
   * Array of the step numbers that have been completed
   */
  completed?: number[];
  /**
   * Current step
   */
  activeIndex: number;
  /**
   * Array of the step numbers that can be clicked upon
   */
  clickable?: number[];
  /**
   * Size of the step control. Small will tighten the spacing and display an ellipse
   * for the non current elements
   */
  size?: StepSize;
  /**
   * Method to call as steps that are clickable are clicked
   */
  onClick: (index: number) => void;
  /**
   * Choose from 2 style variants. Default: 'bubbles'.
   */
  variant?: 'bubbles' | 'slider' | 'section';
  /**
   * The position of the step counter. Default: 'right'.
   */
  counterPosition?: 'right' | 'left';
  /**
   * The step string
   * Use ${0} to interpolate active step text and ${1} for total steps
   */
  stepText?: string;
  /**
   * Adds back button on slider variant
   */
  backSliderClick?: (event: React.MouseEvent) => void;
  /**
   * Sections on step
   */
  sections?: StepSection[];
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const StepComponent = (
  {
    background = 'white',
    stepNames,
    completed,
    activeIndex,
    size = 'auto',
    classNames = [],
    clickable = [],
    onClick,
    variant = 'bubbles',
    counterPosition = 'right',
    backSliderClick,
    stepText = 'Step ${0} of ${1}',
    sections,
    ...props
  }: StepProps,
  ref: StepProps['ref'],
) => {
  const [stepWidth, setStepWidth] = useState(140);
  const [blockWidth, setBlockWidth] = useState('140px');
  const [labelWidth, setLabelWidth] = useState(120);
  const [ellipse, setEllipse] = useState(false);
  const [isSmall, setSizeSmall] = useState<string>('');

  useEffect(() => {
    const length = sections?.length > 0 ? sections.length : stepNames.length;

    switch (size) {
      case 'small':
        setStepWidth(60);
        setBlockWidth('60px');
        setLabelWidth(40);
        setSizeSmall('small');
        setEllipse(true);
        break;
      case 'auto':
        setStepWidth(140);
        setBlockWidth(`${100 / length}%`);
        setLabelWidth(120);
        setEllipse(false);
        setSizeSmall('');
        break;
      default:
        setStepWidth(140);
        setBlockWidth('140px');
        setLabelWidth(120);
        setEllipse(false);
        setSizeSmall('');
        break;
    }
  }, [size, setStepWidth, stepNames, sections]);

  const { width } = useViewportSize();
  const breakpoint = 1023;

  const activeStep = activeIndex + 1;
  const isDesktop = width > breakpoint;

  return (
    <div {...props} className={cn('lsux-step-bar', classNames)} ref={ref}>
      {variant === 'section' ? (
        <Container background={background} flexbox classNames={['lsux-step-bar--container']}>
          {sections.map((section, index) => (
            <div
              className={'step-sections-container'}
              key={`step-sections-container-${index}`}
              style={{ backgroundColor: `#ededed${section.isActive ? '80' : ''}`, minWidth: blockWidth }}
            >
              <div className="step-section-container">
                <Text classNames={['step-section-text']} bold={section.isActive} text={section.name} />
                <div className="step-section" style={{ backgroundColor: `#c4c4c4${section.isActive ? '' : '80'}` }}>
                  <div className="step-section--bar" style={{ width: `${section.percentComplete}%` }} />
                </div>
              </div>
            </div>
          ))}
        </Container>
      ) : (
        <Container background={background} flexbox classNames={['lsux-step-bar--container']}>
          {stepNames.map((name, index) => {
            let content;
            let complete;
            if (completed.includes(index) && index != activeIndex) {
              content = <Icon name="interface_check" size="medium-small" />;
              complete = 'step-circle--complete';
            } else {
              content = (index + 1).toString();
            }

            const current = cn({ 'step-circle--current': index === activeIndex });
            const stepLabel = ellipse && index != activeIndex ? '...' : name;
            if (index != activeIndex && clickable.includes(index)) {
              const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
                event.preventDefault();
                onClick(index);
              };

              return isDesktop && variant !== 'slider' ? (
                <div className="step-container" key={index} style={{ minWidth: blockWidth, width: blockWidth }}>
                  <div className={cn(isSmall, 'auto-divider-left', { blank: index === 0 })}></div>
                  <a className={'step'} onClick={handleClick} style={{ minWidth: stepWidth, width: stepWidth }}>
                    <div className={cn('step-circle', current, complete)}>{content}</div>
                    <div className="step-label" style={{ width: labelWidth }}>
                      <Text text={stepLabel} as="p" textSize="small" />
                    </div>
                  </a>
                  <div className={cn(isSmall, 'auto-divider-right', { blank: index === stepNames.length - 1 })}></div>
                </div>
              ) : (
                <div
                  className={cn('step-container', 'mobile', current, complete)}
                  key={index}
                  style={{ minWidth: blockWidth, width: blockWidth }}
                ></div>
              );
            } else {
              return isDesktop && variant !== 'slider' ? (
                <div className="step-container" key={index} style={{ minWidth: blockWidth, width: blockWidth }}>
                  <div className={cn(isSmall, 'auto-divider-left', { blank: index === 0 })}></div>
                  <div className={'step'} style={{ minWidth: stepWidth, width: stepWidth }}>
                    <div className={cn('step-circle', current, complete)}>{content}</div>
                    <div className="step-label" style={{ width: labelWidth }}>
                      <Text text={stepLabel} as="p" textSize="small" />
                    </div>
                  </div>
                  <div className={cn(isSmall, 'auto-divider-right', { blank: index === stepNames.length - 1 })}></div>
                </div>
              ) : (
                <div
                  className={cn('step-container', 'mobile', current, complete)}
                  key={index}
                  style={{ minWidth: blockWidth, width: blockWidth }}
                ></div>
              );
            }
          })}
        </Container>
      )}
      {!isDesktop || variant === 'slider' ? (
        <Container
          flexbox
          justifyContent={backSliderClick ? 'space-between' : counterPosition === 'right' ? 'flex-end' : 'flex-start'}
          flexDirection={backSliderClick && counterPosition === 'left' ? 'row-reverse' : 'row'}
        >
          {backSliderClick ? (
            <Button
              label="Back"
              classNames={['lsux-step--button']}
              variant="tertiary"
              iconLeft="nav_arrow_left"
              iconColor="BRAND200"
              onClick={backSliderClick}
            />
          ) : null}
          <Container flexbox>
            <Text
              classNames={['lsux-step--indicator']}
              text={stepText.replace('${0}', activeStep.toString()).replace('${1}', stepNames?.length?.toString())}
              as="p"
            />
          </Container>
        </Container>
      ) : null}
    </div>
  );
};

/**
 * Step indicator shows a user's current progress in a multi-step task, and steps remaining till completion.
 *
 * Each step is numbered and pairs with a short label to explain the purpose of the step.
 * Previous steps can be clickable to allow users to make edits to the previously entered information.
 */

export const Step = forwardRef<HTMLDivElement, StepProps>(StepComponent);
