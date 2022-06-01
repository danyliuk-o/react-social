import axios from "axios";
import {UsersType} from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "82eefa26-4fd4-4c2f-bbf3-629bcbb0e2be",
  },
});

export type GetItemsType = {
  items: Array<UsersType>
  totalCount: number
  error: string | null
}

export type ResponseTypeAPI<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,

}
export enum ResultCodeForLoginEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}
