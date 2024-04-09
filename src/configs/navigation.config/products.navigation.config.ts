import { PRODUCTS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'


const productsNavigationConfig: NavigationTree[] = [
    {
        key: 'products',
        path: '',
        title: 'PRODUCTS',
        translateKey: 'nav.products.products',
        icon: 'products',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'products.products',
                path: '',
                title: 'Products',
                translateKey: 'nav.products.products',
                icon: 'products',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'products.productsList',
                        path: `${PRODUCTS_PREFIX_PATH}/products-list`,
                        title: 'Products List',
                        translateKey: 'nav.products.productsList',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'products.productsGrid',
                        path: `${PRODUCTS_PREFIX_PATH}/products-grid`,
                        title: 'Products Grid',
                        translateKey: 'nav.products.productsGrid',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]


export default productsNavigationConfig