import { I18nProvider, withI18n, Trans } from '@lingui/react'
import Link from 'umi/link'

import { langFromPath, deprefix } from '../utils/i18n-config'
import styles from './header.less'

const Header = props => {
  const { i18n, pathname } = props
  const purePathname = deprefix(pathname)
  const lang = i18n._language

  const menus = [
    {
      link: i18n.t`/`,
      name: <Trans>Home</Trans>,
    },
    {
      link: i18n.t`/simple`,
      name: <Trans>Demo</Trans>,
    },
  ]

  return (
    <div className={styles.fixedHeader}>
      <div className={styles.navgation}>
        {menus.map(item => (
          <Link
            key={item.link}
            to={item.link}
            className={[
              styles.navgationItem,
              pathname === item.link ? styles.active : '',
            ].join(' ')}
          >
            {item.name}
          </Link>
        ))}
      </div>

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
    </div>
  )
}

export default withI18n()(Header)
