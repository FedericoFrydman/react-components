import { FC, useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import { NavMenuItem, NavMenuProps, NavMenuSection } from '../NavigationMenu';
import './desktop-nav-menu.scss';

export const DesktopNavMenu: FC<NavMenuProps> = ({ sections }: NavMenuProps) => {
  const classNavMenuDesktop = 'lsux-nav-menu-desktop';
  const cnNavMenuDesktop = cn(classNavMenuDesktop);

  const classNavMenuSectionList = `${classNavMenuDesktop}__section-list`;
  const classNavMenuLinkList = `${classNavMenuDesktop}__link-list`;

  const classNavMenuButton = `${classNavMenuDesktop}__button`;

  const expandedBorderClassName = `${classNavMenuDesktop}--expanded_border`;
  const nonExpandedBorderClassName = `${classNavMenuDesktop}--non_expanded_border`;

  const [selectedSection, setSelectedSection] = useState<NavMenuSection | null>(null);
  const [isLinkListVisible, setIsLinkListVisible] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const leftNavRef = useRef<HTMLElement>(null);
  const rightNavRef = useRef<HTMLElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const getHeightPromise = (ref: React.RefObject<HTMLElement>) => {
      return new Promise((resolve) => {
        if (ref.current) {
          const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
              if (entry.target === ref.current) {
                const buttons = ref.current.querySelectorAll('button');
                const buttonsHeightList = Array.from(buttons).map((button) => button.clientHeight);
                const totalButtonsHeight = buttonsHeightList.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0,
                );
                const totalNavHeight = totalButtonsHeight + 34;
                resolve(totalNavHeight);
              }
            }
          });
          resizeObserver.observe(ref.current);
        } else {
          resolve(0);
        }
      });
    };

    Promise.all([getHeightPromise(leftNavRef), getHeightPromise(rightNavRef)]).then(
      ([leftNavHeight, rightNavHeight]: [number, number]) => {
        setMaxHeight(Math.max(leftNavHeight, rightNavHeight));
      },
    );
  }, [selectedSection]);

  function handleSelectSection(e: React.MouseEvent<HTMLElement>, section: NavMenuSection) {
    setSelectedSection(section);
    setIsLinkListVisible(true);
    setIsExpanded(true);
  }

  function handleSelectLink(e: React.MouseEvent<HTMLButtonElement>, href: string) {
    console.log('Link selected:', href);
  }

  function handleMouseLeaveSectionList() {
    setIsLinkListVisible(false); // Hide link list on mouse leave
    setIsExpanded(false);
  }

  function renderSectionList() {
    const sectionListClasses = cn(classNavMenuSectionList, {
      [expandedBorderClassName]: isExpanded,
      [nonExpandedBorderClassName]: !isExpanded,
    });

    return (
      <nav
        className={sectionListClasses}
        onMouseLeave={handleMouseLeaveSectionList}
        style={{ minHeight: `${maxHeight}px` }}
        ref={leftNavRef}
      >
        {sections?.map((section) => (
          <button
            key={section?.id}
            id={section?.id}
            onMouseEnter={(e) => {
              handleSelectSection(e, section);
            }}
            className={cn(classNavMenuButton, {
              [`${classNavMenuButton}--selected`]: selectedSection?.id === section.id,
            })}
          >
            {section?.label}
          </button>
        ))}
      </nav>
    );
  }

  function renderLinkList() {
    return (
      <nav
        key={selectedSection?.id}
        className={classNavMenuLinkList}
        onMouseEnter={(e) => {
          handleSelectSection(e, selectedSection);
        }}
        style={{ minHeight: `${maxHeight}px` }}
        ref={rightNavRef}
      >
        <div className={`${classNavMenuDesktop}__vertical-line`}></div>
        <ul>
          {selectedSection.items?.map(({ id, href, label }: NavMenuItem) => {
            return (
              <li key={id}>
                <button
                  key={id}
                  id={id}
                  onClick={(e) => {
                    return handleSelectLink(e, id);
                  }}
                  className={`${classNavMenuDesktop}__button`}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <>
      <p>{selectedSection ? `${selectedSection?.id}: ${selectedSection?.label}` : 'None selected'}</p>
      <nav className={cnNavMenuDesktop}>
        {renderSectionList()}
        {selectedSection && isLinkListVisible && renderLinkList()}
      </nav>
    </>
  );
};
