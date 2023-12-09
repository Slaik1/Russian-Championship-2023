import axios from 'axios'

import { BASE_URL, ENDPOINTS } from '../constants/global'

import {userStore} from "../stores/userStore/userStore";

const CURRENT_URL = BASE_URL+ ENDPOINTS.api

export default class CourseService {
    async getAllCurses(): Promise<any> {
        const response = await axios.get(CURRENT_URL + '/get-all-courses', {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })

        return response.data
    }

    async getTests(): Promise<any> {
        const response = await axios.get(CURRENT_URL + '/get-all-tests', {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })

        return response.data
    }
}