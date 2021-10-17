import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "82eefa26-4fd4-4c2f-bbf3-629bcbb0e2be"

    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },
    userFollow(userId) {
        return instance.post(`follow/${userId}`, {}
        ).then(response => response.data)
    },
    userUnfollow(userId) {
        return instance.delete(`follow/${userId}`,
        ).then(response => response.data)
    }

}

