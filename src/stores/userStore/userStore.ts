import {makeAutoObservable} from 'mobx'

class UserStore {
  token: string | null

  constructor() {
    this.token = localStorage.getItem('token')
    makeAutoObservable(this)
  }

  setToken = (token:string) => {
    this.token = token
    localStorage.setItem('token', token)
  }
}

export const userStore = new UserStore()