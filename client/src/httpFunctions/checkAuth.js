const { default: axios } = require("axios");

export default async function checkAuth(href = '/api/checkauth'){;
    let isAuth = false
    try{
        const res  = await axios.get(href);
        alert(JSON.stringify(res.data))
        if(res.status === 403){
            isAuth= false
        }
        return res.data
    }catch(e){
        // window.location.pathname = '/'
    }
    isAuth = true;
    return isAuth
    
}