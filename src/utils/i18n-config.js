const languages = [ 'en', 'zh' ]
const catalogs = {
  en: { messages: require('../locales/en/messages.json') },
  zh: { messages: require('../locales/zh/messages.json') },
}

const langFromPath = (pathname) => (pathname.startsWith('/zh/') ? 'zh' : 'en')

export {
  languages,
  catalogs,
  langFromPath,
}
