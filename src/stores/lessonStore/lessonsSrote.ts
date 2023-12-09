import {makeAutoObservable} from 'mobx'

class LessonStore {
  id: number
  showLesson: boolean

  constructor() {
    this.id = -1
    this.showLesson = false
    makeAutoObservable(this)
  }

  setId = (id:number) => {
    this.id = id
  }

  setShowCurse = (isLesson: boolean) => {
    this.showLesson = isLesson
  }
}

export const lessonStore = new LessonStore()