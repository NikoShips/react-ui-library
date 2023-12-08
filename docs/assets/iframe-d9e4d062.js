import '../sb-preview/runtime.js'
;(function () {
  const _ = document.createElement('link').relList
  if (_ && _.supports && _.supports('modulepreload')) return
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t)
  new MutationObserver((t) => {
    for (const e of t)
      if (e.type === 'childList')
        for (const o of e.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && c(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(t) {
    const e = {}
    return (
      t.integrity && (e.integrity = t.integrity),
      t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (e.credentials = 'include')
        : t.crossOrigin === 'anonymous'
        ? (e.credentials = 'omit')
        : (e.credentials = 'same-origin'),
      e
    )
  }
  function c(t) {
    if (t.ep) return
    t.ep = !0
    const e = s(t)
    fetch(t.href, e)
  }
})()
const E = 'modulepreload',
  d = function (i, _) {
    return new URL(i, _).href
  },
  u = {},
  r = function (_, s, c) {
    if (!s || s.length === 0) return _()
    const t = document.getElementsByTagName('link')
    return Promise.all(
      s.map((e) => {
        if (((e = d(e, c)), e in u)) return
        u[e] = !0
        const o = e.endsWith('.css'),
          a = o ? '[rel="stylesheet"]' : ''
        if (!!c)
          for (let l = t.length - 1; l >= 0; l--) {
            const m = t[l]
            if (m.href === e && (!o || m.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${e}"]${a}`)) return
        const n = document.createElement('link')
        if (
          ((n.rel = o ? 'stylesheet' : E),
          o || ((n.as = 'script'), (n.crossOrigin = '')),
          (n.href = e),
          document.head.appendChild(n),
          o)
        )
          return new Promise((l, m) => {
            n.addEventListener('load', l),
              n.addEventListener('error', () => m(new Error(`Unable to preload CSS for ${e}`)))
          })
      }),
    ).then(() => _())
  },
  { createBrowserChannel: p } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: R } = __STORYBOOK_MODULE_PREVIEW_API__,
  O = p({ page: 'preview' })
R.setChannel(O)
window.__STORYBOOK_ADDONS_CHANNEL__ = O
window.CONFIG_TYPE === 'DEVELOPMENT' && (window.__STORYBOOK_SERVER_CHANNEL__ = O)
const f = {
  './src/Index.mdx': async () =>
    r(
      () => import('./Index-528c58d1.js'),
      [
        './Index-528c58d1.js',
        './jsx-runtime-bc5d6cf6.js',
        './index-c013ead5.js',
        './_commonjsHelpers-725317a4.js',
        './index-5853ea8a.js',
        './index-169ee69c.js',
        './index-11d98b33.js',
        './index-f889f612.js',
        './index-356e4a49.js',
        './index-dc1d5b46.js',
      ],
      import.meta.url,
    ),
  './src/components/DemoComponent/DemoComponent.stories.tsx': async () =>
    r(
      () => import('./DemoComponent.stories-f78e2984.js'),
      [
        './DemoComponent.stories-f78e2984.js',
        './jsx-runtime-bc5d6cf6.js',
        './index-c013ead5.js',
        './_commonjsHelpers-725317a4.js',
      ],
      import.meta.url,
    ),
}
async function P(i) {
  return f[i]()
}
const { composeConfigs: T, PreviewWeb: w, ClientApi: L } = __STORYBOOK_MODULE_PREVIEW_API__,
  I = async () => {
    const i = await Promise.all([
      r(
        () => import('./entry-preview-a94de739.js'),
        [
          './entry-preview-a94de739.js',
          './index-c013ead5.js',
          './_commonjsHelpers-725317a4.js',
          './react-18-170c9fcf.js',
          './index-169ee69c.js',
        ],
        import.meta.url,
      ),
      r(
        () => import('./entry-preview-docs-233d3dcf.js'),
        [
          './entry-preview-docs-233d3dcf.js',
          './index-f889f612.js',
          './_commonjsHelpers-725317a4.js',
          './index-356e4a49.js',
          './index-c013ead5.js',
        ],
        import.meta.url,
      ),
      r(() => import('./preview-73104b77.js'), ['./preview-73104b77.js', './index-11d98b33.js'], import.meta.url),
      r(() => import('./preview-0e7815fa.js'), [], import.meta.url),
      r(() => import('./preview-d01b88e8.js'), ['./preview-d01b88e8.js', './index-356e4a49.js'], import.meta.url),
      r(() => import('./preview-30b54f76.js'), ['./preview-30b54f76.js', './index-356e4a49.js'], import.meta.url),
      r(() => import('./preview-c56bf6ac.js'), [], import.meta.url),
      r(() => import('./preview-da31036b.js'), ['./preview-da31036b.js', './index-356e4a49.js'], import.meta.url),
      r(() => import('./preview-0ef86afd.js'), [], import.meta.url),
      r(
        () => import('./preview-8f310eab.js'),
        ['./preview-8f310eab.js', './_commonjsHelpers-725317a4.js'],
        import.meta.url,
      ),
      r(() => import('./preview-1e5c59db.js'), [], import.meta.url),
    ])
    return T(i)
  }
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new w()
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ || new L({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore })
window.__STORYBOOK_PREVIEW__.initialize({ importFn: P, getProjectAnnotations: I })
export { r as _ }
