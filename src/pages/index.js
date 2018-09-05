import Redirect from 'umi/redirect'
import { defaultLanguage } from '../utils/i18n-config'

export default () => <Redirect to={`/${defaultLanguage}/`} />
