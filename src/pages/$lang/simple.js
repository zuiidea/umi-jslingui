import { withI18n, Trans } from '@lingui/react'
import { Pagination, Calendar } from 'antd'

import 'antd/lib/button/style'
import styles from './index.less'

const SimplePage = props => {
  const { i18n } = props
  const name = 'zuiidea'

  const Contents = [
    <Pagination defaultCurrent={1} total={50} showSizeChanger />,
    <Calendar fullscreen={false} />,
    i18n.t`hello，${name}`,
  ]

  return (
    <>
      <div className={styles.title}>Antd Demo</div>
      <div className={styles.content}>
        {Contents.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  )
}

export default withI18n()(SimplePage)
