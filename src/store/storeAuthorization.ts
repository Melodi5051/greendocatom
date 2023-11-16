import { makeAutoObservable } from "mobx"

interface IUser {
    login: string;
    password: string;
    email: string;
    token?: number
}

class storeAuthorization {

    users: IUser[] = []

    constructor() {
        makeAutoObservable(this)
    }

    createUser(user: IUser) {
        const token = Date.now() + (30 * 24 * 60 * 60 * 1000)
        this.users.push({ ...user, token })
        localStorage.setItem('users', JSON.stringify(this.users))
    }

    authentication(login: string, password: string): boolean {
        const users = localStorage.getItem('users')
        if (users) {
            return JSON.parse(users).every((user: IUser) => {
                if (user.login === login && user.password === password && user.token && user.token > Date.now()) {
                    return true
                }
            })
        }
        return false
    }
}

export default new storeAuthorization