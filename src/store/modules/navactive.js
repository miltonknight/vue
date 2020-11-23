const state = {
    count: 0,
    navactive: "/home/index" 
}
const mutations = {
    increment(state) {
        state.count++
    }
}
export default {
    namespaced: true,
    state,
    mutations
    // actions
}  
