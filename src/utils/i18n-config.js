const defaultLanguage = 'zh'

const deprefix = pathname =>
  `/${pathname
    .split('/')
    .slice(2)
    .join('/')}`

const langFromPath = pathname => (pathname.startsWith('/zh/') ? 'zh' : 'en')

export { langFromPath, deprefix, defaultLanguage }
