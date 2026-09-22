import { eventConfig } from "@/config/event";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number) {
  return `${eventConfig.currencySymbol}${amount.toLocaleString("en-IN")}`;
}
