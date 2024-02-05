import { FC } from 'react';
import { ICON_NAMES_V1 } from '../../assets/icons/icons-v1';
import { ICON_NAMES_V2 } from '../../assets/icons/icons-v2';
import { Heading } from '../heading/Heading';
import { Icon, IconLibraryVersion } from './Icon';
import { Text } from '../text/Text';

const groupByCategories = (libraryVersion: IconLibraryVersion): Record<string, string[]>[] => {
  const category: Record<string, string[]> = {};
  const result: Record<string, string[]>[] = [];

  const ICON_NAMES = libraryVersion === '1' ? ICON_NAMES_V1 : ICON_NAMES_V2;

  ICON_NAMES.forEach((icon) => {
    let key: string = icon.split('_')[0];

    if (libraryVersion === '1') {
      switch (key) {
        case 'action':
          key = 'Action';
          break;
        case 'alert':
          key = 'Alert';
          break;
        case 'comm':
          key = 'Communication';
          break;
        case 'cs':
          key = 'Commercial Shield';
          break;
        case 'file':
          key = 'File';
          break;
        case 'id':
          key = 'IDShield';
          break;
        case 'logo':
          key = 'Logos';
          break;
        case 'ls':
          key = 'Legalshield';
          break;
        case 'nav':
          key = 'Navigation';
          break;
        case 'object':
          key = 'Object';
          break;
        case 'payment':
          key = 'Payment';
          break;
        default:
          break;
      }
    } else if (libraryVersion === '2') {
      switch (key) {
        case 'apps':
          key = 'Apps';
          break;
        case 'arrows':
          key = 'Arrows';
          break;
        case 'badges':
          key = 'Badges';
          break;
        case 'calendar':
          key = 'Calendar';
          break;
        case 'comm':
          key = 'Communication';
          break;
        case 'edit':
          key = 'Edit';
          break;
        case 'feedback':
          key = 'Feedback';
          break;
        case 'file':
          key = 'File';
          break;
        case 'filetypes':
          key = 'File Types';
          break;
        case 'interface':
          key = 'Interface';
          break;
        case 'live':
          key = 'Live';
          break;
        case 'logos':
          key = 'Logos';
          break;
        case 'marks':
          key = 'Marks';
          break;
        case 'media':
          key = 'Media';
          break;
        case 'medialogo':
          key = 'Media Logos';
          break;
        case 'menu':
          key = 'Menu';
          break;
        case 'nav':
          key = 'Navigation';
          break;
        case 'partnerships':
          key = 'Partnerships';
          break;
        case 'payments':
          key = 'Payments';
          break;
        case 'social':
          key = 'Social';
          break;
        case 'system':
          key = 'System';
          break;
        case 'user':
          key = 'User';
          break;
        case 'warning':
          key = 'Warning';
          break;
        default:
          break;
      }
    }

    if (!category[key]) {
      category[key] = [];
      result.push({ [key]: category[key] });
    }
    category[key].push(icon);
  });
  return result;
};

export const IconDoc: FC<{ libraryVersion: IconLibraryVersion }> = ({
  libraryVersion,
}: {
  libraryVersion: IconLibraryVersion;
}) => {
  return (
    <>
      {groupByCategories(libraryVersion).map((category) => {
        const title = Object.keys(category)[0];
        return (
          <div key={title} className="mb-3">
            <Heading as="T16" text={title} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {category[title].map((icon) => {
                return (
                  <div key={icon} className="m-5" style={{ textAlign: 'center', width: '7.5rem' }}>
                    <Icon id={icon} size="large" name={icon} />
                    <label htmlFor={icon} style={{ display: 'block' }}>
                      <Text textSize="small" text={icon} />
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
