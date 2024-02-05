import { FC } from 'react';
import { useRef } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useOutsideClick } from '.';

const testActivity = () => console.log('used outside click');
const utils = { testActivity };

const UseOutsideClickTestComponent: FC = () => {
  const insideRef = useRef();
  useOutsideClick(insideRef, () => utils.testActivity());

  return (
    <div>
      <div>Test Outside</div>
      <div ref={insideRef}>Test Inside</div>
    </div>
  );
};

const renderUseOutsideClickTestComponent = async () => {
  const renderOutput = render(<UseOutsideClickTestComponent />);
  await waitFor(() => screen.getByText('Test Outside'));
  return renderOutput;
};

describe('Utilities - useOutsideClick', () => {
  let testActivitySpy: jasmine.Spy;

  it('triggers inner logic clicking outer element', async () => {
    await renderUseOutsideClickTestComponent();
    testActivitySpy = spyOn(utils, 'testActivity');
    const outerDiv = screen.getByText('Test Outside');

    outerDiv.click();
    expect(testActivitySpy).toBeCalledTimes(1);
  });

  it(`does not trigger inner logic when clicking inner element`, async () => {
    await renderUseOutsideClickTestComponent();
    testActivitySpy = spyOn(utils, 'testActivity');
    const innerDiv = screen.getByText('Test Inside');

    innerDiv.click();
    expect(testActivitySpy).toBeCalledTimes(0);
  });
});
