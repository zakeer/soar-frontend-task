import { http as rest } from "msw";
import { delay } from "msw";
import { ApiUrl } from "@/api/api-url";
import { mockUserProfile } from "@/mocks/mockData";
import { UserProfile } from "@/features/settings/setting.types";
import { createGetHandler, createJsonResponse } from "../mock.utils";

export const userHandlers = [
  // Get user profile
  createGetHandler(ApiUrl.USER_PROFILE, mockUserProfile),

  // Update user profile
  rest.put(ApiUrl.USER_PROFILE, async ({ request }) => {
    const updatedData = (await request.json()) as Partial<UserProfile>;

    // Merge updated data with existing profile
    const updatedProfile = {
      ...mockUserProfile,
      ...updatedData,
      // Ensure password remains masked in response
      password: "**********",
    };

    await delay();

    return createJsonResponse(updatedProfile);
  }),
];
