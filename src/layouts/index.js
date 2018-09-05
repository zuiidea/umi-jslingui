import withRouter from 'umi/withRouter'
import { I18nProvider } from '@lingui/react'
import { catalogs, langFromPath } from '../utils/i18n-config'

export default withRouter(props => {
  const lang = langFromPath(props.location.pathname)
  return (
    <I18nProvider language={lang} catalogs={catalogs}>
      {props.children}
    </I18nProvider>
  )
})
