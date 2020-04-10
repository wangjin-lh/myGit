import axios from "axios";



export const getlogin = (parms) => axios.post(`/login`, parms)



//获取房产列表
export const gethomelist = () => axios.get('/getHouseList')



