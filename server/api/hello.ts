import { hello } from "@/lib/words";

export default defineEventHandler(() => {
  return {
    api: hello
  }
});
