// Use the shim for prose
import { setup } from 'twind/shim'
import typography from '@twind/typography'

setup({
  plugins: {
    ...typography(),
  },
})

import App from './app.svelte'

const app = new App({
  target: document.body,
})

export default app

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
