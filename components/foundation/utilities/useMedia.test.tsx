import { FC } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useMedia } from '.';
import MatchMediaMock from 'jest-matchmedia-mock';

interface UseMediaTestComponentProps {
  defaultValue: boolean;
  queries: string[];
  values: boolean[];
}

const UseMediaTestComponent: FC<UseMediaTestComponentProps> = (props: UseMediaTestComponentProps) => {
  const { queries, values } = props;
  const mediaMatch = useMedia(queries, values, false);
  return (
    <div>
      {mediaMatch && <div>useMedia content</div>}
      {!mediaMatch && <div>not useMedia content</div>}
    </div>
  );
};

const renderTestComponent = async (queries: string[], values: boolean[], defaultValue: boolean) =>
  render(<UseMediaTestComponent defaultValue={defaultValue} queries={queries} values={values} />);
let matchMedia: MatchMediaMock;

describe('Utilities - useMedia', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => matchMedia.clear());
  afterAll(() => matchMedia.destroy());

  it('useMedia content appears when media query max-width is greater than viewport', async () => {
    const matchText = 'useMedia content';
    const testQuery = `(max-width: 1080px)`;
    matchMedia.useMediaQuery(testQuery);
    await renderTestComponent([testQuery], [true], false);
    await waitFor(() => screen.getByText(matchText));
    const testDiv = screen.getByText(matchText);

    expect(testDiv.innerHTML).toBe(matchText);
  });

  it('not useMedia content appears when media query max-width is less than viewport', async () => {
    const matchText = 'not useMedia content';
    matchMedia.useMediaQuery(`(min-width: 1081px)`);
    await renderTestComponent([`(min-width: 1080px)`], [true], false);
    await waitFor(() => screen.getByText(matchText));
    const testDiv = screen.getByText(matchText);

    expect(testDiv.innerHTML).toBe(matchText);
  });
});
