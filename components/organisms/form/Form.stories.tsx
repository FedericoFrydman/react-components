import { Story, Meta } from '@storybook/react';
import { Form, FormProps } from './Form';
import { Button } from '../../../components/molecules/button/Button';
import { Container } from '../../../components/atoms/container/Container';
import { FormField } from '../../../components/organisms/form-field/FormField';
import { Input } from '../../../components/molecules/input/Input';

import docs from './Form.docs.mdx';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  alert('Form Submitted');
};

const FormStory: Story<FormProps> = (args: FormProps) => (
  <Container classNames={['m-4']}>
    <Form {...args} onSubmit={handleSubmit}>
      <FormField id="name" label="Name">
        <Input placeholder="First Name" name="name" />
      </FormField>
      <FormField id="lastName" label="Last Name">
        <Input placeholder="Last Name" name="lastName" />
      </FormField>
      <Button type="submit" shape="round" label="Submit Form" stretch classNames={['mt-5']} />
    </Form>
  </Container>
);

export const Default = FormStory.bind({});

export default {
  component: FormStory,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: { page: docs },
  },
  subcomponents: { FormField, Input },
  title: 'Controls/Form',
} as Meta;
