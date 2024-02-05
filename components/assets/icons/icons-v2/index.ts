import { V2_APPS_ICONS } from './apps';
import { V2_ARROW_ICONS } from './arrows';
import { V2_BADGES_ICONS } from './badges';
import { V2_CALENDAR_ICONS } from './calendar';
import { V2_COMMUNICATION_ICONS } from './communication';
import { V2_EDIT_ICONS } from './edit';
import { V2_FEEDBACK_ICONS } from './feedback';
import { V2_FILE_ICONS } from './file';
import { V2_FILE_TYPES_ICONS } from './file-types';
import { V2_INTERFACE_ICONS } from './interface';
import { V2_LIVE_ICONS } from './live';
import { V2_LOGOS_ICONS } from './logos';
import { V2_MARKS_ICONS } from './marks';
import { V2_MEDIA_ICONS } from './media';
import { V2_MEDIALOGO_ICONS } from './media-logos';
import { V2_MENU_ICONS } from './menu';
import { V2_NAVIGATION_ICONS } from './navigation';
import { V2_PARTNERSHIPS_ICONS } from './partnerships';
import { V2_PAYMENTS_ICONS } from './payments';
import { V2_SOCIAL_ICONS } from './social';
import { V2_SYSTEM_ICONS } from './system';
import { V2_USER_ICONS } from './user';
import { V2_WARNING_ICONS } from './warning';

export const ICON_COLORS_V2 = [
  'default',
  'B10',
  'B100',
  'B200',
  'B300',
  'G10',
  'G100',
  'G200',
  'G300',
  'N00',
  'N50',
  'N200',
  'N300',
  'N500',
  'N600',
  'N700',
  'N800',
  'N1000',
  'P10',
  'P100',
  'P200',
  'P300',
  'R10',
  'R100',
  'R200',
  'R300',
  'Y10',
  'Y100',
  'Y200',
  'Y300',
  'BRAND50',
  'BRAND100',
  'BRAND200',
  'BRAND300',
];

export type V2IconSetName =
  | 'apps'
  | 'arrow'
  | 'calendar'
  | 'communication'
  | 'edit'
  | 'file'
  | 'interface'
  | 'live'
  | 'media'
  | 'menu'
  | 'navigation'
  | 'social'
  | 'system'
  | 'user'
  | 'warning';

export const IconsV2: { [char: string]: string } = {
  ...V2_APPS_ICONS,
  ...V2_ARROW_ICONS,
  ...V2_BADGES_ICONS,
  ...V2_CALENDAR_ICONS,
  ...V2_COMMUNICATION_ICONS,
  ...V2_EDIT_ICONS,
  ...V2_FEEDBACK_ICONS,
  ...V2_FILE_ICONS,
  ...V2_FILE_TYPES_ICONS,
  ...V2_INTERFACE_ICONS,
  ...V2_LIVE_ICONS,
  ...V2_LOGOS_ICONS,
  ...V2_MARKS_ICONS,
  ...V2_MEDIA_ICONS,
  ...V2_MEDIALOGO_ICONS,
  ...V2_MENU_ICONS,
  ...V2_NAVIGATION_ICONS,
  ...V2_PARTNERSHIPS_ICONS,
  ...V2_PAYMENTS_ICONS,
  ...V2_SOCIAL_ICONS,
  ...V2_SYSTEM_ICONS,
  ...V2_USER_ICONS,
  ...V2_WARNING_ICONS,
};

export const ICON_NAMES_V2: string[] = Object.keys(IconsV2);

export type IconNamesV2 = (typeof IconsV2)[number];

export type IconColorsV2 = (typeof ICON_COLORS_V2)[number];
