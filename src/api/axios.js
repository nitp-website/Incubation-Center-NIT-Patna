import axios from 'axios';

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL.split(',')[process.env.REACT_APP_IS_PRODUCTION]
  : '';

const api = axios.create({
    baseURL: REACT_APP_BACKEND_URL,
    withCredentials: true
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('accessToken');
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

api.interceptors.response.use((response)=> response, async (error)=> {
    const oReq = error.config;
    if(error.response?.status === 401 && !oReq._retry){
        oReq._retry = true;
        try{
            const res = await axios.post(
                `${REACT_APP_BACKEND_URL}/auth/refreshToken`,
                {},{withCredentials:true}
            )
            const newToken = res.data.accessToken; 
            localStorage.setItem('accessToken',newToken);
            oReq.headers.Authorization = `Bearer ${newToken}` 
            return api(oReq)
        } catch(err){
            localStorage.clear();
            window.location.href = '/login';
        }
    }
    return Promise.reject(error)
})

export default api;