import withRouter from 'umi/withRouter'
import { I18nProvider, withI18n } from '@lingui/react'
import Link from 'umi/link'

import { catalogs, langFromPath, deprefix } from '../utils/i18n-config'
import styles from './index.less'

const Layout = props => {
  const { i18n, location } = props
  const { pathname } = location

  const lang = langFromPath(pathname)
  const purePathname = deprefix(pathname)
  return (
    <I18nProvider language={lang} catalogs={catalogs}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.translate}>
            <Link
              to={`/en${purePathname}`}
              className={[
                styles.translateItem,
                lang === 'en' ? styles.active : '',
              ].join(' ')}
            >
              EN
            </Link>
            <span className={styles.translateSplit}>/</span>
            <Link
              to={`/zh${purePathname}`}
              className={[
                styles.translateItem,
                lang === 'zh' ? styles.active : '',
              ].join(' ')}
            >
              中文
            </Link>
          </div>
          {props.children}
        </div>
      </div>
    </I18nProvider>
  )
}

export default withRouter(withI18n()(Layout))
