
import { toast } from '@/utils/bridge/index'
import consts from '@/utils/consts'

export default {
    install(Vue) {
        Vue.prototype.$toast = toast
        Vue.prototype.$consts = consts
    }
}