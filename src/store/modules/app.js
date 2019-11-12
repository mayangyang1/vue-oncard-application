import {wxsign} from '@/api/wx'
const app = {
    state: {
        wxconfig: {
            timestamp: '',
            nonceStr: '',
            signature: '',
            jsApiList: ['checkJsApi', 'scanQRCode', 'hideMenuItems', 'hideAllNonBaseMenuItem', 'hideOptionMenu', 'openLocation', 'getLocation'],
            appId: '',
            debug: false
        }
    },
    mutations: {
        TOGGLE_WX_CONFIG: (state, data) => {
            Object.assign(state.wxconfig, data);
        }
    },
    actions:{
        togglewxconfig({commit}) {
            return new Promise((resolve, reject) => {
                wxsign().then(response => {
                    const {content} = response,
                    data ={
                        nonceStr: content.noncestr,
                        signature: content.sign,
                        timestamp: content.timestamp,
                        appId: content.wxAppid
                    }
                    commit('TOGGLE_WX_CONFIG', data);
                    resolve(content);
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }
}

export default app;