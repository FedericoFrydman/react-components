import { forwardRef, Ref, useCallback, useMemo, useState } from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import { Button } from '../../molecules/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import { IconColorsV1, IconNamesV1 } from '../../assets/icons/icons-v1';
import { Text } from '../../atoms/text/Text';
import './FileUpload.scss';
import { Market } from '../../controls/types';
import { Tooltip } from '../../molecules/tooltip/Tooltip';
import { Spinner } from '../../atoms/spinner/Spinner';

export type MimeType =
  | 'image/*'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/png'
  | 'image/gif'
  | 'application/*'
  | 'application/pdf';

const baseStyle = {
  alignItems: 'center',
  backgroundColor: '#fafafa',
  borderColor: '#eeeeee',
  borderRadius: 2,
  borderStyle: 'dashed',
  borderWidth: 3,
  color: '#000',
  display: 'flex',
  flex: 1,
  outline: 'none',
  padding: '20px',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: 'var(--g100)',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export type FileResource = {
  file: File;
  uploaded: boolean;
  errorMessage?: string;
  isUploading: boolean;
};

interface IconPropType {
  name: IconNamesV1;
  color: IconColorsV1;
}

const iconProps = (resource: FileResource): IconPropType => {
  if (resource.errorMessage) {
    return {
      color: 'R300',
      name: 'alert_error',
    };
  }
  return {
    color: resource.uploaded ? 'G300' : 'N500',
    name: 'alert_success',
  };
};

const invalidTypeError: Record<string, string> = {
  'en-ca': 'Invalid file type',
  'en-us': 'Invalid file type',
  'es-us': 'Tipo de archivo inválido',
  'fr-ca': 'Type de fichier invalide',
};

const fileTooLargeError: Record<string, string> = {
  'en-ca': 'File too big',
  'en-us': 'File too big',
  'es-us': 'Archivo demasiado grande',
  'fr-ca': 'Fichier trop gros',
};

const dragBox: Record<string, string> = {
  'en-ca': 'Drag and drop some files here, or click to select files',
  'en-us': 'Drag and drop some files here, or click to select files',
  'es-us': 'Arrastre y suelte algunos archivos aquí, o haga clic para seleccionar archivos',
  'fr-ca': 'Faites glisser et déposez les fichiers ici, ou cliquez pour sélectionner les fichiers',
};

const apiError: Record<string, string> = {
  'en-ca': 'Something went wrong, please try again',
  'en-us': 'Something went wrong, please try again',
  'es-us': 'Algo ha fallado, por favor intente de nuevo',
  'fr-ca': "Une erreur s'est produite. Veuillez réessayer",
};

const uploaded: Record<string, string> = {
  'en-ca': 'Uploaded',
  'en-us': 'Uploaded',
  'es-us': 'Subido',
  'fr-ca': 'Téléchargé',
};

const removeTooltip: Record<string, string> = {
  'en-ca': `Unable to remove uploaded files`,
  'en-us': `Unable to remove uploaded files`,
  'es-us': 'No es posible remover archivos subidos',
  'fr-ca': `Impossible de supprimer les fichiers téléchargés`,
};

const filesTitle: Record<string, string> = {
  'en-ca': 'Files',
  'en-us': 'Files',
  'es-us': 'Archivos',
  'fr-ca': 'Fichiers',
};

const uploadButton: Record<string, string> = {
  'en-ca': 'Upload',
  'en-us': 'Upload',
  'es-us': 'Subir',
  'fr-ca': 'Télécharger',
};

export interface FileUploadResponse {
  id: string;
  app: string | null;
  locale: string | null;
  public: boolean;
  actionType: string;
  bucket: string | null;
  bucket_directory: string | null;
  bucket_sub_directory: string | null;
  bucket_path: string | null;
  key: string | null;
  region: string | null;
  file_url: string | null;
  file_name_original: string | null;
}

export interface FileUploadProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Defines accepted file types
   */
  fileTypes?: Accept;
  /**
   * Defines if drag and drop is enabled (true by default)
   */
  dragAndDropEnabled?: boolean;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Defines border color
   */
  borderColor?: string;
  /**
   * Defines max file size (MBytes)
   */
  maxSize?: number;
  /**
   * Folder where the files will be uploaded
   */
  dir: string;
  /**
   * Defines the application for the uploaded files
   */
  app: string;
  /**
   * Base url of the storage service to upload the files to - defaults to the origin location of the page (relative
   * path)
   */
  baseUrl?: string;
  /*
   * Name of the bucket where to upload the file to. Applies only for uploading to private buckets.
   */
  bucketName?: string;
  /**
   * Function called after files are successfully uploaded
   */
  onUpload?: (files: FileUploadResponse[]) => void;
  /**
   * Specifies the language using the market variable.
   * @default 'en-us'
   */
  market?: Market;
}

const FileUploadComponent = (
  {
    app,
    dragAndDropEnabled = true,
    maxSize = 50,
    fileTypes = { 'image/*': [] },
    dir,
    borderColor = baseStyle.borderColor,
    onUpload,
    baseUrl,
    bucketName,
    market = 'en-us',
  }: FileUploadProps,
  ref: FileUploadProps['ref'],
) => {
  const rejectedFileListedErrors: Record<string, string> = {
    'file-invalid-type': invalidTypeError[market],
    'file-too-large': fileTooLargeError[market],
  };
  const [fileResources, setFileResources] = useState([] as FileResource[]);
  const [isUploading, setIsUploading] = useState(false);
  const hasRejectedFiles = fileResources.filter(
    (resource) => resource.errorMessage && resource.errorMessage != apiError[market],
  );
  const hasFilesUploaded = fileResources.filter((resource) => resource.uploaded);

  const uploadEnabled = hasFilesUploaded.length !== fileResources.length && hasRejectedFiles.length == 0;

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const resources = [...fileResources];

      rejectedFiles.map((rejectedFile: FileRejection) => {
        if (
          resources.filter((res) => res.file.name === rejectedFile.file.name).length == 0 &&
          rejectedFileListedErrors[rejectedFile.errors[0].code]
        ) {
          const initialResource = {
            errorMessage: rejectedFileListedErrors[rejectedFile.errors[0].code],
            file: rejectedFile.file,
            hasErrors: false,
            isUploading: false,
            uploaded: false,
          } as FileResource;
          resources.push(initialResource);
        }
      });
      acceptedFiles.map((acceptedFile) => {
        if (resources.filter((res) => res.file.name === acceptedFile.name).length == 0) {
          const initialResource = {
            file: acceptedFile,
            uploaded: false,
          } as FileResource;
          resources.push(initialResource);
        }
      });
      setFileResources(resources);
    },
    [fileResources],
  );
  baseStyle.borderColor = borderColor;

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone(
    dragAndDropEnabled
      ? {
          accept: fileTypes,
          maxSize: maxSize * 1024 * 1024,
          onDrop,
        }
      : { accept: fileTypes, maxSize: maxSize * 1024 * 1024 },
  );
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  const handleRemoveFile = (index: number) => {
    if (!isUploading) {
      setFileResources((resources) => {
        return resources.filter((filterFile) => resources.indexOf(filterFile) != index);
      });
    }
  };

  const uploadFiles = async () => {
    setIsUploading(true);
    const formData = new FormData();

    fileResources.map((file) => {
      if (!file.isUploading) {
        formData.append('files', file.file);
      }
    });
    const params = [
      ['app', app],
      ['dir', dir],
      ['locale', market],
      ['isPublic', bucketName ? 'false' : 'true'],
    ];
    if (bucketName) {
      params.push(['bucketName', bucketName]);
    }
    const searchParams = new URLSearchParams(params);
    const relativePath = `/v1/container/files?${searchParams.toString()}`;
    const url = baseUrl ? new URL(relativePath, baseUrl).toString() : relativePath;
    const response = await fetch(url, {
      body: formData,
      credentials: 'include',
      method: 'POST',
    });

    if (response.ok) {
      const uploadedFiles: FileUploadResponse[] = await response.json();
      onUpload(uploadedFiles);
    }
    updateUploadedResourcesState(!response.ok);
  };

  const updateUploadedResourcesState = (error: boolean) => {
    setIsUploading(false);
    setFileResources((resources) =>
      resources.map((resource) => {
        resource.uploaded = !error;
        resource.isUploading = false;
        resource.errorMessage = error ? apiError[market] : null;
        return resource;
      }),
    );
  };

  const handleUploadFiles = () => {
    setFileResources((resources) =>
      resources.map((resource) => {
        if (!resource.uploaded) {
          resource.isUploading = true;
        }
        return resource;
      }),
    );

    uploadFiles();
  };

  const getFileSize = (size: number, decimals = 2): string => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  return (
    <div className="container" ref={ref}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>{dragBox[market]}</p>
      </div>
      {fileResources.length ? (
        <table className="file-upload__table mt-3">
          <thead>
            <tr>
              <th className="ml-4">{filesTitle[market]}</th>
              <th className="file-upload__buttons">
                <Icon
                  name="action_trash"
                  disabled={isUploading}
                  color={!isUploading ? 'N1000' : 'N500'}
                  onClick={() => !isUploading && setFileResources([])}
                  classNames={['mr-4']}
                />
                <Button
                  classNames={['mr-4', 'p-2']} // TODO: Fix this
                  label={uploadButton[market]}
                  variant="secondary"
                  onClick={handleUploadFiles}
                  disabled={!uploadEnabled}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {fileResources.map((resource: FileResource, index) => (
              <tr key={`acceptedFile-${index}`}>
                <td>
                  <Text
                    as="p"
                    classNames={
                      !resource.errorMessage
                        ? ['file-upload__item_text', 'ml-3']
                        : ['file-upload__item_text', 'ml-3', 'file-upload__item_rejected']
                    }
                    text={`${resource.file.name} - ${getFileSize(resource.file.size)}${
                      resource.errorMessage ? ' - ' + resource.errorMessage : ''
                    }`}
                  />
                </td>
                <td>
                  {resource.isUploading && (
                    <div className="mr-4">
                      <Spinner spinnerSize="medium" />
                    </div>
                  )}

                  <Tooltip
                    animation=""
                    theme="light-border"
                    placement="bottom"
                    text={resource.uploaded ? uploaded[market] : ''}
                  >
                    <Icon {...iconProps(resource)} classNames={['mr-4']} />
                  </Tooltip>
                  <Tooltip
                    animation=""
                    theme="light-border"
                    placement="bottom"
                    text={resource.uploaded ? removeTooltip[market] : ''}
                  >
                    <Icon
                      name="action_trash"
                      color={isUploading ? 'N500' : 'N700'}
                      onClick={() => handleRemoveFile(index)}
                      classNames={['mr-4']}
                    />
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(FileUploadComponent);
