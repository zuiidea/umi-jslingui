import { withI18n, Trans } from '@lingui/react'
import styles from './index.less'

const IndexPage = props => {
  const { i18n } = props

  const Texts = [
    <Trans>There's a girl but I let her get away</Trans>,
    <Trans>It's all my fault cause pride got in the way</Trans>,
    <Trans>And I'd be lying if I said I was ok</Trans>,
    <Trans>About that girl the one I let get away</Trans>,
    <Trans>I keep saying no</Trans>,
    <Trans>This can't be the way we're supposed to be</Trans>,
    <Trans>I keep saying no</Trans>,
    <Trans>You gotta</Trans>,
    <Trans>There's gotta be a way to get you close to me</Trans>,
    <Trans>Now I know you gotta</Trans>,
    <Trans>Speak up if you want somebody </Trans>,
    <Trans>Can't let them get away, oh no </Trans>,
    '......',
  ]

  return (
    <>
      <div className={styles.title}>That girl</div>
      <div className={styles.content}>
        {Texts.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  )
}

export default withI18n()(IndexPage)
