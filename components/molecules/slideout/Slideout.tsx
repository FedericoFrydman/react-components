import { useRef, Ref, useState, forwardRef, CSSProperties } from 'react';
import cn from 'classnames';

import './Slideout.scss';
import { Button } from '../button/Button';
import '../../assets/styles/shadows.scss';
import { useOutsideClick } from '../../foundation/utilities';

export type SlideoutSide = 'top' | 'bottom' | 'left' | 'right';

export type SlideoutCloseButton = 'none' | 'float' | 'block';

export interface SlideoutProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * The children of the slideout
   */
  children: React.ReactNode;
  /**
   * The side of the screen the slideout emerges from
   */
  side?: SlideoutSide;
  /**
   * Size of the slideout. This is the width (for top/bottom) or height (for left/right)
   */
  size?: number;
  /**
   * Close Button rendering type
   */
  closeButton?: SlideoutCloseButton;
  /**
   * This indicates that clicking outside the slideout invokes the close function
   */
  autoClose?: boolean;
  /**
   * This indicates that clicking outside the slideout blocks input while open
   */
  modal?: boolean;
  /**
   * Open
   */
  isOpen?: boolean;
  /**
   * Close function
   */
  closeFunction?: () => void;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const SlideoutComponent = (
  {
    children,
    side = 'left',
    size = 300,
    closeButton = 'none',
    autoClose = false,
    isOpen = false,
    modal = true,
    classNames,
    closeFunction,
    ...props
  }: SlideoutProps,
  ref: SlideoutProps['ref'],
) => {
  const LSDS_HAMBURGER_ID = 'lsdsHamburgerId';
  let s: CSSProperties = {};
  let b: CSSProperties = {};
  const [isClosing, setIsClosing] = useState(false);

  const classBlocker = 'slideout-blocker';
  const cnBlocker = cn({ [classBlocker]: modal });

  const classSlideout = 'lsux-slideout';
  const cnSlideout = cn(
    {
      [`${classSlideout}`]: true,
      [`${classSlideout}--${side}`]: side,
      [`shadow200-bottom`]: isOpen && !isClosing && side === 'top',
      [`shadow200-left`]: isOpen && !isClosing && side === 'right',
      [`shadow200-right`]: isOpen && !isClosing && side === 'left',
      [`shadow200-top`]: isOpen && !isClosing && side === 'bottom',
    },
    classNames,
  );

  // If we are open and not in the process of closing, our style indicates the open position
  if (isOpen && !isClosing) {
    if (side === 'top') {
      s = { height: size + 'px', top: '0px' };
    } else if (side === 'bottom') {
      s = { bottom: '0px', height: size + 'px' };
    } else if (side === 'left') {
      s = { left: '0px', width: size + 'px' };
    } else if (side === 'right') {
      s = { right: '0px', width: size + 'px' };
    }
    b = { height: '100%', width: '100%' };
    // If we are closed or not in the process of closing, our style indicates the closed position
  } else {
    if (side === 'top') {
      s = { height: size + 'px', top: '-' + size + 'px' };
    } else if (side === 'bottom') {
      s = { bottom: '-' + size + 'px', height: size + 'px' };
    } else if (side === 'left') {
      s = { left: '-' + size + 'px', width: size + 'px' };
    } else if (side === 'right') {
      s = { right: '-' + size + 'px', width: size + 'px' };
    }
    b = { height: '0%', width: '0%' };
  }

  // Call back for a click outside of the menu
  const innerRef = useRef();
  /**
   * This ref is a workaround. It's used to enable the Navigation component's Slideout
   * usage to support both React 17 and React 18 rendering in a non-breaking way.
   * With this ref, only clicks that are both outside of the hamburger menu and outside
   * of the slideout will auto close it.
   * Without this ref, due to React 18 batching state updates in more scenarios (particularly for
   * state updates that are triggered by native event handlers, which is how the hamburger menu
   * opens), React 18 hamburger menu clicks both open and close the slideout at
   * the same time, making it appear like nothing happened.
   * See the React docs for more information:
   * https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#automatic-batching
   */
  const hamburgerRef = useRef(document.getElementById(LSDS_HAMBURGER_ID));

  const closeButtonClick = () => {
    if (isOpen && !isClosing) {
      setIsClosing(true);
      setTimeout(function () {
        if (closeFunction) {
          setIsClosing(false);
          closeFunction();
        }
      }, 300);
    }
  };

  useOutsideClick(
    innerRef,
    () => {
      if (autoClose) {
        closeButtonClick();
      }
    },
    autoClose ? hamburgerRef : null,
  );

  // eslint-disable-next-line
  const noClick = () => {};

  return (
    <div
      {...props}
      className={cnBlocker}
      style={{ ...b, ...props.style }}
      onClick={modal ? noClick : undefined}
      ref={ref}
    >
      <div ref={innerRef} className={cnSlideout} style={s}>
        {isOpen || isClosing ? (
          <div>
            {closeButton != 'none' && (
              <div className={cn(closeButton === 'block' ? 'slideout-button-block' : 'slideout-button-float')}>
                <Button
                  iconLeft="action_close"
                  iconSize="medium"
                  type="button"
                  variant="tertiary"
                  onClick={closeButtonClick}
                  disabled={isClosing}
                  classNames={['button--icon-only-no-pad']}
                />
              </div>
            )}
            {children}
          </div>
        ) : (
          <div>
            {isOpen && 'Open'} | {isClosing && 'Closing'}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Slideouts are animated palettes that come from the top/left/right/bottom.
 * The slideout can be configured with a close button, and/or to automatically close upon a click.
 */

export const Slideout = forwardRef<HTMLDivElement, SlideoutProps>(SlideoutComponent);
