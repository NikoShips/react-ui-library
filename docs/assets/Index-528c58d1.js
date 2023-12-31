import { j as o, a as n, F as i } from './jsx-runtime-bc5d6cf6.js'
import { M as s } from './index-5853ea8a.js'
import { u as a } from './index-dc1d5b46.js'
import './index-c013ead5.js'
import './_commonjsHelpers-725317a4.js'
import './iframe-d9e4d062.js'
import '../sb-preview/runtime.js'
import './index-169ee69c.js'
import './index-11d98b33.js'
import './index-f889f612.js'
import './index-356e4a49.js'
function r(t) {
  const e = Object.assign({ h1: 'h1', p: 'p', code: 'code', h2: 'h2', a: 'a' }, a(), t.components)
  return n(i, {
    children: [
      o(s, { title: 'Getting started' }),
      `
`,
      o(e.h1, { id: 'create-react-ui-lib-template', children: 'Create React UI Lib Template' }),
      `
`,
      o(e.p, {
        children:
          'Thank you for using Create React UI Lib! Now, open the project in your favorite code editor and start hacking on your components.',
      }),
      `
`,
      n(e.p, {
        children: [
          'There is a demo component, you can use it as a reference. You can also use MDX, just as this file — ',
          o(e.code, { children: 'Index.mdx' }),
          '.',
        ],
      }),
      `
`,
      o(e.h2, { id: 'about-storybook', children: 'About Storybook' }),
      `
`,
      n(e.p, {
        children: [
          o(e.a, {
            href: 'https://storybook.js.org/',
            target: '_blank',
            rel: 'nofollow noopener noreferrer',
            children: 'Storybook',
          }),
          ` helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop components as well as writing documentation for them.`,
        ],
      }),
    ],
  })
}
function j(t = {}) {
  const { wrapper: e } = Object.assign({}, a(), t.components)
  return e ? o(e, Object.assign({}, t, { children: o(r, t) })) : r(t)
}
export { j as default }
