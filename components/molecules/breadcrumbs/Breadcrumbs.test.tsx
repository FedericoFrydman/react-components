import { shallow, ShallowWrapper } from 'enzyme';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import cn from 'classnames';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

describe('Breadcrumbs Component', () => {
  let baseClass: string;
  let testId: string;
  let wrapper: ShallowWrapper;
  let pplsiEventId: Array<string>;
  const crumbs = [
    {
      label: 'Home',
      link: '/',
      pplsiEventId: 'test prop 1',
    },
    {
      label: 'Page1',
      link: '/Page1',
      pplsiEventId: 'test prop 2',
    },
    {
      label: 'Page2',
      link: '',
      pplsiEventId: 'test prop 3',
    },
    {
      label: 'Page3',
      link: '/Page2',
      pplsiEventId: 'test prop 4',
    },
    {
      label: 'Page3',
      link: '',
      pplsiEventId: 'test prop 5',
    },
  ];
  const maxTail = 0;
  const onClick = function (link: string): void {
    throw new Error('Function not implemented.');
  };

  beforeEach(() => {
    baseClass = 'lsux-crumbs';
    testId = 'test Breadcrums';
    wrapper = shallow(<Breadcrumbs crumbs={crumbs} maxTail={maxTail} onClick={onClick} />);
    pplsiEventId = ['test prop 1', 'test prop 2', 'test prop 4'];
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the icon the provided classNames', () => {
          const breadcrumb = renderBreadcrumbs({ classNames, crumbs, maxTail, onClick });

          expect(breadcrumb).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });

    describe('maxTail', () => {
      describe('when dropdown should be working', () => {
        it('gives the breadcrumb maxtail 1', () => {
          const breadcrumb = renderBreadcrumbs({ crumbs, maxTail: 1, onClick });
          const maxtailComp = breadcrumb.getElementsByClassName(`${baseClass}__dropdown-items--wrapper`);

          expect(maxtailComp).toBeTruthy();
        });
      });
    });

    describe('onClick', () => {
      describe('when onClick is present', () => {
        const onClickSpy = jest.fn();

        beforeEach(() => jest.clearAllMocks());

        it('adds the clickable class to the breadcrumb', () => {
          const breadcrumb = renderBreadcrumbs({ crumbs, maxTail, onClick: onClickSpy });
          const onClickClass = `${baseClass}__crumb--link`;

          expect(breadcrumb.querySelector('a')).toHaveClass(onClickClass, { exact: false });
        });

        it('calls the onClick handler when pressed', () => {
          const breadcrumb = renderBreadcrumbs({ crumbs, maxTail, onClick: onClickSpy });

          breadcrumb.click();

          expect(onClickSpy).toHaveBeenCalledTimes(0);
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the breadcrumbs', () => {
      expect(renderBreadcrumbs({ crumbs, maxTail, onClick, ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    it('allows pplsi event id data attribute to be passed to the underlying breadcrumb element', () => {
      render(<Breadcrumbs crumbs={crumbs} maxTail={maxTail} onClick={onClick} data-testid={testId} />);

      const breadcrumb = screen.getByTestId(testId);

      const maxtailComp = breadcrumb.getElementsByClassName(`${baseClass}__crumb--link`);

      const maxtailCompKeys = Object.keys(maxtailComp);

      maxtailCompKeys.forEach((element: any) => {
        expect(maxtailComp[element]).toHaveAttribute('data-pplsi-event-id', pplsiEventId[element]);
      });
    });
  });

  const renderBreadcrumbs = (props: BreadcrumbsProps): HTMLDivElement => {
    render(<Breadcrumbs {...props} data-testid={testId} />);
    return screen.getByTestId(testId);
  };
});
