import { _ as e } from './iframe-d9e4d062.js'
import '../sb-preview/runtime.js'
var a = {
  docs: {
    renderer: async () => {
      let { DocsRenderer: r } = await e(
        () => import('./DocsRenderer-NNNQARDV-9f915404.js'),
        [
          './DocsRenderer-NNNQARDV-9f915404.js',
          './iframe-d9e4d062.js',
          './index-c013ead5.js',
          './_commonjsHelpers-725317a4.js',
          './react-18-170c9fcf.js',
          './index-169ee69c.js',
          './index-5853ea8a.js',
          './index-11d98b33.js',
          './index-f889f612.js',
          './index-356e4a49.js',
        ],
        import.meta.url,
      )
      return new r()
    },
  },
}
export { a as parameters }
