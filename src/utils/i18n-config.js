const languages = ['en', 'zh']
const catalogs = {
  en: { messages: require('../locales/en/messages.json') },
  zh: { messages: require('../locales/zh/messages.json') },
}

const defaultLanguage = 'en'
const deprefix = pathname =>
  `/${pathname
    .split('/')
    .slice(2)
    .join('/')}`
const langFromPath = pathname => (pathname.startsWith('/zh/') ? 'zh' : 'en')

export { languages, catalogs, langFromPath, deprefix, defaultLanguage }
