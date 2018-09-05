import { withI18n, Trans } from '@lingui/react'
import styles from './index.css'

const IndexPage = props => {
  console.log(props)
  const { i18n } = props
  return (
    <div className={styles.normal}>
      <Trans>Hello</Trans>
      {i18n.t`Hello`}
      <h1>Page index</h1>
    </div>
  )
}

export default withI18n()(IndexPage)
