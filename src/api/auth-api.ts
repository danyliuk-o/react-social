import {instance, ResponseTypeAPI, ResultCodeForLoginEnum} from "./api";



type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<ResponseTypeAPI<MeResponseDataType>>(`auth/me`).then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<ResponseTypeAPI<LoginResponseDataType, ResultCodeForLoginEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data) as Promise<ResponseTypeAPI>;
    },
};