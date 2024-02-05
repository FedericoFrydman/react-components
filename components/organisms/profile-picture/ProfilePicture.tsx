import { BaseSyntheticEvent, FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import Cropper from 'react-easy-crop';
import { Button } from '../../../components/molecules/button/Button';
import { Container, ContainerProps } from '../../atoms/container/Container';
import { Dropdown, DropdownItem } from '../dropdown/Dropdown';
import { Icon } from '../../atoms/icon/Icon';
import { Image } from '../../atoms/image/Image';
import { Modal } from '../../molecules/modal/Modal';
import getCroppedImg from './cropImage';
import './ProfilePicture.scss';

export type ProfilePictureLabels = {
  confirm: string;
  cancel: string;
  addPicture: string;
  editPicture: string;
  modalTitle: string;
  removePicture: string;
  updatePicture: string;
};

const labelsDefaultValues: ProfilePictureLabels = {
  addPicture: 'Add profile picture',
  cancel: 'Cancel',
  confirm: 'Confirm',
  editPicture: 'Edit profile picture',
  modalTitle: 'Edit Profile',
  removePicture: 'Reset profile picture',
  updatePicture: 'Update profile picture',
};

export interface ProfilePictureProps extends ContainerProps {
  /**
   * Profile image url
   */
  profileImageUrl?: string;
  /**
   * Defines height of the avatar
   * @default 100
   */
  avatarHeight?: number;
  /**
   * Defines width of the avatar
   * @default 100
   */
  avatarWidth?: number;
  /**
   * Defines crop shape
   * @default rect
   */
  shape?: 'rect' | 'round';
  /**
   * Defines crop aspect
   * By default modalImageWidth / modalImageHeight
   */
  cropAspect?: number;
  /**
   * Modal image width
   * @default 400px
   */
  modalImageWidth?: string;
  /**
   * Modal image height
   * @default 400px
   */
  modalImageHeight?: string;
  /**
   * Displays grid when cropping picture
   */
  showGrid?: boolean;
  /**
   * Defines with of the zoom slider
   * @default 50%
   */
  sliderWidth?: string;
  /**
   * Defines max slider zoom
   * @default 5
   */
  maxZoom?: number;
  /**
   * Function called when on Confirm
   */
  onCropConfirm?: (croppedImage: Blob) => void;
  /**
   * Function called when the user resets the profile picture
   */
  onDelete?: () => void;
  /**
   * Allow user to edit the profile picture
   * @default true
   */
  allowEdit?: boolean;
  /**
   * Allow user to delete the profile picture
   * @default true
   */
  allowDelete?: boolean;
  /**
   * Allow user to update the profile picture
   * @default true
   */
  allowUpdate?: boolean;
  /**
   * Labels for the picture
   */
  profilePictureLabels?: ProfilePictureLabels;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({
  allowDelete = true,
  allowEdit = true,
  allowUpdate = true,
  avatarHeight = 100,
  avatarWidth = 100,
  cropAspect,
  modalImageWidth = '400px',
  modalImageHeight = '400px',
  shape = 'rect',
  showGrid = true,
  sliderWidth = '50%',
  maxZoom = 5,
  classNames = [],
  onCropConfirm,
  onDelete,
  profileImageUrl,
  profilePictureLabels = labelsDefaultValues,
  ...props
}: ProfilePictureProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const [editPicture, setEditPicture] = useState(true);
  const [newImageUrl, setNewImageUrl] = useState(null);

  const inputRef: any = useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const onSelectFile = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener('load', () => {
        setEditPicture(false);
        setNewImageUrl(reader.result);
        setShowModal(true);
      });
    }
  };

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const onSliderChange = (e: BaseSyntheticEvent) => {
    setZoom(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState(profileImageUrl);

  useEffect(() => {
    setImageUrl(profileImageUrl);
  }, [profileImageUrl]);

  const onClose = () => {
    setShowModal(false);
  };

  const onConfirm = async () => {
    setShowModal(false);
    const imageBlob: Blob | null = await getCroppedImg(editPicture ? imageUrl : newImageUrl, croppedAreaPixels);
    const croppedImageUrl = URL.createObjectURL(imageBlob);
    setImageUrl(editPicture ? imageUrl : newImageUrl);
    setCroppedImageUrl(croppedImageUrl);

    onCropConfirm?.(imageBlob);
  };

  const onEditPictureHandle = () => {
    setEditPicture(true);
    setShowModal(true);
  };

  const onImageLoaded = () => {
    if (croppedImageUrl) {
      URL.revokeObjectURL(croppedImageUrl);
    }
  };

  const onResetPicture = () => {
    setImageUrl(null);
    setCroppedImageUrl(null);
    setNewImageUrl(null);
    inputRef.current.value = null;
    onDelete?.();
  };

  const classProfilePicture = 'profile-picture__avatar';
  const cnContainer = [`${classProfilePicture}-container`, classNames];
  const cnImage = [`${classProfilePicture}-image`, cn({ 'profile-picture__round': shape === 'round' })];

  return (
    <>
      <Container
        {...props}
        classNames={cnContainer}
        style={{ height: `${avatarHeight}px`, width: `${avatarWidth}px`, ...props.style }}
      >
        {imageUrl ? (
          <Image
            style={{
              height: avatarHeight,
              width: avatarWidth,
            }}
            src={croppedImageUrl ? croppedImageUrl : imageUrl}
            onLoad={onImageLoaded}
            classNames={cnImage}
          />
        ) : (
          <Icon
            style={{ height: `${avatarHeight}px`, width: `${avatarWidth}px` }}
            name="user_02"
            color="N700"
            classNames={cnImage}
          />
        )}
        <input type="file" accept="image/*" ref={inputRef} onChange={onSelectFile} style={{ display: 'none' }} />
        <Dropdown.Root>
          <Dropdown.Trigger
            style={{
              backgroundColor: 'white',
              bottom: `${shape === 'round' ? '10px' : '5px'}`,
              position: 'absolute',
              right: `${shape === 'round' ? '10px' : '5px'}`,
              transform: 'translate(50%, 50%)',
              zIndex: 1,
            }}
          >
            <Button
              aria-label="Profile photo menu"
              iconLeft="action_camera"
              iconColor="P200"
              iconSize="small"
              shape="round"
              variant="secondary"
            />
          </Dropdown.Trigger>
          <Dropdown.Portal>
            <DropdownItem onClick={triggerFileSelectPopup} disabled={!allowUpdate}>
              {imageUrl ? profilePictureLabels.updatePicture : profilePictureLabels.addPicture}
              <div className="right-slot">
                <Icon name="action_camera" size="small" />
              </div>
            </DropdownItem>
            {imageUrl && (
              <>
                <DropdownItem onClick={onEditPictureHandle} disabled={!allowEdit}>
                  {profilePictureLabels.editPicture}
                  <div className="right-slot">
                    <Icon name="action_edit" size="small" />
                  </div>
                </DropdownItem>
                <DropdownItem onClick={onResetPicture} disabled={!allowDelete}>
                  {profilePictureLabels.removePicture}
                  <div className="right-slot">
                    <Icon name="action_trash" size="small" />
                  </div>
                </DropdownItem>
              </>
            )}
          </Dropdown.Portal>
        </Dropdown.Root>
      </Container>
      {showModal && (
        <Modal title={profilePictureLabels.modalTitle} closeButton={true} closeFunction={onClose} position="center">
          <Container flexbox justifyContent="center">
            <Container style={{ height: modalImageHeight, width: modalImageWidth }}>
              <Container classNames={['profile-picture__cropper']}>
                <Cropper
                  cropShape={shape}
                  showGrid={showGrid}
                  image={editPicture ? imageUrl : newImageUrl}
                  crop={crop}
                  zoom={zoom}
                  aspect={cropAspect ? cropAspect : avatarWidth / avatarHeight}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  maxZoom={maxZoom}
                />
              </Container>
              <Container flexbox justifyContent="center" classNames={['profile-picture__slider']}>
                <input
                  style={{ width: sliderWidth }}
                  type="range"
                  value={zoom}
                  min={1}
                  max={maxZoom}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={onSliderChange}
                />
              </Container>
            </Container>
          </Container>
          <Modal.Actions>
            <Button variant="primary" onClick={onConfirm} label={profilePictureLabels.confirm} />
            <Button variant="secondary" onClick={onClose} label={profilePictureLabels.cancel} />
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
};
