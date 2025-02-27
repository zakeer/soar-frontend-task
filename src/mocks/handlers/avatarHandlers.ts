import { http as rest } from "msw";
import { ApiUrl } from "@/api/api-url";
import { createJsonResponse, handleError } from "../mock.utils";

export const avatarHandlers = [
  // Upload avatar
  rest.post(ApiUrl.UPLOAD_AVATAR, async ({ request }) => {
    // Mock file upload response
    const file = await request.blob();

    if (!file) {
      return handleError("No file provided");
    }

    return createJsonResponse({
      message: "Avatar uploaded successfully",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hs1nz18t2zhrYoY6sHrJFzrvBHpt5e.png", // Return the mock avatar URL
    });
  }),
];
