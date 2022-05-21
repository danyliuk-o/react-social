import axios from "axios";
import {ProfileType} from "../types/types";
import {login} from "../redux/authReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "82eefa26-4fd4-4c2f-bbf3-629bcbb0e2be",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId: number) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },
  unfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getProfile(userId: number) {
    console.log("Obsolete method. Please< use profile Api object");
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(file: any) {
    const formData = new FormData()
    formData.append('image', file)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile)
  }
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,

}
export enum ResultCodeForLogin {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  },
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type LoginResponseType = {
  data: {
    userId: number
  },
  resultCode: ResultCodeForLogin
  messages: Array<string>
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then(response => response.data);
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
        .then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
