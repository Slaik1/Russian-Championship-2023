import axios from 'axios'

import {userStore} from '../stores/userStore/userStore'

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
}