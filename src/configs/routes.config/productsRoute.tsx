
import { lazy } from 'react'
import { PRODUCTS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const productsRoute: Routes = [
    {
        key: 'pages.productsList',
        path: `${PRODUCTS_PREFIX_PATH}/products-list`,
        component: lazy(() => import('@/pages/products/ProductList/')),
        authority: [ADMIN, USER],
    },
    {
        key: 'pages.productsGrid',
        path: '/access-denied',
        component: lazy(() => import('@/views/pages/AccessDenied')),
        authority: [ADMIN, USER],
    },
]

export default productsRoute