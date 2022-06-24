import { hello } from "@/lib/words"
export default defineEventHandler((event) => {
  return {
    api: hello
  }
})
