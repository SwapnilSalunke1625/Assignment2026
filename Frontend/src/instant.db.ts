import { createInstantDb } from "@instantdb/react";
import schema from "./instant.schema";
import rules from "./instant.perms";

export const db = createInstantDb({
  appId: "efabad7f-d706-4f96-b7cd-a621fc1482a6",
  schema,
  rules,
});
