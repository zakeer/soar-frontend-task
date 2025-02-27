import { apiClient } from "@/api/http";
import { AxiosSignalType } from "@/api/types";
import { UserProfile } from "@/features/settings/setting.types";
import { ApiUrl } from "@/api/api-url";

export async function fetchUserProfile({
  signal,
}: AxiosSignalType): Promise<UserProfile> {
  const response = await apiClient.get(ApiUrl.USER_PROFILE, { signal });
  return response.data;
}

export async function updateUserProfile(
  data: Partial<UserProfile>
): Promise<UserProfile> {
  const response = await apiClient.put(ApiUrl.USER_PROFILE, data);
  return response.data;
}

export async function uploadAvatar(file: File): Promise<any> {
  const formData = new FormData();
  formData.append("avatar", file);
  const response = await apiClient.post(ApiUrl.UPLOAD_AVATAR, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
