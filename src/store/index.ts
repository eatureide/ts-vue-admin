import { createStore } from 'vuex'

export interface StoreType {
    count: number
}

const store = createStore<StoreType>({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

export default store