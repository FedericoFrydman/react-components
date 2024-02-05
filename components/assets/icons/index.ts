export * from './icons-v1';
export * from './icons-v2';

import { IconsV1, ICON_COLORS_V1, ICON_NAMES_V1 } from './icons-v1';
import { IconsV2, ICON_COLORS_V2, ICON_NAMES_V2 } from './icons-v2';

export type IconSet = { [name: string]: string };

export const getLibraryVerisonByIcon = (name: string): string | null => {
  if (Object.keys(IconsV2).includes(name)) {
    return '2';
  } else if (Object.keys(IconsV1).includes(name)) {
    return '1';
  } else {
    return null;
  }
};

export const ICON_NAMES = [...ICON_NAMES_V1, ...ICON_NAMES_V2];

export const ICON_COLORS_ALL = [...ICON_COLORS_V1, ...ICON_COLORS_V2];

export type IconColors = (typeof ICON_COLORS_ALL)[number];

export const Icons = { ...IconsV1, ...IconsV2 };
