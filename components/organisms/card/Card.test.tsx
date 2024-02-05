import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { Card, CardProps } from './Card';
import { Text } from '../../atoms/text/Text';
import { ContainerBgColors } from '../../../components/atoms/container/Container';

describe('Card Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card>
        <Card.Content>
          <Text text="Example text" />
        </Card.Content>
      </Card>,
    );
    testId = 'test card';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the card the provided classNames', () => {
          const card = renderCard({ classNames });

          expect(card).toHaveClass(classNames.join(' '), { exact: false });
        });
      });
    });

    describe('selected', () => {
      const selectedClassName = ['lsux-card--selectable', 'lsux-card--selected'].join(' ');

      it('gives the card the selected class', () => {
        const card = renderCard({ isSelected: true });

        expect(card).toHaveClass(selectedClassName, { exact: false });
      });
    });

    describe('title', () => {
      const title = 'my card title';

      it('is displayed when present', () => {
        renderCard({ title });

        expect(screen.getByText(title)).toBeVisible();
      });
    });

    describe('background', () => {
      const backgrounds: ContainerBgColors[] = ['light-gray', 'white', 'none'];

      it('defaults to white', () => {
        const card = renderCard();

        expect(card).toHaveClass(`lsux-card--bg--white`);
      });

      function itAssignsTheRightClassForBackground(background: ContainerBgColors) {
        const cardBgClass = `lsux-card--bg--${background}`;

        describe(`when the background is ${background}`, () => {
          it(`assigns the ${cardBgClass} to the card`, () => {
            const card = renderCard({ background: background });

            expect(card).toHaveClass(cardBgClass);
          });
        });
      }

      backgrounds.forEach((bg) => itAssignsTheRightClassForBackground(bg));
    });

    describe('cardHeight', () => {
      describe('when "cardHeight" is provided', () => {
        const cardHeight = `200px`;

        it('sets the card width to the provided value', () => {
          const card = renderCard({ cardHeight });

          expect(card).toHaveStyle({ height: cardHeight });
        });
      });
    });

    describe('cardWidth', () => {
      describe('when "cardWidth" is provided', () => {
        const cardWidth = `200px`;

        it('sets the card width to the provided value', () => {
          const card = renderCard({ cardWidth });

          expect(card).toHaveStyle({ width: cardWidth });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLDivElement>();

    it('provides a ref to the card', () => {
      expect(renderCard({ ref })).toEqual(ref.current);
    });
  });

  describe('unspecified html attributes', () => {
    const altText = 'My accessible card';

    it('allows html attributes to be passed to the underlying card element', () => {
      render(<Card alt={altText} data-testid={testId} />);

      const card = screen.getByTestId(testId);

      expect(card).toHaveAttribute('alt', altText);
    });
  });

  const renderCard = (props: CardProps = {}): HTMLElement => {
    render(<Card {...props} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
