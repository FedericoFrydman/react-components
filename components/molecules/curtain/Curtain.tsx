import { useEffect, useState, useRef, forwardRef, Ref, TransitionEvent } from 'react';
import cn from 'classnames';

import './curtain.scss';
import '../../assets/styles/utilities.scss';

export interface CurtainProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Callback when the animation for the curtain completes a close
   */
  onClose?: () => void;
  /**
   * Callback when the animation for the curtain completes an open
   */
  onOpen?: () => void;
  /**
   * Indicates that the curtain is open (vs. closed)
   */
  isOpen?: boolean;
  /**
   * Indicates that the curtain should animate on its initial render; this means that if isOpen is true the
   * curtain will initial render closed and animate to the desired open state
   */
  initialAnimate?: boolean;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Fixed indicates that the content is fixed to the background, with the curtain revealing it. If fixed is false the content will scroll
   * with the curtain.
   */
  fixed?: boolean;

  /**
   * Content of the curtain
   */
  children: React.ReactNode;

  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const CurtainComponent = (
  {
    onClose,
    onOpen,
    initialAnimate = true,
    isOpen = false,
    classNames = [],
    children,
    fixed = false,
    ...props
  }: CurtainProps,
  ref: CurtainProps['ref'],
) => {
  // Current status of the curtain
  const [currentIsOpen, setCurrentIsOpen] = useState(initialAnimate ? !isOpen : isOpen);

  // Indicates the curtain has been rendered once; allowing the content to be measured
  const [rendered, setRendered] = useState(false);

  // Reference to the content
  const c = useRef(null);

  // Indicates the item has rendered once
  useEffect(() => {
    // Set that we have rendered; we can now measure the content
    setRendered(true);

    // If the initial state was to animate we toggle it to the proper value
    if (initialAnimate) {
      setCurrentIsOpen((value) => !value);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // See if the caller wants to toggle the open state; this will animate to the desired state
  if (rendered && isOpen != currentIsOpen) {
    setCurrentIsOpen((value) => !value);
  }

  // Listen for the end of the animation; this will call the right callback
  const onTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName != 'height') return;

    if (currentIsOpen && onOpen) {
      onOpen();
    } else if (!currentIsOpen && onClose) {
      onClose();
    }
  };

  // Get the rendering tweaks for the curtain; for an open curtain we can't get the heights till
  // it has been rendered once
  let curtainStyle = { height: 0, maxHeight: 0 };
  if (rendered && currentIsOpen) {
    curtainStyle = { height: c.current.offsetHeight, maxHeight: c.current.offsetHeight };
  }

  // Get the rendering tweaks for the content; a non-fixed curtain needs absolute
  // positioning. But this means we don't calculate a natural width and height so
  // until a render pass is done we can't set the this attribute
  let contentStyle = {};
  if (!rendered) {
    contentStyle = { left: '0', right: '0', top: 0 };
  } else if (fixed) {
    contentStyle = { left: '0', right: '0', top: 0 };
  } else {
    contentStyle = { bottom: 0, left: '0', position: 'absolute', right: '0' };
  }

  return (
    <div
      {...props}
      className={cn('lsux-curtain', classNames)}
      style={{ ...curtainStyle, ...props.style }}
      onTransitionEnd={onTransitionEnd}
      ref={ref}
    >
      <div ref={c} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

/**
 * The Curtain component works as a container that has an expand animation when open and shows its content.
 */

export const Curtain = forwardRef<HTMLDivElement, CurtainProps>(CurtainComponent);
