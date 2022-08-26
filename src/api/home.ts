import axiosInstance, { AxiosResponseProps } from '@/uitls/request'



export const login = (params: any) => {
	return axiosInstance.post('/accountmanage/login', params);
}




export const getHomeData = () => {
	return axiosInstance.get('/home/getcomprehensiveresult');
}