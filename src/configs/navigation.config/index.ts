import appsNavigationConfig from './apps.navigation.config'
import uiComponentNavigationConfig from './ui-components.navigation.config'
import pagesNavigationConfig from './pages.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import docNavigationConfig from './doc.navigation.config'
import productsNavigationConfig from './products.navigation.config'
import type { NavigationTree } from '@/@types/navigation'


const navigationConfig: NavigationTree[] = [
    ...appsNavigationConfig,
    ...uiComponentNavigationConfig,
    ...pagesNavigationConfig,
    ...authNavigationConfig,
    ...docNavigationConfig,
    ...productsNavigationConfig,
]

export default navigationConfig
