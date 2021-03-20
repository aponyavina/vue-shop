import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Shop from './shop'

export default new Vuex.Store({
    modules: {
        Shop
    }
})
