import { FC } from 'react';
import './brand.scss';

export interface BrandColorProps {
  shade?: '300' | '200' | '100' | '50';
}
export const BrandColors: FC<BrandColorProps> = ({ shade = '200' }: BrandColorProps) => {
  const c = 'brandColorPrimary' + shade;
  return <div className={c}></div>;
};
