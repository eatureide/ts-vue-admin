/**
 * 公共接口封装
 */

import request from '@/utils/request'
// interface ResponseData<T = any> {
//     status: number
//     msg: string
//     data: T
// }

export const getLoginInfo = () => {
    return request<{
        logo_square: string
        logo_rectangle: string
        logo_logo: string
        slide: string[]
    }>({
        method: 'GET',
        url: ''
    })
}