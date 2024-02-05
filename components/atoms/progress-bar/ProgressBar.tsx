import { HTMLProps, Ref, forwardRef } from 'react';
import cn from 'classnames';

import './ProgressBar.scss';

export type ProgressBarType = 'progress' | 'loop';
export type ProgressNumber = number;

export interface ProgressBarProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  blocking?: boolean;
  classNames?: cn.Argument;
  progressBarType: ProgressBarType;
  progressNumber: ProgressNumber;
  ref?: Ref<HTMLDivElement>;
}
const ProgressBarComponent = (
  { progressBarType = 'progress', progressNumber = 50, blocking = false, classNames = [] }: ProgressBarProps,
  ref: ProgressBarProps['ref'],
) => {
  const progressBarClass = `lsux-progressbar lsux-inside-bar--${progressBarType}`;

  if (blocking && progressBarType === 'progress') {
    return (
      <div>
        <progress value={`${progressNumber}`} max={100} />
      </div>
    );
  }
  if (blocking && progressBarType === 'loop') {
    return (
      <div className="lsux-progressbar">
        <div className={cn(progressBarClass, classNames)} style={{ width: `${progressNumber}` }} ref={ref}></div>
      </div>
    );
  }
  if (blocking === false && progressBarType === 'progress') {
    return (
      <div>
        <progress value={`${progressNumber}`} max={100} />
      </div>
    );
  } else {
    return (
      <div className="lsux-progressbar">
        <div className={cn(progressBarClass, classNames)} style={{ width: `${progressNumber}` }} ref={ref}></div>
      </div>
    );
  }
};

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(ProgressBarComponent);
