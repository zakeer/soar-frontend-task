import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import Cropper from "react-easy-crop";
import { Pencil, ZoomIn, ZoomOut, Maximize, RotateCcw } from "lucide-react";
import { useAvatarUpload } from "@/hooks/useAvatarUpload";
import { Input } from "@/components/ui/input";

interface InteractiveAvatarUploadProps {
  currentAvatar: string;
}

export function InteractiveAvatarUpload({
  currentAvatar,
}: InteractiveAvatarUploadProps) {
  const {
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
    centerImage,
    resetImage,
  } = useAvatarUpload(currentAvatar);

  return (
    <>
      <div className="relative mx-auto">
        <Avatar className="h-32 w-32">
          <AvatarImage src={currentAvatar} />
          <AvatarFallback>CR</AvatarFallback>
        </Avatar>
        <label
          htmlFor="avatar-upload"
          className="absolute bottom-0 right-0 rounded-full bg-[#343C6A] p-2 cursor-pointer hover:bg-[#343C6A]/90 transition-colors"
        >
          <Pencil className="h-4 w-4 text-white" />
          <Input
            id="avatar-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onFileChange}
          />
        </label>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile picture</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-[300px]">
            {imageSrc && (
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <ZoomOut className="w-4 h-4 mr-2" />
              <Slider
                value={[zoom]}
                onValueChange={(value) => setZoom(value[0])}
                min={1}
                max={3}
                step={0.1}
                className="w-[100px]"
              />
              <ZoomIn className="w-4 h-4 ml-2" />
            </div>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={centerImage}
                title="Center Image"
              >
                <Maximize className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={resetImage}
                title="Reset Image"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="button" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
