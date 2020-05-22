import request from '@/utils/request';


//获取项目列表
export function projectList() {
    return request.GET({
        url: '/device/bcProject'
    })
}
