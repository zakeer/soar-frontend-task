import { useState, useCallback } from "react";
import type { Area } from "react-easy-crop";

export const useImageCrop = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const createImage = useCallback(
    (url: string): Promise<HTMLImageElement> =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.setAttribute("crossOrigin", "anonymous");
        image.src = url;
      }),
    []
  );

  const getCroppedImg = useCallback(
    async (imageSrc: string, pixelCrop: Area): Promise<File> => {
      const image = await createImage(imageSrc);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("No 2d context");
      }

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas is empty"));
            return;
          }
          resolve(
            new File([blob], "cropped-image.jpeg", { type: "image/jpeg" })
          );
        }, "image/jpeg");
      });
    },
    [createImage]
  );

  const centerImage = useCallback(() => {
    setCrop({ x: 0, y: 0 });
  }, []);

  const resetImage = useCallback(() => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  }, []);

  return {
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    getCroppedImg,
    croppedAreaPixels,
    centerImage,
    resetImage,
  };
};
