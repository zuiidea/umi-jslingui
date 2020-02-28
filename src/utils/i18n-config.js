const languages = ['en', 'zh']
const catalogs = {
  en: require('../locales/en/messages.js'),
  zh: require('../locales/zh/messages.js'),
}

const defaultLanguage = 'en'
const deprefix = pathname =>
  `/${pathname
    .split('/')
    .slice(2)
    .join('/')}`
const langFromPath = pathname => (pathname.startsWith('/zh/') ? 'zh' : 'en')

export { languages, catalogs, langFromPath, deprefix, defaultLanguage }
