import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'

import businessRoutes from './routes'

import useUserInfoStore from '@/store/userInfo'

type dealDataType = (data: RouteType[]) => RouteType[]
const { VITE_APP_HOMEPAGE } = import.meta.env

// 进行权限过滤所有的业务路由
export default function usePermissionRoutes(): RouteType[] {
  const { permssion } = useUserInfoStore()

  return useMemo(() => {
    const filterFunc = (data: RouteType[]) =>
      data?.filter((i) => permssion.routes.includes('route:' + i.meta?.permissionKey)) || []

    const dealDataFunc: dealDataType = (data: RouteType[]) => {
      return filterFunc(data)?.map((item) => {
        const mapItem = {
          ...item,
          children: item?.children ? dealDataFunc(filterFunc(item.children)) : null
        }

        // 自动生成重定向路由
        if (mapItem?.children?.length) {
          const redirectRoute = {
            index: true,
            element: <Navigate to={mapItem.children[0].path} replace />
          } as RouteType

          mapItem.children.unshift(redirectRoute)
        }

        return mapItem
      })
    }

    // 目前仅需过滤第一层
    const filterRoutes = dealDataFunc(businessRoutes).filter(
      (i) => i.children?.length || VITE_APP_HOMEPAGE.includes(i.path)
    )

    return filterRoutes
  }, [permssion.routes])
}
