
import mutations from './mutuations'
import actions from './actions'
import getters from './getters'


export default  {
    namespaced:true,
    state() {
        return {
            user: {},
            isLogged: false
        }
    },
    mutations,
    actions,
    getters 
}



