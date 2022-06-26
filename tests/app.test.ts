import { describe, expect, it } from 'vitest'

import { setup, $fetch, isDev } from '@nuxt/test-utils-edge'
import { fileURLToPath } from 'url'

describe('SSR', async () => {

  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true,
  })

  it('renders the index page', async () => {
    expect(await $fetch('/')).toContain('Nuxt 3')
  })
})





