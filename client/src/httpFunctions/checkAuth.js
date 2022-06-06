const { default: axios } = require("axios");

export default async function checkAuth(href = '/api/checkauth'){;
    let isAuth = false
 
        const res  = await axios.get(href).catch(console.log);
        isAuth = res.data


    return isAuth
    
}