import { HTMLProps } from 'react';
import { default as SkeletonReact } from 'react-loading-skeleton';
import './skeleton.scss';
import 'react-loading-skeleton/dist/skeleton.css';

export interface SkeletonProps extends Omit<HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Applies a count to create multiple skeletons.
   */
  count?: number;
  /**
   * Applies width to the skeleton.
   */
  width?: string;
  /**
   * Applies height to the skeleton.
   */
  height?: string;
  /**
   * Applies circular shape to the skeleton.
   * @default false
   */
  circle?: boolean;
}

/* A function that takes in props and returns a skeleton component. */
export const Skeleton = ({ count, width, height, circle = false, ...props }: SkeletonProps) => {
  return <SkeletonReact {...props} width={width} height={height} count={count} circle={circle} />;
};

/**
 * Use our  Skeleton to show users a task is loading or in progress, and will take an indeterminate amount of time. There should only be a single Skeleton on a page at one time.
 */
