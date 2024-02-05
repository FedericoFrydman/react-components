import { shallow, ShallowWrapper } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { Modal, ModalProps } from './Modal';
import { Button, Text } from '../../../';

describe('Modal Component', () => {
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    testId = 'test modal';
    wrapper = shallow(
      <Modal
        id="modal"
        cancelLabel="Cancel"
        closeButton={true}
        closeFunction={() => console.log('closeFunction')}
        okFunction={() => console.log('okFunction')}
        okLabel="Label"
        position="center"
        title="My Title"
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
      </Modal>,
    );
  });

  describe('props', () => {
    describe('title', () => {
      const title = 'testing text';

      it('is displayed when present', () => {
        renderModal({ title });

        expect(screen.getByText(title)).toBeVisible();
      });
    });

    describe('closeFunction', () => {
      const closeFunctionSpy = jest.fn();

      beforeEach(() => jest.clearAllMocks());

      it('when "closeFunction" is provided it is called when clicked', () => {
        render(
          <Modal closeFunction={closeFunctionSpy}>
            <Modal.Actions>
              <Button onClick={closeFunctionSpy} data-testid={testId} />
            </Modal.Actions>
          </Modal>,
        );
        const modal = screen.getByTestId(testId);

        modal.click();

        expect(closeFunctionSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const renderModal = (props: ModalProps = {}): HTMLElement => {
    render(<Modal {...props} data-testid={testId} />);

    return screen.queryByTestId(testId);
  };
});
