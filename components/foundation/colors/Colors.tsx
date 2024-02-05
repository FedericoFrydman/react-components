import { FC } from 'react';
import { Text } from '../../atoms/text/Text';
import { Heading } from '../../atoms/heading/Heading';
import './colors-component.scss';

type Color = {
  colorType: string;
  typeColors: colorInfo[];
  typeDescription: string;
};

type colorInfo = {
  description?: string;
  hex: string;
  name: string;
  rgb: string;
};

export interface ColorProps {
  colors: Color[];
  sectionTitle?: string;
  sectionDescription?: string;
}

export const Colors: FC<ColorProps> = ({ colors, sectionTitle, sectionDescription }: ColorProps) => {
  return (
    <div className="color--wrapper">
      <div className="color--header">
        <Heading text={sectionTitle} as="T26" />
        <Text text={sectionDescription} className="color--description" />
      </div>
      {colors.map((color, index) => (
        <div key={index} className={`color--${color.colorType}`}>
          <div className="color--info-header">
            <Heading text={color.colorType} as="T20" />
            <Text text={color.typeDescription} classNames={['color--description']} />
          </div>
          <div className="color--info">
            {color.typeColors.map((sub, index) => (
              <div className="color--info-wrapper" key={index}>
                <div style={{ backgroundColor: sub.hex }}></div>
                <Text as="p" text={sub.name} classNames={['color--name']} />
                <Text as="p" text={sub.hex} classNames={['color--hex-cod']} />
                <Text as="p" text={sub.rgb} classNames={['color--rgb-cod']} />
                <Text as="p" text={sub.description} classNames={['color--description']} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
