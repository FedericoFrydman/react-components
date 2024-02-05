import { FC } from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { useViewportSize, viewportSize } from '.';
import { resizeTo } from 'window-resizeto';

const UseViewportSizeTestComponent: FC = () => {
  const testViewPort: viewportSize = useViewportSize();
  return (
    <div>
      <div>UseViewportSizeTest</div>
      <div data-testid="testwidth">{testViewPort.width}</div>
      <div data-testid="testheight">{testViewPort.height}</div>
    </div>
  );
};

const renderUseViewportSizeTestComponent = async () => {
  const renderOutput = render(<UseViewportSizeTestComponent />);
  await waitFor(() => screen.getByText('UseViewportSizeTest'));
  return renderOutput;
};

describe('Utilities - useViewportSize', () => {
  it('returns expected object containing viewport width and height', async () => {
    await renderUseViewportSizeTestComponent();
    const widthDiv = screen.getByTestId('testwidth');
    const heightDiv = screen.getByTestId('testheight');
    const { outerWidth, outerHeight } = global;

    expect(widthDiv.innerHTML).toContain(outerWidth);
    expect(heightDiv.innerHTML).toContain(outerHeight);
  });

  it('updates viewport sizes after window size changes', async () => {
    await renderUseViewportSizeTestComponent();
    act(() => resizeTo(global, 500, 500));

    const widthDiv = screen.getByTestId('testwidth');
    const heightDiv = screen.getByTestId('testheight');
    const { outerWidth, outerHeight } = global;

    expect(widthDiv.innerHTML).toContain(outerWidth);
    expect(heightDiv.innerHTML).toContain(outerHeight);
  });
});
