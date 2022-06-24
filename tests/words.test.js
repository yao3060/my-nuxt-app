import { it, expect } from "vitest"
import { nuxt } from "../lib/words"

it("word should be 4 letters long", () => {
  expect(nuxt.length).toBe(4)
})
