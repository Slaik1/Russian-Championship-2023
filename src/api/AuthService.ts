import axios from 'axios'

import {userStore} from '../stores/userStore/userStore'

import { BASE_URL, ENDPOINTS } from '../constants/global'

const CURRENT_URL = BASE_URL+ ENDPOINTS.api


export default class AuthService {
    async login(login: string, password:string): Promise<any> {
        const response = await axios.post(CURRENT_URL + '/login', {
            login: login,
            password: password,
            email:'test@mail.com'
        })

        return response.data
    }
}