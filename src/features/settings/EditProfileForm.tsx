"use client";

import React, { FC } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useUserProfile,
  useUpdateProfile,
} from "@/features/settings/query/settings.queries";
import log from "@/common/log";
import { InteractiveAvatarUpload } from "@/features/settings/InteractiveAvatarUpload";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dateOfBirth: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
  avatar: z.string(),
});

// Reusable InputField component with TypeScript types
interface InputFieldProps {
  id: keyof z.infer<typeof profileSchema>;
  label: string;
  type?: string;
  register: UseFormRegister<z.infer<typeof profileSchema>>;
  error?: string;
  placeholder?: string;
}

const InputField: FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  register,
  error,
  placeholder,
}) => (
  <div className="space-y-3">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} {...register(id)} placeholder={placeholder} />
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

export function EditProfileForm() {
  const { data: profile, isLoading } = useUserProfile();
  const updateProfile = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      dateOfBirth: "",
      presentAddress: "",
      permanentAddress: "",
      city: "",
      postalCode: "",
      country: "",
    },
  });

  React.useEffect(() => {
    if (profile) {
      Object.entries(profile).forEach(([key, value]) => {
        setValue(key as keyof typeof profile, value);
      });
    }
  }, [profile, setValue]);

  const onSubmit = async (data: z.infer<typeof profileSchema>) => {
    try {
      await updateProfile.mutateAsync(data);
      toast.success("Profile updated successfully");
    } catch (error: unknown) {
      log.error(error);
      toast.error("Failed to update profile");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row gap-8 md:gap-16 items-start py-4"
    >
      <InteractiveAvatarUpload currentAvatar={profile?.avatar || ""} />

      {/* Form Fields */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 flex-1 w-full">
        <InputField
          id="name"
          label="Your Name"
          register={register}
          error={errors.name?.message}
          placeholder="Enter your name"
        />
        <InputField
          id="username"
          label="User Name"
          register={register}
          error={errors.username?.message}
          placeholder="Enter your username"
        />
        <InputField
          id="email"
          label="Email"
          type="email"
          register={register}
          error={errors.email?.message}
          placeholder="Enter your email"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password?.message}
          placeholder="Enter your password"
        />
        <InputField
          id="dateOfBirth"
          label="Date of Birth"
          type="date"
          register={register}
          error={errors.dateOfBirth?.message}
          placeholder="Select your date of birth"
        />
        <InputField
          id="presentAddress"
          label="Present Address"
          register={register}
          placeholder="Enter your present address"
        />
        <InputField
          id="permanentAddress"
          label="Permanent Address"
          register={register}
          placeholder="Enter your permanent address"
        />
        <InputField
          id="city"
          label="City"
          register={register}
          placeholder="Enter your city"
        />
        <InputField
          id="postalCode"
          label="Postal Code"
          register={register}
          placeholder="Enter your postal code"
        />
        <InputField
          id="country"
          label="Country"
          register={register}
          placeholder="Enter your country"
        />

        <div className="flex justify-end lg:col-span-2">
          <Button
            variant="dark"
            type="submit"
            className="py-4 h-12 min-w-48 shrink-0 px-8 rounded-2xl text-lg"
            disabled={updateProfile.isPending}
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
