export default {
    SET_USER({commit}, payload){
        commit('userModule/setUser', payload, {root:true});
    },

    SET_ISLOGGED({commit}, payload){
        commit('userModule/setIsLogged', payload, {root:true});
    }
}