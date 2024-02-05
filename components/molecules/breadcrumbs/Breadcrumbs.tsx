import { forwardRef, HTMLProps, Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import cn from 'classnames';

import './Breadcrumbs.scss';
import { Icon } from '../../atoms/icon/Icon';
import { useOutsideClick } from '../../foundation/utilities';

export interface Crumb {
  label: string;
  link?: string;
  pplsiEventId?: string;
}

export interface BreadcrumbsProps extends Omit<HTMLProps<HTMLDivElement>, 'css' | 'onClick'> {
  /**
   * An array of labels and link data representing each item in the crumbs
   */
  crumbs: Crumb[];
  /**
   * Maximum number of crumbs displayed at the tail.  If the crumbs length is greater than 2 more than this
   * an ellipses will be shown between the first item and the tail.
   */
  maxTail: number;
  /**
   * Callback function when a crumb is clicked. Data passed is the link data
   * associated with the crumb
   */
  onClick: (link: string) => void;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const BreadcrumbsComponent = (
  { crumbs, maxTail = 0, onClick, classNames = [], ...props }: BreadcrumbsProps,
  ref: BreadcrumbsProps['ref'],
) => {
  // The last item in the crumbs should not have a link; this is nulled for sanity
  crumbs[crumbs.length - 1].link = undefined;

  // State representing if there is an open link menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Using popper to handle the menu
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  // When the ellipses is clicked, the menu is opened
  const ellipsesClicked = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  // Call back for a click outside of the menu
  useOutsideClick(
    popperElement,
    () => {
      if (menuOpen) setMenuOpen(false);
    },
    referenceElement,
  );

  const classCrumbs = 'lsux-crumbs';

  // Function that renders a breadcrumb link
  const crumblink = (crumb: Crumb, index?: number, array: Array<Crumb> = []) => {
    const labelElement = crumb.link ? (
      <a
        className={`${classCrumbs}__crumb--link`}
        data-pplsi-event-id={crumb.pplsiEventId}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick(crumb.link);
        }}
      >
        {crumb.label}
      </a>
    ) : (
      <span className={`${classCrumbs}__crumb--leaf`}>{crumb.label}</span>
    );
    return (
      <div key={crumb.label} className={`${classCrumbs}__crumb`}>
        {labelElement}
        {index !== array.length - 1 && <Icon name="arrow_chevron_right" size="small" />}
      </div>
    );
  };

  // Function that renders a bread crumb link in an open menu
  const menulink = (crumb: Crumb) => {
    return (
      <div key={crumb.label} style={{ padding: '8px' }}>
        <a
          className={`${classCrumbs}__crumb--link`}
          data-pplsi-event-id={crumb.pplsiEventId}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClick(crumb.link);
          }}
        >
          {crumb.label}
        </a>
      </div>
    );
  };

  if (maxTail != 0 && crumbs.length > maxTail + 2) {
    // Render breadcrumbs with an ellipses and menu
    const first = crumbs[0];
    const mid = crumbs.slice(1, crumbs.length - maxTail);
    const tail = crumbs.slice(crumbs.length - maxTail, crumbs.length);
    return (
      <div {...props} className={cn(`${classCrumbs}`, classNames)} ref={ref}>
        {crumblink(first)}
        <span>
          <a href="#" className={`${classCrumbs}__crumb--link`} ref={setReferenceElement} onClick={ellipsesClicked}>
            &#8230;
          </a>
          {menuOpen && (
            <div
              ref={setPopperElement}
              style={styles.popper}
              className={cn(`${classCrumbs}__dropdown-items--wrapper`, 'shadow300-bottom')}
              {...attributes.popper}
            >
              {mid.map(menulink)}
            </div>
          )}
        </span>
        <Icon name="arrow_chevron_right" size="small" />
        {tail.map(crumblink)}
      </div>
    );
  } else {
    // Render all the crumbs; no ellipse needed
    return (
      <div {...props} className={cn(`${classCrumbs}`, classNames)} ref={ref}>
        {crumbs.map(crumblink)}
      </div>
    );
  }
};

/**
 * Breadcrumbs is a form of secondary navigation typically locates below the page title.
 * It is a trail of links that describes the hierarchical relationship between current page and the overall structure.
 * Breadcrumbs help users navigate your product by understanding their path to current location and way to go back.
 */

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(BreadcrumbsComponent);
