
import BaseApi from '../api/base'
import * as api from '../api'

export default {
    install(Vue, opts) {
        BaseApi(Vue, opts)
        Vue.mixin(
            {
                comments:{
                    // [Toast.name]: Toast
                },
                data() {
                    return {
                        api,
                    }
                },
            }
        )
    }
}