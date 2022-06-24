import { nuxt } from "@/lib/words"
export default defineEventHandler((event) => {
  return {
    api: nuxt
  }
})
