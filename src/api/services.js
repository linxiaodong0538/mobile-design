import request from '@/utils/request';


export class SuperService {
    url = '';
    invoke = request;

    constructor({ url }) {
        this.url = url;
    }

    /**  查询用户列表 */
    all(query) {
        return request({
            url: `${this.url}`,
            method: 'get',
            params: query || {}
        })
    }

    search(query) {
        return request({
            url: `${this.url}/list`,
            method: 'post',
            data: query || {}
        })
    }

    /**  查询用户详细 */
    get({ id } = { id: undefined }) {
        if (id !== undefined) {
            return request({
                url: `${this.url}/${id}`,
                method: 'get'
            });
        } else {
            return request({
                url: `${this.url}`,
                method: 'get',
                params: arguments[0] || {}
            });
        }
    }

    /**  新增用户 */
    create(parameters) {
        return request({
            url: `${this.url}`,
            method: 'post',
            data: parameters
        })
    }

    /**  修改用户 */
    update(parameters) {
        return request({
            url: `${this.url}`,
            method: 'put',
            data: parameters
        })
    }

    /**  修改用户 */
    patch(parameters) {
        return request({
            url: `${this.url}`,
            method: 'patch',
            data: parameters
        })
    }

    /**  删除用户 */
    remove({ id, ids }) {
        if (ids) {
            return request({
                url: `${this.url}`,
                method: 'delete',
                data: { ids: ids }
            });
        } else {
            return request({
                url: `${this.url}/${id}`,
                method: 'delete'
            });
        }
    }

    /**
     * 上传 | 导入
     * @param {*} parameters
     */
    upload(parameters) {
        return request({
            url: `${this.url}/upload`,
            method: 'post',
            data: parameters
        });
    }

    /**  导出用户 */
    download(parameters) {
        return request({
            url: `${this.url}/export`,
            method: 'post',
            data: parameters
        })
    }

    /** 校验 */
    validate(parameters) {
        return request({
            url: `${this.url}/validate`,
            method: 'post',
            data: parameters
        })
    }
}
