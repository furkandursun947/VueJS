import api from '../axios/api'


export default  {



    async getUsers()
    {
        // let where;
        // if(limit) where=limit
        // else where= ''
        
        let response = await api.get('/users', {

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("hey",err)
            return null;
        })

        return response;
    },


    async getSingleUser(username){
        debugger; // eslint-disable-line
        // let user = []
        return new Promise((resolve, reject) => {
            api.get('/users')
            .then((res) => {
                let user = res.data.filter(item => item.username === username)
                resolve(user[0]);
            })
            .catch((err) => {
                console.log("hey",err)
                reject(null);
            })
        })
    },
}



