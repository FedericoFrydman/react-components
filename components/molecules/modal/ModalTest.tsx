import { FC, useCallback, useState, useRef } from 'react';
import './Modal.scss';
import { Button } from '../button/Button';
import { Container } from '../../atoms/container/Container';
import { FormField } from '../../organisms/form-field/FormField';
import { Input } from '../input/Input';
import { Modal } from './Modal';

export interface ModalTestProps {
  first: string;
  last: string;
}

export const ModalTest: FC<ModalTestProps> = ({ first, last }: ModalTestProps) => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState(first);
  const [lastName, setLastName] = useState(last);
  const editFunction = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeFunction = useCallback(() => {
    setShowModal(false);
  }, []);

  const firstNameInput = useRef<HTMLInputElement>();
  const lastNameInput = useRef<HTMLInputElement>();

  const okFunction = useCallback(() => {
    setFirstName(firstNameInput.current.value);
    setLastName(lastNameInput.current.value);
    setShowModal(false);
  }, []);

  return (
    <Container>
      <FormField classNames={['mb-4']}>
        <Input name="name" value={`${firstName} ${lastName}`} readOnly />
      </FormField>
      <Button label="Edit Name" onClick={editFunction} variant="secondary" stretch />
      {showModal && (
        <Modal title="Edit Name" closeButton={true} closeFunction={closeFunction} position="center">
          <div>
            <FormField classNames={[]} id="first" label="First Name">
              <Input ref={firstNameInput} name="name" placeholder="First Name" defaultValue={firstName} />
            </FormField>
            <FormField classNames={[]} id="last" label="Last Name">
              <Input ref={lastNameInput} name="name" placeholder="Last Name" defaultValue={lastName} />
            </FormField>
          </div>
          <Modal.Actions>
            <Button label="Save" onClick={okFunction} variant="primary" />
            <Button label="Cancel" onClick={closeFunction} variant="secondary" />
          </Modal.Actions>
        </Modal>
      )}
    </Container>
  );
};
