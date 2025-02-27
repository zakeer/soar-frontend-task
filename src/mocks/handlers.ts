import { userHandlers } from "./handlers/userHandlers";
import { transactionHandlers } from "./handlers/transactionHandlers";
import { avatarHandlers } from "./handlers/avatarHandlers";

export const handlers = [
  ...userHandlers,
  ...transactionHandlers,
  ...avatarHandlers,
];
