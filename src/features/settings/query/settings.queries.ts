import { useQuery, useMutation } from "@tanstack/react-query";
import type { UserProfile } from "../setting.types";
import {
  fetchUserProfile,
  updateUserProfile,
  uploadAvatar,
} from "@/api/settings.api";

export function useUserProfile() {
  return useQuery<UserProfile>({
    queryKey: ["userProfile"],
    queryFn: ({ signal }) => fetchUserProfile({ signal }),
  });
}

export function useUpdateProfile() {
  return useMutation({
    mutationFn: (data: UserProfile) => updateUserProfile(data),
  });
}

export function useUploadAvatar() {
  return useMutation({
    mutationFn: (file: File) => uploadAvatar(file),
  });
}
