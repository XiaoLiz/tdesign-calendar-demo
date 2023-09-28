import { httpRequest } from '../../utils/request'
const baseUrl = require('../base').allBaseUrl.GDEnvs.host
console.log(baseUrl, 'config')

interface ReturnUserInfo {
    phone: string
    username: string
    avatar: string
    nickname: string
}

interface UserInfoParams {
    username: string
    password: string
}

export default class userApi {
  /**
   * @description: 获取用户信息
   * @return {*}
   */
  static getUserInfo = (data: UserInfoParams ) =>
    httpRequest.post<ReturnUserInfo>(
      baseUrl + '/mock/getUserInfo',
      data
    )

//   /**
//    * @description: 
//    * @return {*}
//    */
//   static getVillageList = (): any =>
//     httpRequest.get<VillageList>(
//       baseUrl + '/mock/villageList',
//     )
}



