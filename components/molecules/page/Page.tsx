import { FC } from 'react';
import cn from 'classnames';

import './Page.scss';
import { Button } from '../button/Button';

export interface PageProps {
  /**
   * How many items are displayed in each bucket.  A value of one displays items as 1 2 3 etc.  A value of 5 displays
   * as 1-5 6-10 11-15 etc.
   */
  bucketSize: number;
  /**
   * Current index of selected bucket. If bucketSize is 1, this is the current page too.
   */
  currentBucket: number;
  /**
   * Maxium number of buckets to display in a run before ellipsis are used for holes to the beginning
   * and end.
   *
   * Note: The system may display up to 2 more in a run, as displaying an elippses plus start/end
   * takes the same number of "slots" anyway.
   */
  maxDisplay: number;
  /**
   * Total number of items we are controlling. This is independent of the buckets.
   */
  numItems: number;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Callback for when a bucket item is clicked
   */
  onClick: (bucketIndex: number) => void;
}

// Function to render an ellipsis
function get_ellipsis() {
  return <div className="page--ellipsis">&#8230;</div>;
}

// Function to render a page link
function get_page_link(
  currentBucket: number,
  index: number,
  numBuckets: number,
  bucketSize: number,
  numItems: number,
  onClick: (index: number) => void,
) {
  // Calculate the label to display in the link (e.g. 1 or 1-5)
  let label = '';
  if (bucketSize === 1) {
    label = index.toString();
  } else {
    const start = (index - 1) * bucketSize + 1;
    if (start === numItems) {
      label = start.toString();
    } else {
      let end = start + bucketSize - 1;
      if (end > numItems) end = numItems;
      label = start.toString() + '-' + end.toString();
    }
  }

  if (index === currentBucket) {
    // The current item is display simply as text

    return (
      <span key={index.toString()} className="page--current">
        {label}
      </span>
    );
  } else {
    // Other items are displayed as links

    return (
      <a
        key={index.toString()}
        className="page--link"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick(index);
        }}
      >
        {label}
      </a>
    );
  }
}

// Render a range of page links
function get_page_links(
  currentBucket: number,
  start: number,
  end: number,
  numBuckets: number,
  bucketSize: number,
  numItems: number,
  onClick: (index: number) => void,
) {
  const a = [];
  for (let i: number = start; i <= end; i++) {
    a.push(i);
  }

  return a.map(function (item) {
    return get_page_link(currentBucket, item, numBuckets, bucketSize, numItems, onClick);
  });
}

export const Page: FC<PageProps> = ({
  numItems,
  bucketSize = 1,
  currentBucket = 1,
  maxDisplay = 5,
  classNames = [],
  onClick,
}: PageProps) => {
  if (numItems === null) numItems = 0;

  if (maxDisplay === null || maxDisplay <= 5) maxDisplay = 5;

  if (currentBucket === null || currentBucket < 1) currentBucket = 1;

  if (bucketSize === null || bucketSize < 1) bucketSize = 1;

  const numBuckets = Math.ceil(numItems / bucketSize);

  if (currentBucket > numBuckets) currentBucket = numBuckets;

  let items = null;

  // We can display all the items; doing so with an ellipsis and last one is moot
  if (numBuckets <= maxDisplay + 2) {
    items = <>{get_page_links(currentBucket, 1, numBuckets, numBuckets, bucketSize, numItems, onClick)}</>;

    // The current bucket is in the first batch. Display first batch, ellipsis, and last one
  } else if (currentBucket <= maxDisplay) {
    items = (
      <>
        {get_page_links(currentBucket, 1, maxDisplay, numBuckets, bucketSize, numItems, onClick)}
        {get_ellipsis()}
        {get_page_link(currentBucket, numBuckets, numBuckets, bucketSize, numItems, onClick)}
      </>
    );
    // The current is in the last batch. Display the first, the ellipsis, and the last batch
  } else if (currentBucket > numBuckets - maxDisplay) {
    items = (
      <>
        {get_page_link(currentBucket, 1, numBuckets, bucketSize, numItems, onClick)}
        {get_ellipsis()}
        {get_page_links(
          currentBucket,
          numBuckets - maxDisplay + 1,
          numBuckets,
          numBuckets,
          bucketSize,
          numItems,
          onClick,
        )}
      </>
    );
    // Display the first one, the ellipsis and the rest. How depends...
  } else {
    const start = Math.floor(currentBucket / maxDisplay) * maxDisplay + 1;

    // The rest can all just be rendered in the same space as another ellipsis and the last item
    if (start + maxDisplay + 2 > numBuckets) {
      items = (
        <>
          {get_page_link(currentBucket, 1, numBuckets, bucketSize, numItems, onClick)}
          {get_ellipsis()}
          {get_page_links(currentBucket, start, numBuckets, numBuckets, bucketSize, numItems, onClick)}
        </>
      );
      // Render the current batch, the ellipsis, and the last one
    } else {
      items = (
        <>
          {get_page_link(currentBucket, 1, numBuckets, bucketSize, numItems, onClick)}
          {get_ellipsis()}
          {get_page_links(currentBucket, start, start + maxDisplay - 1, numBuckets, bucketSize, numItems, onClick)}
          {get_ellipsis()}
          {get_page_link(currentBucket, numBuckets, numBuckets, bucketSize, numItems, onClick)}
        </>
      );
    }
  }

  return (
    <div className={cn('page', classNames)}>
      {numBuckets > maxDisplay + 2 && (
        <Button
          variant="tertiary"
          iconLeft="arrow_chevron_left_duo"
          disabled={currentBucket <= maxDisplay}
          onClick={() => onClick(currentBucket - maxDisplay)}
        />
      )}
      <Button
        variant="tertiary"
        iconLeft="arrow_chevron_left"
        disabled={currentBucket <= 1}
        onClick={() => onClick(currentBucket - 1)}
      />
      {items}
      <Button
        variant="tertiary"
        iconRight="arrow_chevron_right"
        disabled={currentBucket >= numBuckets}
        onClick={() => onClick(currentBucket + 1)}
      />
      {numBuckets > maxDisplay + 2 && (
        <Button
          variant="tertiary"
          iconRight="arrow_chevron_right_duo"
          disabled={currentBucket >= numBuckets - maxDisplay + 1}
          onClick={() => onClick(currentBucket + maxDisplay)}
        />
      )}
    </div>
  );
};
