import { useEffect, MutableRefObject } from 'react';

export const useOutsideClick = (
  ref: MutableRefObject<HTMLElement>,
  callback: (e: MouseEvent) => void,
  siblingRef?: MutableRefObject<HTMLElement> | null,
): void => {
  const handleClick = (e: MouseEvent) => {
    if (e.target instanceof Element) {
      if (ref instanceof Element) {
        if (!ref.contains(e.target) && !siblingRef) {
          callback(e);
        } else if (siblingRef instanceof Element && !siblingRef.contains(e.target)) {
          callback(e);
        }
      }

      if (ref.current) {
        if (!ref.current.contains(e.target)) {
          if (siblingRef?.current) {
            if (!siblingRef.current.contains(e.target)) {
              callback(e);
            }
          } else {
            callback(e);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (!!ref) {
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  });
};
