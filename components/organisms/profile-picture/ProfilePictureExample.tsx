import { FileUploadResponse } from '../../organisms/file-upload/FileUpload';
import { ProfilePicture, ProfilePictureProps } from './ProfilePicture';

export const ProfilePictureExample = (props: ProfilePictureProps) => {
  const uploadFiles = async (file: any) => {
    const formData = new FormData();

    formData.append('files', file);
    const params = [
      ['app', 'ux-fw'],
      ['dir', '/dir'],
      ['locale', 'en-us'],
    ];
    const queryString = new URLSearchParams(params).toString();

    const response = await fetch(`/v1/container/files?${queryString.toString()}`, {
      body: formData,
      credentials: 'include',
      method: 'POST',
    });

    if (response.ok) {
      const uploadedFiles: FileUploadResponse[] = await response.json();
      //do something with response
    }
  };

  return (
    <div>
      <ProfilePicture
        {...props}
        shape="round"
        profileImageUrl="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
        onCropConfirm={uploadFiles}
      />
    </div>
  );
};
