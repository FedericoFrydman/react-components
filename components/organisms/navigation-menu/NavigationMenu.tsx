import { FC } from 'react';
import { DesktopNavMenu } from './desktop-nav-menu/DesktopNavMenu';

export interface NavMenuItem {
  id: string;
  label: string;
  href: string;
  alt?: string;
}

export interface NavMenuSection {
  id: string;
  label: string;
  items: NavMenuItem[];
}

export interface NavMenuProps {
  sections: NavMenuSection[];
}

export const NavigationMenu: FC<NavMenuProps> = (props) => {
  // For mobile devices, return MobileNavigationMenu
  // For desktop devices, return DesktopNavigationMenu
  // const isMobile = useMedia(['(max-width: 1023px)'], [true], false);
  // return isMobile ? (
  //   <div>
  //     <p>Mobile Menu</p>
  //   </div>
  // ) : (
  //   <DesktopNavMenu {...props} />
  // );

  return <DesktopNavMenu {...props} />;
};
