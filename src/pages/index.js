import { withI18n, Trans } from '@lingui/react'
import styles from './index.less'

const IndexPage = props => {
  const { i18n } = props
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.title}>That girl</div>
        <div className={styles.content}>
          <p>
            <Trans>There's a girl but I let her get away</Trans>
          </p>
          <p>
            <Trans>It's all my fault cause pride got in the way </Trans>
          </p>
          <p>
            <Trans>And I'd be lying if I said I was ok  </Trans>
          </p>
          <p>
            <Trans>About that girl the one I let get away  </Trans>
          </p>
        </div>
      </div>
    </div>
  )
}

export default withI18n()(IndexPage)
