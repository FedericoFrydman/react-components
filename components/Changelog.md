# Release Notes

---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)

## [v4.0.0] - 2023-XX-XX

## Breaking Changes

- `Select` component is now single-select only and no longer supports multi-select functionality. This has been moved to the `MultiSelect` component. This introduces a few sub-components to the `Select` control: `SelectItem`, `SelectGroup`, `SelectLabel`, and `SelectSeparator`. The following props have been updated or removed:
  - `displayOption` has been removed
  - `options` has been removed and replaced with using children props
  - `optionsSelected` has been removed
  - `nativeSelect` has been removed
  - `placeholderValue` has been removed
  - `onChange` has been replaced with `onValueChange` which returns a string
- `PlanCard` has been updated to use the new `Select` control and `onRegionSelect` now returns a ` string` instead of an `event`.
- `useForm` now uses the `MultiSelect` control instead of `Select`.

## Added

- `Select` component has been refactored to use [Radix Primitives](https://www.radix-ui.com/). It is now a single select component and the multi-select functionality has been moved to the `MultiSelect` component. There are a couple breaking changes:
- It comes with a few additional components:
  - `SelectItem` lets you add items directly into the component as children instead of using the options prop.
  - `SelectGroup` allows you to group items in a Select list.
  - `SelectSeparator` displays a line on the list to separate items.
  - `SelectLabel` is available to show text before a new group.
- `MultiSelect` component has been added and contains the multi-select input functionality.
- Introduced a new `Dropdown` component built upon Radix UI Primitives. This offers a more flexible and accessible dropdown experience, improving keyboard navigation, screen reader support, and customization. It contains new sub-components for more granular control and better semantic structuring: `Dropdown.Trigger`, `Dropdown.Portal`, `DropdownLabel`, `DropdownItem`, `DropdownCheckboxItem`, `DropdownRadioGroup`, `DropdownRadioItem`, `DropdownSeparator`, and `DropdownItemWithSubMenu`. The `Dropdown.Portal` component is added to render the dropdown items. It improves the dropdown experience by solving clipping and overflow issues common in dropdown menus. Added a `DropdownItemWithSubMenu` component for creating nested dropdowns. `DropdownCheckboxItem` and `DropdownRadioGroup`/`DropdownRadioItem` are added for using checkboxes and radio buttons within the dropdown.

## Changed

- Input components such as `Input`, `TextArea`, and `Select` are now using `border` instead of `box-shadow` for their border styling to improve browser compatibility. Border sizes have been standardized at 1px, including focus state borders.
- Improved accessibility and keyboard navigation as per the Radix UI Primitives library standards.

## Fixed

- Accessibility bugs with `Select` have been resolved.
- Missing validation styling in `Select` has been resolved.
- Fixed an issue with the `Navigation` component causing filled icons to stay filled after the item is de-selected.

## Removed

- Dropped several old props (`variant`, `iconLeft`, `iconColor`, `options`, `isOpen`, `disabled`, `widthLong`, `dropdownWidth`, `placement`, `preventOverflow`, `isMultiSelect`, `classNames`, `showArrow`, `shape`) in favor of more flexible sub-components and state control.
- Removed the dependency on popper.js for positioning the dropdown `menu`, as this is now managed by Radix UI Primitives.

## [v3.4.2] - 2023-07-04

## Fixed

- Fixed the phone button in BusinessCard
- Fixed phone number wrapping to display in one line in `BusinessCard` component

## [v3.4.1] - 2023-06-29

## Added

- Added data test id to MarketPicker to support test automation.
- Added always allowing tab navigation for `Select` component.
- Added phone number next to phone icon in the `BusinessCard` component.

## Changed

- `MarketPicker`: made the modal title a prop, centered it, and added padding below it.
- Removed `variant` deprecations in the `GridRow` component.
- Removed the hyperlink and click to call action from phone icon in `BusinessCard` component.

## [v3.4.0] - 2023-06-08

## Added

- Upgrade dependencies in package.json for some libraries.
- Added `isInitiallyExpanded` to `Navigation` so on initial render child items could be expanded.

## Fixed

- Fixed issue of missing exported variables (font sizes, colors, and filters) in `global-variables.scss`.

## [v3.3.4] - 2023-05-25

### Fixed

- Fixed the z-index of the `StickyHeading` component to appear under other components when imported.
- Fixed `Input` component issue occurring in mobile/Safari browsers
- Copy change for `PlanCard`

### Added

- Added plan recurrence to addons/supplements for `PlanCard`

## [v3.3.3] - 2023-05-18

### Added

- Added `With Two Billing Terms Tab` story to `PlanCard` component.
- Added `shape` control to `Dropdown` component's story.

### Fixed

- Fixed `Text` Component story `bold`
- Fixed the `stretch` prop in the `Pills Variant` story in `Tabs` component. Removed the custom styling for the billing terms tab in `PlanCard` component.
- Fixed `input` component issue occurring in mobile/Safari browsers
- Fixed `Navigation` component height by taking impersonation into account.
- Fixed `Plan Card` styling

### Changed

- Updated `BusinessCard` component default background color to match Figma.

## [v3.3.2] - 2023-05-04

### Added

- Added `shape` prop to the `Dropdown` component to allow for setting the component's shape.
- Exported `NavigationComponent` from UXF.
- Added new `StickyHeadingComponent`
- Added `State` and `Tier` dropdowns to the `PlanCard` component.
- Added `billing term switch` and `Tier Radio Button Group` to `PlanCard` component.

### Fixed

- Fixed font weight issue in `LinkContent` causing font weight to be higher when `linkContentStyle` is `menu`.
- Fixed an issue with the initial region state for the PlanCard.
- Fixed Select component console errors.

## [v3.3.1] - 2023-04-13

### Fixed

- Fixed issue in `MarketPicker` causing it not to work if mixed-case market value is passed in.
- Fixed missing prop spread on `Modal.Title`.
- Removed unnecessary `GridRow` deprecation warnings.
- Fixed `webkit` style to apply locally to `Modal` and `List` component.

## [v3.3.0] - 2023-03-22

### Added

- Added `headingChildren` to the Accordion component so that a React Element can be passed.
- Added native single select to `Select` component

### Changed

- Updated the styling on `PlanCard`, refactored its props, and added new components within it:
  - `PlanCardInfo`
  - `PlanCardRegionPicker`
  - `PlanCardAddOns`

### Fixed

- Fixes `Accordion` bug causing multiple accordions on a single page to be expanded when one is clicked.
- `FooterBreak` component is now exported.

## [v3.2.1] - 2023-03-XX

### Added

- Adds a `title` prop to the `PlanCardAddOns` in `PlanCard`.

### Changed

- Sub-components from `Card`, `Modal`, and `ListItemInput` are now exported.
- Updated `Select` component to add new styling and functionality with native, custom single select, and multi-selecet.

### Fixed

- Fixed a typings issue on sub-components, affecting `Card`, `ListItemInput`, and `Modal`.
- Exports `ModalActionsProps` which perviously weren't exported.
- Fixes prop spread on modal-blocker.
- `MarketingFooter` component now has `market` prop which is passed to `MarketPicker` component.

## [v3.2.0] - 2023-03-09

### Added

- Added `NavigationMenu` hover feature to main menu's buttons. Dynamically updated the height of the main and side navbar to adjust according to the number of items in the navbar. Styled the component to match the Figma design.
- Added address form example to Page Layouts folder in Storybook

### Fixed

- Fixed a bug related to `initialOpen` controller in `Accordion` component
- Restored the grey background color for hovered `Dropdown` options.

## [v3.1.0] - 2023-03-02

### Added

- Added `List`, `ListItem,` and `ListItemInput` components. These allow for easy creation of structured lists of data or controls. You can use a `<List>` component with `<ListItem>` components inside it to display text and data. For controls, you can use the `ListItemInput` component with the following options to create control lists: `<ListItemInput.Checkbox>`, `<ListItemInput.Radio>`, and `<ListItemInput.Switch>`.
- Added new marketing components including the following:
  - `BusinessCard`
  - `ProductCard`
  - `MarketingFooter`

### Changed

- `Tabs` component has a new variant named `tabs` and a new story named `Tabs`. The style of the `Pills` story has been updated per Figma design.

### Fixed

- Fix `Card` modal selectable controller. Removed `buttonVariant` from `Card` component's stories. Replaced selected card's boarder to `box-shadow` to match Figma design.

## [v3.0.0] - 2023-02-25

### Added

- Added new Media, Nav, and Brand logos.
- Added Spinner component automation tests
- `Icon`: Added new Media logos, Nav logos and Brand logos.
- Updated the README.md to add a link to the wiki that provides a comprehensive guide for writing automation tests..
- Update `Sidebar` styling to match the figma designs. Also changed Icons variables names.
- Update `Modal`, added custom scrollbar css styling to fix the scrollbar styling issue that occurred on some machines.

### Changed

- Major design refreshes have been applied to the following components:
  - `Button`
  - `Modal`
  - `Card`
  - `Accordion`
  - `FormField`
  - `Input`
  - `TextArea`
  - `Navigation`
- `Button` component changes:
  - `ButtonVariant` now has three variants: `primary`, `secondary` (previously `standard`), and `tertiary` (previously `link`). These prop changes are backwards compatible but will throw console warnings for the old values since they will be removed in a future version.
  - The `standard` variant has been renamed to `secondary`.
  - The `link` variant has been removed and replaced with `tertiary`.
  - The `destructive` boolean prop has replaced the `destructive` variant. It is functional on all button variants.
  - The colors now use the `brand.css` file from the Design Service for dynamic branding.
  - Breaking changes:
    - Removed: The `selected`, `social`, `long`, and `noPadding` props have been deprecated and removed. These functionalities are either automatic now or the function is achievable via other props.
    - Visual Change: The `shape` has been added to set the visual style of the button. Options are `round` and `rectangular`. It defaults to `rectangular`.
- `Modal` component has new styling and a few changes:
  - `<Modal.Actions>` can be used to show the buttons in the `Modal`. This is the new method of showing action buttons in the `Modal` and the previous props for this have been deprecated.
  - `<Modal.Title>` can be used to display a title in the `Modal` with the correct styling.
  - New Props: `maxHeight` and `maxWidth` now allow you to set those CSS properties without inline styling.
- `Card` component has major changes, including the following:
  - These props have been deprecated and replaced with sub-components (see below):
    - buttonText (see `Card.Actions`)
    - buttonVariant (see `Card.Actions`)
    - cardTextHeight (see `Card.Content`)
    - cardTitleHeight (see `Card.Title`)
    - imageAltText (see `Card.Image`)
    - imageURL (see `Card.Image`)
    - padding (see `Card.Content`)
    - text (see `Card.Content`)
    - title (see `Card.Title`)
  - Sub-components have been created to allow for more customization and cleaner props:
    - `Card.Content` allows you to add content with a default padding already in place
    - `Card.Title` lets you add a pre-styled title to the Card
    - `Card.Image` handles the styling for an image in the Card (such as border-radius with different card styles)
    - `Card.Actions` styles `Button` components and lets you easily align them
  - Unit tests, stores, and docs have been updated.
- `Accordion` component changes:
  - New styling has been applied per Design System 2.0 specs.
  - Animations have been added for the toggle icons `chevron` and `plus-sign`.
  - Breaking changes:
    - `childrenBackground` and `AccordionChildrenBackgroundColors` have been removed. The background(s) inherit from the parent. Use a `Container` component to set the color.
    - `buttonText` is no longer supported for the text adjacent to the toggle icon. `buttonOnClick` has been depreacated as well.
  - Unit tests have been added.
- `Input` component changes:
  - New styling has been applied per Design System 2.0 specs.
  - New Props:
    - `iconLeft` and `iconRight` allow for custom icons on either side.
    - `placeholder` allows you to set the `Input` placeholder value.
    - `prefix` allows you to set the text that appears before the input value and placeholder values (such as replacing the currency symbol at the start of a currency input). This only displays when a `NumberFormat` component is rendered.
  - Unit tests have been added.
- `FormField` component changes:
  - New styling has been applied per Design System 2.0 specs.
  - Unit tests have been added.
- `TextArea` component changes:
  - New styling has been applied per Design System 2.0 specs.
  - Unit tests have been added.
- `Checkbox` now has a prop named `variant` which has two values that determine its style: `filled` and `outlined`. The default value is `outlined`.
- `Icon` now has an optional prop named `noTransition` which allows you to disable the CSS transition.
- `Switch` component has new styling and the `size` prop now defaults to `large` to match the new design and increase accessibility.
- `LinkContent` now has updated styling and uses the brand file variables.
- `Navigation` component style has been updated. The icon variable names have also been changed.

### Fixed

- Fixed a styling bug on `Icon` component causing the app logos not to display when a custom color is selected.
- Fixed an import bug on `Icon` component references.
- Fixed a bug `Input` now masks the phone number value when type is `tel`.
- Fixed a bug with the image in `Card` causing the image not to always fill the entire Card width.
- Fixed a bug in `Alert` causing the close button to now show when `dismissible` is true and `onDismiss` is defined.

### Removed

- Breaking: The `ButtonGroup` component has been deprecated and removed.

## [v2.30.2] - 2023-02-22

### Fixed

- Fixed issue with the Navigation component's Slideout not opening when using React 18.
- Fixed issue with react and react-dom and their types version mismatch.

## [v2.30.1] - 2023-02-16

### Fixed

- Fixed issue with width sizing for card component by changing 'weight' to 'width'.

## [v2.30.0] - 2023-01-26

### Added

- Added `DataTable` component. Note: This is an experimental component and subject to changes.

### Fixed

- Fixed issue causing `Accordion` component not to display correctly.
- Fixed issue causing `GridRow` component `variant` prop value `half` to display incorrectly. Updated `GridRow` to throw deprecation warnings.

## [v2.29.2] - 2023-01-12

### Fixed

- Fixed issue in `Spinner` component causing `color` prop not to apply.
- Fixed issue in `Spinner` component causing it to display incorrectly when `blocking` prop is `true`.
- Fixed prop spread issue on components that could cause `className` prop to override `classNames`.
- Fixed bug in `Icon` causing some logo icons to display incorrectly.

### Added

- Added Storybook Accessibility Tests.
- Added `ProgressBar` component.
- Added CSS rule to `PlanCard` component.
- Added Alert component to Accordion component stories to replace browser alerts.
- Added interaction testing to `Accordion` component.
- Added interaction testing to `Dropdown` component.
- Added interaction testing to `Accordion` component's alerts
- Added DataTable v8 component
- Update Link component style

## [v2.29.1] - 2022-12-09

### Reverted

- Reverted global tippy styles imports that were placed in sass instead.

### Added

- Storybook test-runner which turns all of the stories into executable tests.

## [v2.29.0] - 2022-12-09

### Added

- Updated the `Spinner` component to reflect the styling in the Figma file.
- Added unit tests for `Breadcrumbs` component.
- Added unique data attributes to `Button`, `Link`, and `Breadcrumbs` components that will be used by analytics and test automation.
- Added `classnames` package to framework and replaced all conditional and concat fns on classes with the package's function.
- Added unit tests for 30+ components.
- Added unit test for pplsi event id data attributes for `Button`, `Link`, and `Breadcrumbs` components.
- Additional unit testing for `Button` component.

### Fixed

- Fixed issue with `Button` component causing no padding to appear between text and icon(s).

### Changed

- Changed importing global tippy styles. Placed them on sass instead.

## [v2.28.0] - 2022-11-17

### Added

- Added unit test to the `Text` component to cover that it render children.
- Added ability to display "plain" breadcrumbs without links.
- `npx uxf-utils` cli commands for converting to new pipeline and process including s3 dist builds and backfills
- Added initial automation test structure [#1149](https://github.com/LegalShield/adonis-ux-framework/pull/1149)
- Feedback icons from Design System 2.0 have been added.
- Additional unit tests have been added for the `Icon` component.

### Changed

- Changed the UXF rollup config output to cjs [#1140](https://github.com/LegalShield/adonis-ux-framework/pull/1140)
- Updated the package.json type to _not_ be "module" (defaults to "CommonJS") [#1149](https://github.com/LegalShield/adonis-ux-framework/pull/1149)
- Restored contents that were accidentally committed / reverted a faulty commit
- Feedback icons have been added to the `Alert` component for its various `severity` values.
- `README.md` update to include `direnv` and `.envrc` usage, & instructions. [#1160](https://github.com/LegalShield/adonis-ux-framework/pull/1160)
- Moved some `peerDependencies` to `dependencies` to avoid requiring apps to install uxf dependencies manually. [#1160](https://github.com/LegalShield/adonis-ux-framework/pull/1160)
- `Changelog.md` has moved to `./src/components` and is now hosted in Storybook.

### Fixed

- Fixed issue in Table Component causing broken cells when there are many columns. Change flexbox/grid/block to table display.
- Fixed Loader component. Missing prop in storybook.
- Icon color issue with payments has been resolved.
- Icon color issue with badges has been resolved.
- Storybook fixes for Tooltip and Tabs stories.
- Fixed Storybook components props [#1138](https://github.com/LegalShield/adonis-ux-framework/pull/1138)
- Fixed missing `ref` for `Title` component when `textSize` is `large`.
- Fixed forwardRef console errors for Skeleton, PlanCard and RadioGroup components
- Fixed Select input component clickable area
- Resolved Breadcrumbs unique key prop issue
- Fixed Breadcrumbs issue that was breaking alignment for "plain" breadcrumbs without links

## [2.27.7] - 2022-10-26

### Fixed

- Fixed issue causing icons with 'filled' in name to display incorrectly

## [2.27.6] - 2022-10-26

### Removed

- Remove the calendar input icon reference

## [2.27.5] - 2022-10-25

### Fixed

- Fixed styling bug in `Text` component
- Fix export issue with `Select` component

## [2.27.4] - 2022-10-24

### Changed

- `radio` component styles have been updated to reflect new styles for design system 2.0 - [based on figma](<https://www.figma.com/file/igDR59X3qcMEH1BkkxUcyB/Axiom-(Design-System)?node-id=70%3A986>)

## [2.27.3] - 2022-10-24

### Changed

- Styling change to `Stepper` to highlight active step

## [2.27.0] - 2022-10-24

### Changed

- `Snackbar` component changes:
  - `Toast` has been renamed to `Snackbar` but remains accessible with the name `Toast`.
  - `autoHideDuration` is now used to determine how long a temporary `Snackbar` is shown.
  - New `position` prop values have been added.
  - General styling improvements and bug fixes.
  - Minor breaking changes:
    - `actionText` and `onClick` have been removed. This component does not support actions presently.
    - `toastType` has been removed and replaced with `onDismiss` handler to achieve dismissible functionality.
- `Alert` component changes:
  - `bold` is no longer deprecated but it is recommended to only use this when showing an `Alert` within the `Snackbar` component.
  - General styling improvements and bug fixes.

## [2.26.5] - 2022-10-21

### Fixed

- `Button` component
  - Fixed style bug causing button `textSize` to be `body` instead of `large`.
  - Fixed style bug causing icons not to be centered on long buttons.
  - Updated unit tests to cover all `textSize` values.
- `Text` component
  - Fixed css causing font-weight and margin to be overriden.

## [2.26.4] - 2022-10-20

### Changed

- Renamed Toggle component to Switch with the Design System 2.0 styling. (these are backwards compatible and non-breaking)

## [2.26.3] - 2022-10-19

### Added

- "sass": "^1.55.0" added to storybook/package.json by Ivan O.

### Changed

- Reverted a dockerfile change that excluded source from the final build image (causing the adonis-ci-tests legacy pipeline to fail the linter step)

## [2.26.2] - 2022-10-19

### Changed

- Removed color default value for `Text` component.

## [2.26.1] - 2022-10-17

### Changed

- Updated component usage guidelines based on [Mandela Documentation](https://legalshield.atlassian.net/wiki/spaces/DO/pages/1183055932/Components)
- "react-loading-skeleton": "^3.1.0" added to package.json by Nico C.

## [v2.26.0] - 2022-10-13

### Changed

- `Alert` component changes (these are backwards compatible and non-breaking):
  - `alertAppearance` prop has been deprecated and replaced with `severity`. The values remain the same but the naming is more inline with the Material UI API scheme which is the base for the `Alert` and `Snackbar` component refactors.
  - `alertType` prop has been deprecated and replaced with the `dismissible` boolean prop. The default is `false`.
  - `bold` prop has been deprecated since this styling isn't present on this component in the new design system.
  - `content` prop has been deprecated and replaced with passing in children to the component.
  - `heading` prop has been renamed to `title.
  - `onClick` has been renamed to `onDismiss` to more accurately reflect its action. This is non-breaking.

## [2.25.1] - 2022-10-13

### Changed

- Updated the pull request template with the latest instructions

## [v2.25.0] - 2022-10-12

### Added

- Storybook changes:
  - Radio Group component has been added

## [2.24.0] - 2022-10-12

### Added

- Storybook changes:
  - Marketing Plan Cards component has been added

## [2.23.0] - 2022-10-11

### Added

- Added red dot option in the nav menu item

## [2.22.0] - 2022-10-10

### Added

- Storybook changes:
  - Skeleton component has been added

## [v2.21.1] - 2022-10-07

### Fixed

- Fixed an issue with the `Select` component, the dropdown icon is appearing outside of the component.

## [v2.19.1] - 2022-10-06

### Changed

- Storybook changes:
  - Updated the Dockerfile to build storybook and then serve its static assets with Express
  - Added /v1/health and /health endpoints (same handler)
  - Upgraded node to 18.7.0

## [v2.19.0] - 2022-10-03

### Changed

- Typography has been updated with Design System 2.0 styling.
  - `Heading` component has new sizes (T31+) that are mobile responsive
    - `useBrand` has been deprecated. All Heading components use the brand font by default.
  - `Text` component has updated sizes and weights. Text sizes `body` and `description` have been deprecated.
    - `bold` and `semibold` have been deprecated. Use `textWeight` instead.
    - `color` has been deprecated. Use `textColor` instead.

### Added

- Title component has been added
- Label component has been added

## [v2.18.0] - 2022-10-04

### Added

- Added Poppins font

## [v2.17.0] - 2022-09-26

### Changed

- Removed brand specific colors from UX Framework
  - All brand colors should be accessed from the CSS variables defined in the `brand.css` file. At runtime, the design service will include the right version of this file. In storybook, this has values corresponding to LegalShield's brand.
  - Icon colors support the normal colors (red, green, blue, yellow). They used to support some brand colors (but not all of them). They now support generic brand values, and will use the CSS variables to render.
  - Documentation for colors has been cleaned up and simplified.
  - The `Spinner` control took a parameter for color based on either neutral, LegalShield, or IDShield. It now takes neutral or brand, and will use CSS variables for colors vs. direct references.
  - Similar change on the `EmailTestimonial` component.
  - Similar change on the `Step` control.
  - The `Tag` and `FileUpload` control were referencing `brand.css` values when they wanted straight-forward color.
  - `MultiSelectCard` control is temporarily hardcoded to LegalShield brand colors; while rewriting it (see item 3), fix this too.
- `useForm` changes:
  - Added missing input types
  - Fixed a typescript problem on the global validate function (it now allows null)
  - Simplified initialization
  - Fixed some problems with readonly on select
- `MultiSelectCard` bug fixes
  - The implementation used the card control for the individual cards, and in the process twisted and contored the card implementation.
  - Modified the `MultiSelectCard` control to render the cards more natively, as they aren't cards in the same sense as the card control.
  - Removed the twists introduced in the `Card` control so that it is again a simple div with a few attributes.

## [v2.16.0] - 2022-09-20

### Changed

- Breaking: The `Icon` component now holds all icons from design systems version 1.0 and version 2.0. The `AxiomIcon` has been removed. Instead, all icons are accessible via the `name` prop on `Icon`. Two duplicate icons have been removed (`file_document` and `file_note`).
- Deleted the `AxiomElevations` component and folded its functionality into `Elevations`. This is only for display in Storybook so it doesn't break anything.

## [v2.15.0] - 2022-09-16

### Added

- Updated `Grid` styling and stories to reflect the newest figma design.
- Marked some `Grid` component variants in storybook as deprecated since they are no longer supported by figma spec.

## [v2.14.0] - 2022-09-16

### Changed

- `Divider` now has styling from Design System 2.0 which includes a new `tint` prop (`light`, `medium` `dark`). The `tint` defaults to `light` to be backwards compatible.

## [v2.13.0] - 2022-09-08

### Added

- Added currency input to `Input` component.

## [v2.12.0] - 2022-09-08

### Added

- Added section variant to `Step` component.

## [v2.11.0] - 2022-09-07

### Added

- Updated `MultiSelect` component to include `Icon` to new specs.
- Added `semibold` to `Text`.

## [v2.9.0] - 2022-09-02

### Added

- Added the remaining icon categories to the `assets` folder and the `AxiomIcon` component.

## [v2.8.0] - 2022-09-01

### Added

- Added the `AxiomIcon` component which is a wrapper on the existing `Icon` component and uses the new Axiom design system icons.

## [v2.7.0] - 2022-08-26

### Added

- Added the new defined elevations in the Axiom Design System to the `shadows.scss` file as variables. They also show up in the Elevations story.

## [v2.6.0] - 2022-08-24

### Changed

- `Toast`: Added `toastPosition` prop to allow the toast to appear at the top right or bottom right of the screen.
- `Toast`: Added animation to make the toasts fade in and out, or slide up.

### Fixed

- Fixed an issue with the `Toast` component causing it not to disappear after 5 seconds when the `variant` is set to `temporary`
- Fixed a `Toast` UI bug causing the action text to appear under the action icon

## [v2.5.0] - 2022-08-22

### Changed

- Updated the color variables to use the new Axiom design system colors

## [v2.4.1] - 2022-08-15

- Resolve build issue.

## [v2.4.0] - 2022-07-27

- `Modal` component has `secondaryOkLabel`, `secondaryOkFunction`, `secondaryOkDisabled` `okVariant`, and `cancelVariant` props.

## [v2.3.0] - 2022-07-26

### Changed

- `Card` component now has `isMultiSelectCards` and `isSelected` props to change border and checkmark icon when selected. `CardWidth` prop is also added to change width.

### Added

- Added `MultiSelectCards` component that is a collective of `Card` component.

## [v2.2.0] - 2022-07-25

### Changed

- `Toggle` now has a `toggleSize` prop with the options `small` and `large`. The new size is `large` and the default prop value is `small` so that the component is backwards compatible.

## [v2.1.0] - 2022-07-21

### Breaking Changes

- `Input` component changes
  - `telMask` and `countryCode` have been deprecated and their functionality replaced with `format`.
  - How to migrate: Instead of setting `telMask` and `countryCode`, set `format=”(###) ###-####”` and `placeholder=”(555) 555-5555”`.

### Removed

- Removed `ExpirationDate` component since it's replaced by raw input
- Removed (unused) dateFormat styling from formField. Code wasn't useful.
- Removed dateNumber from Input (didn't do anything)
- Removed inherited attributes from Input (readOnly, value, defaultValue, autoCapitalize)
- Removed left/right label from input; added left/right label to FormField. Makes it more generally useful on all controls.

### Added

- Added `useLoader` hook that handles feedback for aynchronous operations
- Added new `GridRow` variant names as aliases (backwards compatible)

### Changed

- `useForm` changes:
  -- Added min/max/maxLength validation to input field.
  -- Split renderControl from renderField.
  -- Added attributes for format, autoComplete, autoCapitalize to useForm for use on Input and TextArea

### Fixed

- Fixed Typescript errors on Loader, FileUploader, and ProfilePicture
- Fixed bug causing `Slideout` to close when the user clicks inside of the Slideout while `autoClose` is true

## [v2.0.0] - 2022-07-19

### Changed

- Removed storybook from the library to build as a separate project
- Updated library to Node 18 / es6
- Optimized the build for tree shaking

## Added

- Added the `Tag` component

## [v1.52.0] - 2022-07-12

### Changed

- Updated the `ProfilePicture` component to include `allowDelete`, `allowEdit`, `allowUpdate` props for enabling and disabling the dropdown options in the component.

## [v1.49.0] - 2022-07-05

### Added

- Updated the `useForm` types to more accurately reflect their usage. Added `onRender`, updated `renderField`, `renderForm`, `onPreRender`, and `onPostRender`.

## [v1.50.1] - 2022-06-27

### Fixed

- Fixed style bug in `ProfilePicture` causing dropdown to be hidden under some elements

## [v1.50.0] - 2022-06-14

### Added

- Added `leftLabel` and `rightLabel` props to `Input` component

## [v1.49.0] - 2022-06-10

### Added

- Added `resize` prop to `TextArea` to allow element to use any `resize` value: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit'. The prop defaults to 'none'.

### Fixed

- Fixed icon issue in `Input` date picker causing it to be cut off
- Fixed z-index issue causing `Spinner` to be covered by `Slideout`.

## [v1.48.0] - 2022-06-09

### Change

- Potential breaking change: `FileUpload` has had `react-dropzone` upgraded. The `fileTypes` prop has been modified to work with the new version.

## [v1.47.0] - 2022-06-08

### Changed

- `useForm` hook exports functions within object now. Fixed typing issue as well.

## [v1.46.1] - 2022-06-03

### Fixed

- Fixed a typing issue in `useForm`

## [v1.46.0] - 2022-06-03

### Added

- Added the buildURL utility

## [v1.45.0] - 2022-06-02

### Added

- `useForm` hook has been added to utilities

## [v1.44.0] - 2022-05-31

### Changed

- `useLoader` API has been expanded
- `TextArea` now has `resize` set to `none`

## [v1.43.1] - 2022-05-31

### Fixed

- Updated items in `Navigation` to include `divider` and `dividerTop` props.

## [v1.43.0] - 2022-05-27

### Fixed

- Fixed styling issue on TextArea component causing disabled state to shrink the content padding.
- Renamed InputStatus to InputValidationStatus and implemented it across multiple components: `Select`, `Input`, `TextArea`, and `FormField`. Removed `default` value since it doesn't need to be specified.
- Fixed styling bug on `FormField` component that could cause default validation style not to apply when `InputValidationStatus` is changed.
- Changed `TextArea` active border-color from blue to the standard dark gray.

## [v1.42.1] - 2022-05-24

### Fixed

- Fixed styling issue causing disabled links `Navigation` or `Dropdown` to have unreadable text. Text is now darkened to make it more readable. Added another story to `Navigation` to visualize the disabled state.

## [v1.42.0] - 2022-05-19

### Fixed

- Fixed styling on `Card` component so it doesn't highlight on hover. Updated stories & component styling to match Figma. The card will highlight on hover if `highlightOnHover` is true or if `onClick` is not null.

## [v1.41.2] - 2022-05-23

## Fixed

- `Loader` now returns an empty component when `loading` is `false` and no validation message is present

## [v1.41.1] - 2022-05-19

## Fixed

- Fixed `onClick` events firing on disabled `LinkContent` component

## [v1.41.0] - 2022-05-19

### Added

- Added the `AssociateBadge` component

## Fixed

- Fixed aspect ratio style issue with the `Avatar` component

## [v1.40.1] - 2022-05-16

### Fixed

- Fix for `Dropdown` component styling issue causing icon and link to appear on separate lines

## [v1.40.0] - 2022-05-11

### Changed

- Layout component is now padding-free by default. The `contentPadding` boolean determines if padding should be added or not.

## [v1.39.2] - 2022-05-11

### Changed

- Loader props have been simplified

## [v1.39.1] - 2022-05-10

### Fixed

- Exported useLoader

## [v1.39.0] - 2022-05-10

### Added

- The new `Loader` component handles loading state communication using the `Modal` component.

## [v1.38.2] - 2022-05-05

### Fixed

- Fixed a styling issue in the `FormField` component that was causing the validation hint icon & text to be on two lines instead of one.

## [v1.38.1] - 2022-05-04

### Fixed

- Fixed a styling issue by removing a conditional `overflow` of `auto` from `Card` when `cardHeight` is set.

## [v1.38.0] - 2022-05-02

### Changed

- Added horizontal padding to `Layout` component so each project doesn't need to define top level layout padding.

## [v1.37.0] - 2022-04-29

### Changed

- Added optional `children` and `heading` props to `Alert` for rich text formatting and heading text.

## [v1.36.1] - 2022-04-28

### Changed

- Fixed bug causing `Avatar` component aspect ratio to be constrained by small containers.

## [v1.36.0] - 2022-04-28

### Changed

- Added `color` prop to `Text` component to allow the user to determine the text color using neutral global colors.

## [v1.35.0] - 2022-04-25

### Changed

- Added `position` prop to `Modal` component which allows the position to be set as `top` or `center`. It defaults to `top`.

## [v1.34.1] - 2022-04-19

### Changed

- Fixed `Checkbox` aspect ratio bug causing it to be squished in small containers

## [v1.34.0] - 2022-04-18

### Changed

- Added 0 as `PaddingType` value on `Card` component

## [v1.33.6] - 2022-04-13

### Changed

- Fixed `onExpandClick` function creating error in Accordion on icon click

## [v1.33.5] - 2022-04-01

### Changed

- Added `onExpandClick` callback function to Accordion

## [v1.33.4] - 2022-03-24

### Changed

Changes to Accordion:

- Added `isExpanded` prop to determine its state
- Deprecated `initialOpen` as `isExpanded` is now preferred. `isExpanded` overwrites `initialOpen`.

## [v1.33.3] - 2022-03-22

### Changed

Click Callback in Accordion component

- Added allowOnClickCallback prop into Accordion component

Cleanup

- Image - Removed Url import
- Expiration Date - removed circular dependency
- ProfilePicture - removed circular dependency

## [v1.33.2] - 2022-03-17

### Changed

- Modified text size and button styling for Modal component when in full screen

## [v1.33.1] - 2022-03-16

### Changed

- Modified styling of Modal component and add full screen capability

## [v1.33.0] - 2022-03-15

### Changed

- Modified styling of Bar variant of Tabs component to stretch bottom border across width of container when `stretched` is true

## [v1.32.0] - 2022-03-12

### Changed

ADA updates in Card component

- Added alt prop into Card component

## [v1.31.1] - 2022-03-09

### Changed

Updates to the ProfilePicture component

- Pass the image to onCropConfirm callback as a Blob instead of an Object URL This fixes uploadFile issue that needs
  a blob to append it into formdata
- Fixed 'Expected onClick listener to be a function, instead got a value of string type.' exception when imageUrl is
  null or empty
- Releases the image object url after image loads to allow objet tp be garbage collected
- Added onDelete callback parameter to allow consumers of the component to delete the image file from the store

## [v1.31.0] - 2022-03-02

### Changed

- Updated package.json dependencies
- Create Collapsable menu property
- Rename image-edit folder to profile-photo. Export ProfilePicture component.

## [v1.30.2] - 2022-02-28

### Changed

- Updated Navigation component to handle expandable and compressable items
- Added true child items for main menu items

## [v1.30.0] - 2022-02-16

### Added

- Added At Work Logos and Icons

## [v1.29.0] - 2022-02-19

Made updates to these components:

FileUpload:

- Added baseUrl and bucketName parameters to support:
  - baseUrl: Sending request to an alternate service other than the page origin
  - bucketName: Specify the name of. a private bucket to be used instead of the public one
- Fixed issue with files not being attached to formData on uploads
  ProfilePicture:
- Fixed issue when profilePictureUrl property value comes from an API so it is not yet set when the component renders
  for the first time

## [v1.28.6] - 2022-02-07

### Fixed

- Exported `ProfilePicture` component so it can be accessed.

## [v1.28.5] - 2022-01-31

### Added

- `useBadge` prop to Icon component.
  The badge is displayed as a little red dot at the top right corner of the icon.

## [v1.28.4] - 2022-01-30

### Changed

- Add dividerTop to LinkContent.

## [v1.28.2] - 2022-01-21

### Changed

- No changes. Version bump for package management.

## [v1.28.1] - 2022-01-21

### Changed

- Add `autoCapitalize` prop to Input component

## [v1.27.3] - 2022-01-11

### Changed

- Added Table cells justification props

## [v1.27.1] - 2021-12-29

### Changed

- Modified Modal css to be responsive for mobile

## [v1.27.0] - 2021-12-16

### Added

- Added XUser Component

## [v1.26.1] - 2021-12-17

### Changed

- Added classNames prop to the Modal component for custom styling

## [v1.26.0] - 2021-12-14

### Changed

- Fixed date expiration validation field component (vExpirationDate | Molecules )

## [v1.25.0] - 2021-12-08

### Added

- Added Image Component

## [v1.24.0] - 2021-12-07

### Changed

- Updated Alt for Icon
- Removed Circular Dependancies in Upload, Accordion and Step

### Changed

- Added link property to disable text decoration
- Fixed alignment for link icons

## [v1.23.0] - 2021-12-06

### Changed

- New multiselect version of dropdown

## [v1.22.0] - 2021-12-02

### Changed

- New logos for pplsi people; renames the ids/ls combined logos. #680

## [v1.21.3] - 2021-11-29

### Changed

- Renamed logos from ls-providers to ls-partner

## [v1.21.2] - 2021-11-23

### Changed

- Modified date expiration validation field component (vExpirationDate | Molecules )

## [v1.21.1] - 2021-11-18

### Changed

- Added market prop for control components ( AlertControl | FileUpload )

## [v1.20.9] - 2021-11-16

### Changed

- Credit card logo names to match payments API response (MASTERCARD | AMEX | DISC | VISA)

## [v1.20.8] - 2021-11-12

### Changed

- Added two-digit support for country code in the phone input mask

## [v1.20.7] - 2021-11-11

### Added

- Added Expiration Date component

### Changed

- Added new logos to index

## [v1.20.6] - 2021-11-10

### Changed

- Added File Upload Control onUpload prop and other upload fixes

## [v1.20.5] - 2021-11-06

### Fixed

- File Upload Control POST method and docs

## [v1.20.4] - 2021-11-06

### Fixed

- File Upload Control translations and POST method

## [v1.20.3] - 2021-11-06

### Changed

- Modified small badge padding

## [v1.20.2] - 2021-11-05

### Added

- Added new logo and favicons

## [v1.20.0] - 2021-11-03

### Added

- FileUpload Control Component

## [v1.19.9] - 2021-10-28

### Added

- Visa, MasterCard, AMEX and Discovery logos in color

## [v1.19.8] - 2021-10-28

### Added

- Added classnames to BreadCrumbs, Page, Step, Tabs, Toggle, and Dropdown. This allows users to augment the controls classes with custom classes (most typically margins or padding)

### Changed

- Fixed padding on breadcrumbs for better alignment. The elipsses was slightly higher than the numeric elements. Simple padding adjustment.
- Removed addMargin from Footer; this is more readily achieved using margin and padding classes.
- Updated pplsi logos

## [v1.19.7] - 2021-10-27

### Changed

- AlertControl now uses `fetch` instead of Axios for the API call and Axios has been removed.

## [v1.19.6] - 2021-10-26

### Added

- AlertControl component which displays alerts from the Alert Controller

## [v1.19.5] - 2021-10-25

### Added

- Added Back button to slider variant of Step Component

## [v1.19.4] - 2021-10-14

### Added

- Overflow auto to slideout to enable scroll in component

## [v1.19.3] - 2021-10-13

### Changed

- Changed Dropdown button content's separation

## [v1.19.2] - 2021-10-12

### Added

- Added Dropdown props:

* widthLong: Defines Selector width
* preventOverflow: True by default
* dropdownWidth: Defines Children width
* placement: Dropdown placement

## [v1.19.1] - 2021-10-09

### Added

- Added some missing files for the brandxyz; removed member perks and forms images; added pplsi and pplsi-ca
  images (renamed the ls-ids-\* images).

## [v1.19.0] - 2021-10-06

### Added

- Variant prop to Step component. The variants are bubbles or slider. The default is bubbles. When variant is slider, will display always the mobile view.

## [v1.18.2] - 2021-10-04

### Added

- Added heart, thumbs up, and smile icon

## [v1.18.1] - 2021-09-15

### Added

- Added default status value to Input and Select Component

## [v1.18.0] - 2021-09-15

### Added

- Added new Tooltip component

## [1.17.16] - 2021-09-15

### Added

- Forms Bt LS and Member Perks logos

## [v1.17.15] - 2021-09-13

### Fixed

- defaultValue attribute added to Input props

## [v1.17.14] - 2021-09-09

### Changed

- Input Tel Mask
- Changed react-input-mask to react-number-format library

## [v1.17.13] - 2021-09-08

### Added

- Link Docs:
  - Added code example to use link as a router

### Changed

- Table Row:
  - children object able to use single element

## [v1.17.11] - 2021-08-20

### Added

- onClick prop to checkbox component

## [v1.17.10] - 2021-08-18

### Added

- defaultValue to select in order to display placeholder option

## [v1.17.9] - 2021-08-18

### Fixed

- Added small badge option

## [v1.17.8] - 2021-08-18

### Fixed

- Checkbox label alignment

## [v1.17.7] - 2021-08-18

### Added

- Step component:
  - Background prop added

## [v1.17.6] - 2021-08-03

### Fixed

- Text component:
  - bold and italic styles are now reflected.

## [v1.17.5] - 2021-07-28

### Added

- Card component:
  - cardTextHeight prop was added in order to have the option to define the text height in cards

## [v1.17.4] - 2021-07-27

### Added

- Text component:
  - textHeight prop was added in order to have the option to define the text height

## [v1.17.3] - 2021-07-23

### Added

- Card component:
  - cardHeight and cardTitleHeight were added in order to have the option to define the card and card title height
- GridCol:
  - contentHeight prop was added in order to have the option to define content height
- Heading:
  - titleHeight prop was added in order to have the option to define heading height

## [v1.17.2] - 2021-07-06

### Changed

- Divider component now has the option to be a just a line divider

## [v1.17.1] - 2021-07-02

### Changed

- Dropdown able to have colored icon
- Button able to have colored icon
- Link able to have colored icon

## [v1.17.0] - 2021-06-30

### Changed

- Updated all the dependencies to their latest
- Storybook running on webpack 5
- The library is now React 17

### Fixed

- Dropdown issue not opening on React 17
- Collapsed breadcrumbs menu not opening on React 17

## [v1.16.0] - 2021-06-26

### Added

- Added html content to footer for realm support

## [v1.15.0] - 2021-06-25

### Added

- Mobile version for Step component

## [v1.14.0] - 2021-06-24

### Added

- Accordion has a new variant that allows inner children (shown also when it's collapsed) and the possibility to add a badge and a button as well as to change the title type (normal or heading).

## [v1.13.0] - 2021-06-23

### Added

- Added simple divider component for columns
- Named all new logos with '-logo' at the name to put them in the correct design service
  folder

## [v1.12.0] - 2021-06-23

### Added

- ls_at_work_square_logo - ls_at_work logo - ls_internal_square_logo - ls_internal logo - ls_providers_square_logo and ls_providers logo

## [v1.11.0] - 2021-06-21

### Changed

- Icons have the option to use any color in our palette color.

## [v1.10.6] - 2021-06-17

### Fixed

- Issue with icons and the FormField hints.

## [v1.10.5] - 2021-06-17

### Changed

- Modified .storybook config to avoid typing issue in react-docgen-typescript@1._
  this should be undone once dependencies all are using react-docgen-typescript@2.\_

## [v1.10.4] - 2021-06-16

### Changed

- Fixed Flex border padding

## [v1.10.3] - 2021-06-16

### Changed

- Add padding prop for customizing padding in card component

## [v1.10.2] - 2021-06-16

### Changed

- Fixed Flex display issue for Fixed variant Layouts

## [v1.10.1] - 2021-06-15

### Changed

- Centering Step component

## [v1.9.14] - 2021-06-11

### Changed

- Accordion component:
  - Children now can have max-height
  - The border accordion it is optional
  - The accordion icon can be a chevron arrow or the plus sign

## [v1.9.13] - 2021-06-04

### Changed

- Fixing some email components styles and making titleIcon in accordion component optional

## [v1.9.12] - 2021-06-03

### Changed

- The padding top class was removed from navigation component, this needs to be added by each app that is going to use this component

## [v1.9.11] - 2021-06-03

### Fixed

- Navigation styles and documentation

## [v1.9.10] - 2021-06-01

### Added

- Changed plus/minus icons for accordion compact/expanded
- Added story for accordion in storybook
- Added ability to add icon to left of accordion label

## [v1.9.9] - 2021-05-24

### Added

- Navigation scss file, contains the necessary styles to display the navigation. (The styles that were in the design services, are now in the UX-Fw)

## [v1.9.8] - 2021-05-26

### Fixed

- Added monochrome versions of 6 different icons

## [v1.9.7] - 2021-05-24

### Added

- ls-ids-logo.png

## [v1.9.6] - 2021-05-19

### Fixed

- Step component needs updates to its typography and spacing
- Now the component will look centered when it is needed.

## [v1.9.5] - 2021-05-14

### Fixed

- Added logos for American Express and Discover

## [v1.9.4] - 2021-05-14

### Fixed

- Heading component is now `margin: 0;` as default, the margins should be added with the spacing classes
- Button variant link now has the option to be `padding: 0;` with a prop call: noPadding

## [v1.9.3] - 2021-05-13

### Fixed

- Email testimonial brand color for idshield

## [v1.9.2] - 2021-05-12

### Changed

- The texts for the email components now accept html children

## [v1.9.1] - 2021-05-09

### Fixed

- Added numbered step email component into index.ts file

## [v1.9.0] - 2021-05-09

### Added

- Numbered step email component

## [v1.8.3] - 2021-05-05

### Changed

- Added new style icons

## [v1.8.2] - 2021-05-04

### Changed

- Spinner now accepts colors: 'neutral' | 'legalshield' | 'idshield' | 'canada'

## [v1.8.1] - 2021-05-03

### Fixed

- Fixed issue with subheading in Email Section Title

## [v1.8.0] - 2021-04-30

### Added

- Email Line Component
- Email Section Title Component

## [v1.7.2] - 2021-04-29

### Added

- Small hero variant

## [v1.7.1] - 2021-04-29

### Fixed

- Table Component children can now be either an array, a single row or a single header with an array of other rows.

## [v1.7.0] - 2021-04-28

### Added

- Email Panel Component

### Changed

- Text component accepts html as children

## [v1.6.0] - 2021-04-28

### Added

- Email Basic Template

## [v1.5.0] - 2021-04-28

### Added

- Email Invitation Code component

## [v1.4.0] - 2021-04-26

### Added

- EmailHero component
- EmailHeader component
- FormField stretch prop added

### Changed

- LegalShield and IDShield logo png to svg with new design

## [v1.3.0] - 2021-04-22

### Added

- EmailFooter component

### Changed

- Clearer index files

## [v1.2.0] - 2021-04-22

### Add

- SocialIcons email component
- Instagram icon

## [v1.1.0] - 2021-04-22

### Add

- Testimonial email component

## [v1.0.1] - 2021-04-15

### Fixed

- Input
  - When required, it does not add extra margin
  - Type tel now works with readOnly

### Changed

- Breadcrumbs
  - margin-left was removed
- Grid
  - min-height was removed

### Added

- Container component
  - This component has some props that would allow to improve the layout, those props are:
    - background: this prop adds a style to $N100 background
    - flex: this adds display flex to the container
    - fixed: this will add position fixed to the container and 99 z-index

## [v1.0.0] - 2021-04-13

Rebranding Release

## [v0.57.2] - 2021-04-06

### Changed

- Steps:
  - Improve separator
  - Auto size

## [v0.57.1] - 2021-04-06

### Changed

- Tabs:
  - New variant: pills was added
  - Changed designs to match figma
- Dropdown:
  - Changed designs to match figma

## [v0.57.0] - 2021-03-30

### Changed

- Badge Documentation:
  - Added examples for success state.
- Alert
  - Removed iconColor Property. Now it depends on AlertAppearance.
- Input
  - Disabled styles and colors.
- Form Field
  - Now it automatically reads the disabled state from it props.children to set Label styles.
- Fonts
  - Heading fonts has new weights according to the new branding definitions.
- Modal
  - Fixed width to 553. Removed width, minWidth and maxWidth props.
  - Fix styles.
- Radio
  - Circle size.
  - Styles.
- Select
  - Border styles.
- Card
  - Styles.
- Heading Component
  - Using T# naming convention instead of H# for the **as** property.
- Text
  - Change **TextSizes** to match Mandela System's sizes.
- Step Component:
  - Styles were changed to match figma designs
- Tab Component:
  - Styles were changed to match figma designs
- Toast
  - Background color to subtle error and warning variant was added
  - Styles were changed to match figma designs
- Toggle:
  - Size prop was removed, it has a default size
  - Check alert icon as default
  - Styles were changed to match figma designs

## [v0.55.6] - 2021-03-30

### Changed

- Card Component:
  - Removed Max Width 320px

## [v0.55.5] - 2021-03-30

### Changed

- Card Component:
  - Repaired Children Not Displaying
- Accordion:
  - Fixed spelling of Accordion

## [v0.55.0] - 2021-03-29

### Changed

- Button-group Component:
  - Round corners for left and right buttons
  - States styles changed
- Card Component:
  - Hover state changed
  - Button as optional
  - Card title font size
- Dropdown:
  - Button styles
  - States

## [v0.54.0] - 2021-03-18

### Changed

- Alert Component:
  - The actionText prop has been removed.
  - New color scheme for either bold and subtle alerts.
- Arrow-box Component:
  - We renamed this component to Popover
  - The shadow color was changed, it is now shadow-400
  - It has now a dark mode, this could be define with the prop `dark`
  - It has now a close icon, it can be defined with the `closeAction` prop and it can receive a function
- Avatar Component:
  - Background color for user initials was changed
- Button Component:
  - The color of each variant was changed,
  - The color states changed
  - The style was changed, now they have round corners
  - Long button was created, this can be defined with the long prop
  - A new prop for dynamic width was created, widthLong
- Checkbox Component:
  - The color states were changed
- Modal Component:
  - Shadow was added
  - Buttons were added and a close modal button
- Radio Component:
  - Color states were changed
- Select Component: --
- Step Component:
  - Color states were changed
- Tabs Component:
  - Color states were changed
- Toast Component:
  - Color states were changed
- Toggle Component
  - Color states were changed

## [v0.53.4] - 2021-03-22

### Changed

- Fixing typo in textarea doc file

## [v0.53.2] - 2021-03-18

### Changed

- Move Language Picker Styles into Dropdown.scss file.

## [v0.53.1] - 2021-03-18

### Added

- Language Picker Styles.

## [v0.53.0] - 2021-03-17

### Changed

- Atoms components: Spinner and TextArea were modified to match new branding.

## [v0.52.2] - 2021-03-16

### Changed

- FormField children can be now more than one ReactComponent.
- ClassNames in Radio Component are now apply to the label wrapper

## [v0.52.1] - 2021-03-16

### Changed

- Icon styles on onClick & Icon documentation.

## [v0.52.0] - 2021-03-15

### Changed

- Card Component

## [v0.51.9] - 2021-03-07

### Added

- Pillar GridRow variant and examples/documentation.

## [v0.51.8] - 2021-03-05

### Fixed

- onChange prop added to input component

## [v0.51.7] - 2021-03-04

### Fixed

- Dynamic Mask for Input type tel.
- Tel Mask prop can be define now as 'country-code-by-user' || 'country-code-by-api' || 'country-code-hide'. This will define the way the mask should be display.

## [v0.51.5] - 2021-03-04

### Added

- Curtain component documentation and code examples.

### Fixed

- Style issues in button component

## [v0.51.6] - 2021-03-04

### Fixed

- Style issues in Step component
- Issue with IDS Canadian logo

## [v0.51.5] - 2021-03-04

### Added

- Curtain component documentation and code examples.

### Fixed

- Style issues in button component

## [v0.51.0] - 2021-03-04

### Added

- Curtain component

## [v0.50.1] - 2021-03-01

### Fixed

- "Missing key" errors when rendering Breadcrumbs or Navigation components.

## [v0.50.0] - 2021-02-25

### Added

- [FEDUX-409](https://legalshield.atlassian.net/browse/FEDUX-409?atlOrigin=eyJpIjoiYmVjMjE3MTFmYjgxNDZiYWFkNmQ4NDIzYTNlYjBlZWIiLCJwIjoiaiJ9) : New Icons
  - logo_apple
  - logo_facebook
  - logo_google
  - logo_linkedin
  - logo_mastercard
  - logo_office
  - logo_paypal
  - logo_prudential
  - logo_twitter
  - logo_visa
  - logo_youtube

### Changed

- Better documentation and code examples for all the complex components.
- Updated Icons:

  - object_calendar -> action_calendar
  - object_settings -> action_settings
  - face_id -> action_face_id
  - touch_id -> action_touch_id
  - user_add -> action_user_add
  - user_multiple -> action_user_multiple
  - user_single -> action_user_single
  - object_home -> nav_home
  - object_sidebar -> nav_sidebar
  - object_check -> alert_check
  - social_google -> logo_google
  - social_facebook -> logo_facebook

  **IMPORTANT! - This change may break previous implementations of this icons**

### Fixed

Typo fixes

- AlertType: ~~dismissable~~ > dismissible
- ToastType: ~~dismissable~~ > dismissible

**IMPORTANT! - This change may break previous implementations of Alert and Toast components**
