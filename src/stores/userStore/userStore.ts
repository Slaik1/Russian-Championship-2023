import {makeAutoObservable} from 'mobx'

class UserStore {
  token: string | null
  isToken: boolean
  isChild: boolean

  constructor() {
    this.token = localStorage.getItem('token')
    this.isToken = false
    this.isChild = true
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

  setIsChild = (isChild: boolean) => {
    this.isChild = isChild
  }

}

export const userStore = new UserStore()