import { describe, expect, it } from 'vitest'

import { setup, $fetch, isDev } from '@nuxt/test-utils-edge'
import { fileURLToPath } from 'url'

await setup({
  rootDir: fileURLToPath(new URL('..', import.meta.url)),
  server: true,
})

describe('App', async () => {
  it('Renders Hello Nuxt3', async () => {
    expect(await $fetch('/')).toContain('Nuxt 3')
  })
})





