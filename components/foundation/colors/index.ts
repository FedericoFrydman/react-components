export const globalColors = [
  {
    colorType: 'Neutral colors',
    typeColors: [
      { description: '-', hex: '#ffffff', name: 'N00', rgb: 'RGB 255, 255, 255' },
      { description: '-', hex: '#f9f9f9', name: 'N50', rgb: 'RGB 249, 249, 249' },
      { description: 'Input border - Input default text', hex: '#f5f5f5', name: 'N100', rgb: 'RGB 245, 245, 245' },
      { description: '-', hex: '#ededed', name: 'N200', rgb: 'RGB 237, 237, 237' },
      { description: '-', hex: '#e1e1e1', name: 'N300', rgb: 'RGB 225, 225, 225' },
      { description: '-', hex: '#d3d3d3', name: 'N350', rgb: 'RGB 211, 211, 211' },
      { description: '-', hex: '#c4c4c4', name: 'N400', rgb: 'RGB 196, 196, 196' },
      { description: '-', hex: '#b3b3b3', name: 'N450', rgb: 'RGB 179, 179, 179' },
      { description: 'Table cell text color', hex: '#a0a0a0', name: 'N500', rgb: 'RGB 160, 160, 160' },
      { description: '-', hex: '#898989', name: 'N600', rgb: 'RGB 137, 137, 137' },
      { description: '-', hex: '#6c6c6c', name: 'N700', rgb: 'RGB 108, 108, 108' },
      { description: '-', hex: '#3f3f3f', name: 'N750', rgb: 'RGB 63, 63, 63' },
      { description: 'Popover or Tooltip background', hex: '#121212', name: 'N800', rgb: 'RGB 18, 18, 18' },
      {
        description: 'Body and headings text 56% is used for overlays',
        hex: '#000000',
        name: 'N1000',
        rgb: 'RGB 0, 0, 0',
      },
    ],
    typeDescription:
      '*Description text shows defined usage but you are not limited to use the color for that purpose only.',
  },
  {
    colorType: 'Blue',
    typeColors: [
      {
        description: 'Border',
        hex: '#1c2f94',
        name: 'B300',
        rgb: 'RGB 143, 157, 234',
      },
      {
        description: 'Primary Button - Alert background - Text link default',
        hex: '#3559e9',
        name: 'B200',
        rgb: 'RGB 174, 189, 246',
      },
      {
        description: 'Primary Button hover - Text link hover',
        hex: '#8d9ff6',
        name: 'B100',
        rgb: 'RGB 55, 123, 221',
      },
      {
        description: '-',
        hex: '#edf0fd',
        name: 'B10',
        rgb: 'RGB 248, 249, 254',
      },
    ],
    typeDescription: 'Blue is reserved for actions to draw attention to elements that are interactive.',
  },
  {
    colorType: 'Purple',
    typeColors: [
      {
        description: 'Border',
        hex: '#521d87',
        name: 'P300',
        rgb: 'RGB 67, 28, 94',
      },
      {
        description: 'Visited Text Link',
        hex: '#8231d4',
        name: 'P200',
        rgb: 'RGB 112, 70, 140',
      },
      {
        description: '-',
        hex: '#c29aea',
        name: 'P100',
        rgb: 'RGB 160, 115, 188',
      },
      {
        description: '-',
        hex: '#ebddf8',
        name: 'P10',
        rgb: 'RGB 240, 236, 243',
      },
    ],
    typeDescription: 'Purple is reserved for links that have been visited or indicate something is new.',
  },
  {
    colorType: 'Green',
    typeColors: [
      {
        description: 'Alert border',
        hex: '#006e3c',
        name: 'G300',
        rgb: 'RGB 0, 110, 60',
      },
      {
        description: 'Success background dark. Textfield border',
        hex: '#238a3d',
        name: 'G200',
        rgb: 'RGB 147, 228, 168',
      },
      {
        description: 'Primary Button hover- Text link hover',
        hex: '#34ab5e',
        name: 'G100',
        rgb: 'RGB 52, 171, 94',
      },
      {
        description: 'Success background light',
        hex: '#effbf2',
        name: 'G10',
        rgb: 'RGB 249, 253, 250',
      },
    ],
    typeDescription: 'Use green to show active or successful interaction.',
  },
  {
    colorType: 'Yellow',
    typeColors: [
      {
        description: 'Alert border',
        hex: '#e6b800',
        name: 'Y300',
        rgb: 'RGB 230, 184, 0',
      },
      {
        description: 'Warning background dark - TextField border',
        hex: '#ffd60a',
        name: 'Y200',
        rgb: 'RGB 255, 239, 157',
      },
      {
        description: '-',
        hex: '#ffe253',
        name: 'Y100',
        rgb: 'RGB 255, 243, 186',
      },
      {
        description: 'Warning background light',
        hex: '#fffceb',
        name: 'Y10',
        rgb: 'RGB 255, 254, 247',
      },
    ],
    typeDescription:
      'Yellow is used to show a “warning” state to call attention. Special care is needed for this color to make sure the combination passes WCAG color contrast.',
  },
  {
    colorType: 'Red',
    typeColors: [
      {
        description: 'Alert border',
        hex: '#920217',
        name: 'R300',
        rgb: 'RGB 146, 2, 23',
      },
      {
        description: 'Delete button - TextField border - Error background dark',
        hex: '#d70015',
        name: 'R200',
        rgb: 'RGB 255, 137, 149',
      },
      {
        description: 'Delete Button hover',
        hex: '#ff3045',
        name: 'R100',
        rgb: 'RGB 255, 172, 181',
      },
      {
        description: 'Error background light - Delete button active bg.',
        hex: '#ffebed',
        name: 'R10',
        rgb: 'RGB 255, 247, 248',
      },
    ],
    typeDescription:
      'Red is used to show the “error” state or most importance. Users typically cannot ignore elements with red to bypass. Special care is needed for this color to make sure the combination passes WCAG color contrast.',
  },
];
