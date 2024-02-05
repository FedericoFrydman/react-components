import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { Badge, BadgeVariant } from '../../molecules/badge/Badge';
import { Container } from '../../atoms/container/Container';
import { Heading } from '../../../components/atoms/heading/Heading';
import { Icon, IconNames } from '../../atoms/icon/Icon';
import { Title } from '../../atoms/title/Title';

import './Accordion.scss';
import '../../assets/styles/utilities.scss';

export type AccordionChildrenBackgroundColors = 'white' | 'gray';
export type AccordionIcon = 'chevron' | 'plus-sign';

export interface AccordionProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick' | 'css' | 'border'> {
  /**
   * Title of the accordion
   */
  title?: string;
  /**
   * Icon before the title
   */
  titleIcon?: IconNames;
  /**
   * Indicates the accordion is initially open. Note: This value is overwritten by `isExpanded`.
   * @default false
   */
  initialOpen?: boolean;
  /**
   * Determines if the accordion is expanded or collapsed
   */
  isExpanded?: boolean;
  /**
   * Additional content children
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * Additional inner children
   */
  innerChildren?: React.ReactNode | React.ReactNode[];
  /**
   * Define children max height if needed
   * @deprecated This is no longer supported.
   */
  childrenMaxHeight?: string;
  /**
   * Defines if accordion should have a border or not
   * @default true
   */
  border?: boolean;
  /**
   * Defines the accordion icon
   * @default 'chevron'
   */
  accordionIcon?: AccordionIcon;
  /**
   * Button before Accordion Icon
   * @deprecated Text is no longer supported.
   */
  buttonText?: string;
  /**
   * Button before Accordion Icon
   * @deprecated Button is no longer supported.
   */
  buttonOnClick?: () => void;
  /**
   * Badge next to Accordion title
   */
  badgeText?: string;
  /**
   * Badge variant
   */
  badgeVariant?: BadgeVariant;
  /**
   * Accordion title shown as heading
   * If true, the title is shown using a Heading element instead of a Title component
   * @default false
   */
  headingTitle?: boolean;
  /**
   * Accordion element for the heading instead of text
   * Overrides headingTitle props.
   * Using tappable elements in headingChildren could conflict with the accordion functionality.
   * @default undefined
   */
  headingChildren?: React.ReactNode | React.ReactNode[];
  /**
   * On Click Handler
   * This optional method is used to stop click events.
   *   If you have multiple related accordions
   *   you can manage which is allowed to be open
   */
  allowOnClickCallback?: (e: React.MouseEvent) => boolean;
  /**
   * Handles when the expand icon is pressed and returns new value
   */
  onExpandClick?: () => void;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const AccordionComponent = (
  {
    accordionIcon = 'chevron',
    badgeText,
    badgeVariant,
    border = true,
    buttonOnClick,
    buttonText,
    children,
    childrenMaxHeight,
    classNames = [],
    headingTitle = false,
    headingChildren,
    initialOpen = false,
    innerChildren,
    isExpanded,
    title,
    titleIcon,
    allowOnClickCallback = () => true,
    onExpandClick = () => undefined,
    ...props
  }: AccordionProps,
  ref: AccordionProps['ref'],
) => {
  // Warn for deprecated prop use
  if (buttonText) {
    console.warn('`buttonText` has been deprecated and is no longer supported.');
  }

  if (buttonOnClick) {
    console.warn('`buttonOnClick` has been deprecated and is no longer supported.');
  }

  if (childrenMaxHeight) {
    console.warn('`childrenMaxHeight` has been deprecated and is no longer supported.');
  }

  const [isOpen, setIsOpen] = useState(isExpanded ?? initialOpen);

  const contentRef = useRef(null);

  useEffect(() => {
    setIsOpen(isExpanded ?? initialOpen);
  }, [isExpanded]);

  useEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent): boolean => {
    let result = true;

    try {
      result = allowOnClickCallback(e);
    } catch {
      result = false;
    }

    return result;
  };

  const handleExpand = (e: React.MouseEvent) => {
    if (handleClick(e)) {
      onExpandClick();
      setIsOpen((value) => !value);
    }
  };

  const iconClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    handleExpand(e);
  };

  const classAccordion = 'lsux-accordion';
  const classHeader = `${classAccordion}__header`;
  const borderClass = border ? 'border' : 'border-none';
  const cnAccordion = [classAccordion, classNames];
  const cnHeader = cn({
    [`${classHeader}`]: true,
    [`${classHeader}--${borderClass}`]: true,
  });

  const cnChildren = cn({
    [`${classAccordion}__children`]: true,
    [`${classAccordion}__children--border`]: border,
    [`${classAccordion}__children--border-none`]: !border,
    [`${classAccordion}__children-expanded`]: isOpen,
    [`${classAccordion}__children-collapsed`]: !isOpen,
  });

  return (
    <Container {...props} ref={ref} classNames={cnAccordion}>
      <Container classNames={cnHeader} onClick={iconClick}>
        <Container>
          <Container flexbox alignItems="center">
            {titleIcon && <Icon name={titleIcon} classNames={['mr-4']} size="large" />}
            {headingTitle ? (
              <Heading as="T16" text={title} classNames={['mr-4']} />
            ) : headingChildren ? (
              <>{headingChildren}</>
            ) : (
              <Title text={title} textSize="large" textWeight="semibold" classNames={['mr-4']} />
            )}

            {badgeText && <Badge bold text={badgeText} variant={badgeVariant} />}
          </Container>
        </Container>
        <Container classNames={[`${classHeader}__toggle-icon-container`]}>
          {accordionIcon === 'chevron' ? (
            <Icon
              classNames={[`lsux-icon--chevron--${isOpen ? 'opened' : 'closed'}`]}
              color="N800"
              onClick={iconClick}
              size="medium"
              name={'arrow_chevron_down'}
            />
          ) : (
            <span>
              <Icon
                name="edit_add_plus"
                size="medium"
                classNames={[`lsux-icon--${accordionIcon}-plus--${isOpen ? 'opened' : 'closed'}`]}
                onClick={iconClick}
              />
              <Icon
                name="edit_remove_minus"
                size="medium"
                classNames={[`lsux-icon--${accordionIcon}-plus-minus`]}
                onClick={iconClick}
              />
            </span>
          )}
        </Container>
      </Container>
      <Container>
        {innerChildren && <div className={`${classAccordion}__inner-children-wrapper`}>{innerChildren}</div>}
      </Container>
      <Container ref={contentRef} classNames={cnChildren}>
        <>{children}</>
      </Container>
    </Container>
  );
};

/**
 * Accordions are layout components that can expand and collapse
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(AccordionComponent);
