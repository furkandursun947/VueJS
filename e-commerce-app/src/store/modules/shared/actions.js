export default {
    SET_LOADING({commit}, payload){
        // debugger; // eslint-disable-line no-debugger
        commit('sharedModule/setLoading', payload, {root:true});
    }
}