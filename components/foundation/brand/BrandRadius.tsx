import { FC } from 'react';
import './brand.scss';

export interface BrandRadiusProps {
  text?: string;
}
export const BrandRadius: FC<BrandRadiusProps> = ({ text = 'Example' }: BrandRadiusProps) => {
  return <div className="brandRadiusBox">{text}</div>;
};
