import type React from "react";

export const Spinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#343C6A]"></div>
  </div>
);
