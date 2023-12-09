import {makeAutoObservable} from 'mobx'

class UserStore {
  token: string | null
  isToken: boolean

  constructor() {
    this.token = localStorage.getItem('token')
    this.isToken = false
    makeAutoObservable(this)
  }

  setToken = (token:string) => {
    this.token = token
    localStorage.setItem('token', token)
  }

  getToken = () => {
    return localStorage.getItem('token')
  }

  setIsToken = (isToken: boolean) => {
    this.isToken = isToken
  }

}

export const userStore = new UserStore()