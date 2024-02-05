import { Story } from '@storybook/react';
import docs from './FileUpload.docs.mdx';
import { FileUpload, FileUploadProps, FileUploadResponse } from './FileUpload';

const FileUploadStory: Story<FileUploadProps> = (args: FileUploadProps) => <FileUpload {...args} />;

export const Default = FileUploadStory.bind({});

export const WithUploadFunction = FileUploadStory.bind({});
WithUploadFunction.parameters = {
  docs: {
    description: {
      story: `onUpload function is called right after the files are uploaded, sending the uploaded files through this function's parameters
  `,
    },
  },
};
WithUploadFunction.args = {
  app: 'ux-fw',
  dir: 'testfiles',
  fileTypes: ['image/*'],
  onUpload: (files: FileUploadResponse) => {
    window.alert(files);
  },
};

Default.args = {
  app: 'ux-fw',
  dir: 'testfiles',
  fileTypes: { 'image/*': [] },
};

export default {
  argTypes: {
    app: {
      control: { type: 'text' },
    },
    baseUrl: {
      control: { type: 'text' },
    },
    borderColor: {
      control: { type: 'text' },
    },
    bucketName: {
      control: { type: 'text' },
    },
    dir: {
      control: { type: 'text' },
    },
    dragAndDropEnabled: { control: { type: 'boolean' } },
    market: {
      control: { type: 'select' },
      options: ['en-us', 'es-us', 'en-ca', 'fr-ca'],
    },
    maxSize: {
      control: { type: 'number' },
    },
  },
  component: FileUploadStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/FileUpload',
};
