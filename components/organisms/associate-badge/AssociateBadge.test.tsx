import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';

import { AssociateBadge, AssociateBadgeProps } from './AssociateBadge';

describe('Associate Badge Component', () => {
  const testId = 'test-associate-badge';
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AssociateBadge
        avatarUrl="https://api.legalshield.com/v2/public/associates/avatar/127525095-1596790237.195000.jpg"
        name="Sherry Swedenborg"
        onMessageClick={() => console.log('onMessageClick')}
        onPhoneClick={() => console.log('onPhoneClick')}
        phone="(238) 432-6343"
        title="LegalShield Independent Associate"
        data-testid={testId}
      />,
    );
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the component the provided classNames', () => {
          const badge = renderAssociateBadge({ classNames });

          expect(badge).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the associate badge', () => {
      expect(renderAssociateBadge({ ref })).toEqual(ref.current);
    });
  });

  const renderAssociateBadge = (props: AssociateBadgeProps = {}): HTMLElement => {
    render(
      <AssociateBadge
        {...props}
        avatarUrl="https://api.legalshield.com/v2/public/associates/avatar/127525095-1596790237.195000.jpg"
        name="Sherry Swedenborg"
        onMessageClick={() => console.log('onMessageClick')}
        onPhoneClick={() => console.log('onPhoneClick')}
        phone="(238) 432-6343"
        title="LegalShield Independent Associate"
        data-testid={testId}
      />,
    );

    return screen.getByTestId(testId);
  };
});
