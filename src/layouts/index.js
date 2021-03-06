import { useState, useEffect } from 'react'
import withRouter from 'umi/withRouter'
import { I18nProvider, withI18n } from '@lingui/react'
import Link from 'umi/link'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import en_US from 'antd/lib/locale-provider/en_US'

import { langFromPath, defaultLanguage } from '../utils/i18n-config'
import Header from './header'
import styles from './index.less'

const languages = {
  zh: zh_CN,
  en: en_US,
}

const Layout = props => {
  const { location } = props
  const { pathname } = location

  const [catalogs, setCatalogs] = useState({})
  const [lang, setLang] = useState(defaultLanguage)

  useEffect(() => {
    if (!catalogs[lang]) {
      import(`@lingui/loader!../locales/${lang}/messages.json`).then(
        catalog => {
          catalogs[lang] = catalog
          setCatalogs({
            ...catalogs,
            [lang]: catalog,
          })
        }
      )
    }
  }, [lang])

  useEffect(() => {
    setLang(langFromPath(pathname))
  }, [langFromPath(pathname)])

  return (
    <LocaleProvider locale={languages[lang]}>
      <I18nProvider language={lang} catalogs={catalogs}>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <Header pathname={pathname} />
            {props.children}
          </div>
        </div>
      </I18nProvider>
    </LocaleProvider>
  )
}

export default withRouter(withI18n()(Layout))
