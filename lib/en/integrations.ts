// English labels for integration categories. The items themselves are shared.
import type { IntegrationCat } from "../integrations";

export { integrations } from "../integrations";
export type { IntegrationCat } from "../integrations";

export const integrationCats: { id: IntegrationCat; label: string }[] = [
  { id: "chat", label: "Messengers & social" },
  { id: "biz", label: "CRM & business" },
  { id: "ai", label: "AI & media" },
  { id: "infra", label: "Infrastructure" },
];
