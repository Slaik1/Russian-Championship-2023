import {makeAutoObservable} from 'mobx'

class CurseStore {
  id: number
  showCurse: boolean

  constructor() {
    this.id = -1
    this.showCurse = false
    makeAutoObservable(this)
  }

  setId = (id:number) => {
    this.id = id
  }

  setShowCurse = (isCurse: boolean) => {
    this.showCurse = isCurse
  }
}

export const curseStore = new CurseStore()