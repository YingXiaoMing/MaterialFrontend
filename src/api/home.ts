import axiosInstance, { AxiosResponseProps } from '@/uitls/request'



export const login = (params: any) => {
	return axiosInstance.post('/accountmanage/login', params);
}


export const getpigirondailyoutput = () => {
	return axiosInstance.get('/car/getpigirondailyoutput');
}
