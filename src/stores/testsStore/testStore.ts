import {makeAutoObservable} from 'mobx'

class TestStore {
    isToken: boolean
    testDada:[]

    constructor() {
        this.isToken = false
        this.testDada = []
        makeAutoObservable(this)
    }

    setIsChild = (isToken: boolean) => {
        this.isToken = isToken
    }

    setTestDada = (testData: []) => {
        this.testDada = testData
    }
}

export const testStore = new TestStore()