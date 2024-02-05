import { FC } from 'react';
import cn from 'classnames';

import { IconLibraryVersion } from '../../../components/atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

import './elevations.scss';

interface ElevationBox {
  boxClass: string;
  title: string;
  libraryVersion: IconLibraryVersion;
}

const elevationBoxes: ElevationBox[] = [
  {
    boxClass: 'shadow100',
    libraryVersion: '1',
    title: 'Shadow 100',
  },
  {
    boxClass: 'shadow200',
    libraryVersion: '1',
    title: 'Shadow 200',
  },
  {
    boxClass: 'shadow300',
    libraryVersion: '1',
    title: 'Shadow 300',
  },
  {
    boxClass: 'shadow400',
    libraryVersion: '1',
    title: 'Shadow 400',
  },
  {
    boxClass: 'elevation-1',
    libraryVersion: '2',
    title: 'Elevation 1',
  },
  {
    boxClass: 'elevation-2',
    libraryVersion: '2',
    title: 'Elevation 2',
  },
  {
    boxClass: 'elevation-3',
    libraryVersion: '2',
    title: 'Elevation 3',
  },
  {
    boxClass: 'elevation-4',
    libraryVersion: '2',
    title: 'Elevation 4',
  },
];

export interface ElevationsProps {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  libraryVersion?: IconLibraryVersion;
}

export const Elevations: FC<ElevationsProps> = ({ direction, libraryVersion }: ElevationsProps) => {
  const boxes = elevationBoxes.filter((b) => b.libraryVersion === libraryVersion);
  return (
    <div className="elevation--wrapper">
      {boxes.map((box, index) => {
        const boxClass = box.libraryVersion === '1' ? `${box.boxClass} - ${direction}` : `${box.boxClass}`;
        const boxTitle = box.libraryVersion === '1' ? `${box.title} ${direction}` : box.title;
        return (
          <div key={index} className="mr-4">
            <Text text={boxTitle} />
            <div className={cn('elevation--box', boxClass, 'my-3')}></div>
            <Text text={boxClass} />
          </div>
        );
      })}
    </div>
  );
};
