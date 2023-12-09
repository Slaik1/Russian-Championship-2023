import {makeAutoObservable} from 'mobx'

class TestStore {
    isTest:boolean
    testDada:[]

    constructor() {
        this.testDada = []
        this.isTest = false
        makeAutoObservable(this)
    }

    setTestDada = (testData: []) => {
        this.testDada = testData
    }

    setIsTest = (isTest: boolean) => {
        this.isTest = isTest
    }
}

export const testStore = new TestStore()