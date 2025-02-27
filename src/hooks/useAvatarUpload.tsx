import type React from "react";

import { useState, useCallback } from "react";
import { useUploadAvatar } from "@/features/settings/query/settings.queries";
import { toast } from "react-toastify";
import { useImageCrop } from "./useImageCrop";

export const useAvatarUpload = (currentAvatar: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const uploadAvatarMutation = useUploadAvatar();
  const {
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    getCroppedImg,
    croppedAreaPixels,
    centerImage,
    resetImage,
  } = useImageCrop();

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageSrc(reader.result as string);
        setIsOpen(true);
      });
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSave = useCallback(async () => {
    try {
      if (imageSrc && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        await uploadAvatarMutation.mutateAsync(croppedImage);
        setIsOpen(false);
        setImageSrc(null);
        toast.success("Avatar updated successfully");
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed to update avatar");
    }
  }, [imageSrc, croppedAreaPixels, getCroppedImg, uploadAvatarMutation]);

  return {
    isOpen,
    setIsOpen,
    imageSrc,
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    onFileChange,
    handleSave,
    currentAvatar,
    centerImage,
    resetImage,
  };
};
