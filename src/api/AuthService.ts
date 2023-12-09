import axios from 'axios'

import { BASE_URL, ENDPOINTS } from '../constants/global'

const CURRENT_URL = BASE_URL+ ENDPOINTS.api


export default class AuthService {
    async register(age: number, login: string, email: string, password:string): Promise<any> {
        const response = await axios.post(CURRENT_URL + '/register', {
            age: age,
            login: login,
            email: email,
            password: password
        })

        return response.data
    }

    async login(email: string, password:string): Promise<any> {
        const response = await axios.post(CURRENT_URL + '/login', {
            email: email,
            password: password
        })

        return response.data
    }

    async logout(token: string): Promise<any> {
        const response = await axios.post(CURRENT_URL + '/logout', {
            email: token,
        })

        return response.data
    }

    async user(token: string): Promise<any> {
        const response = await axios.get(CURRENT_URL + '/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    }
}