import consts from '@/utils/consts'
import store from '@/store'

/**
 *  请求封装
 */
export class Rest {

    /**
     * 构造方法
     */
    constructor() {
        /**
         * 接口基础地址
         * @type {string}
         */
        this.baseURL = consts.BASE_URL

        /**
         * Headers
         * @type {Object}
         */

        this.header = {
            // "content-type": "application/x-www-form-urlencoded",
            "content-type": "application/json",
        }


        // 支持的请求方式
        const methods = ['GET', 'POST', 'PUT', 'DELETE']
        // 注册方法到 this
        methods.forEach((method) => {
            this[method] = options => this.request(Object.assign({}, options, { method }))
        })
    }

    /**
     * 请求
     * @param {string} method='GET' 请求方式
     * @param {Object} [options={}] 选项
     */
    request({
        data,
        url,
        isLoading = true,
        method = 'GET',
        header = this.header
    }) {

        this.header.Authorization = uni.getStorageSync('token') 
        return new Promise((resolve, reject) => {
            console.log(this.baseURL);
            isLoading && uni.showLoading({ mask: true })
            uni.request({
                url: this.baseURL + url,
                header,
                data,
                method,
                success: function(res) {
                    if (res.statusCode === 200) {
                        if (res.data.code === 200) {
                            resolve(res.data)
                        } else if (res.data.code === 401) {
                            store.dispatch('logout')
                        } else {
                            uni.showToast({
                                title: res.data.msg,
                                icon: 'none'
                            });
                            resolve(res)
                        }
                    } else {
                        reject('服务器错误')
                        uni.showToast({
                            title: '服务器错误',
                            icon: 'none'
                        });
                    }
                    isLoading && uni.hideLoading()
                },
                fail: function(res) {
                    reject(res);
                    uni.showToast({
                        title: '网络请求失败',
                        icon: 'none'
                    })
                },
            })
        })
    }
}

export default new Rest()