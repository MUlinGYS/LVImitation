import http from './http'

let resquest = "/seeyon"

export default {

//   /*
//   * 实列
//   * */
//   //用户登录
//   userlogin(params){
//     return http.post(`${resquest}/auth/login`,params)
//   },
// //  用户权限查看
//   getpermissions(params){
//     return http.get(`${resquest}/auth/getUserInfo`)
//   },
//
//
// //  删除菜单
//   delmenu(params){
//     return http.delete(`${resquest}/system/menu/${params}`)
//   },
// //  修改菜单
//   putmenu(params){
//     return http.put(`${resquest}/system/menu/edit`,params)
//   },



//    获取物流信息
    getinfo(id){
        return http.get(`${resquest}/rest/sf/logistics?orderId=${id}`)
    },


}
