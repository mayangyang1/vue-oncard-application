import {account} from '@/api/api'

const user = {
    state: {
        user: {
            'appId': '',
            'auid': '',
            'driverName': '',
            'totalBalance': 0
        },
        status: '',
        token: '',
        name: '',
        avatar: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
        state.token = token
        },
        SET_NAME: (state, name) => {
        state.name = name
        },
        SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
        },
        SET_USER: (state, data) => {
        Object.assign(state.user, data)
        },
    },
    actions: {
        LoadUserToken({ commit }) {
        commit('SET_TOKEN', '12321321')
        },
        LoadUser({ commit }) {
            return new Promise((resolve, reject) => {
                account().then(response => {
                const { content } = response
                commit('SET_USER', content)
                resolve(content)
                }).catch(error => {
                reject(error)
                })
            })
        }
    }
}

export default user;