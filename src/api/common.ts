/**
 * 公共接口封装
 */

import request from '@/utils/request'
import { ILoginInfo } from './type/cmmon'

export const getLoginInfo = () => {
    return request<ILoginInfo>({
        method: 'GET',
        url: ''
    })
}