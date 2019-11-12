const getters = {
    token: state => state.user.token,
    wxconfig: state => state.app.wxconfig,
    userInfo: state => state.user.user
}

export default getters;