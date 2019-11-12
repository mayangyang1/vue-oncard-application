import axios from 'axios'


const BASEURL = 'https://one.boom56.com/api/';

const STATUS = {
  SUCCESS:      { CODE: 200, MSG: '请求成功'},
  CREATED:      { CODE: 201, MSG: 'created'},
  UNAUTHORIZED: { CODE: 401, MSG: '未授权请求'},
  ERRORPRAMS:   { CODE: 501, MSG: '请求参数不能为空'},
  NOLOGIN:      { CODE: 502, MSG: '请重新登录'},
  ERROTQUERY:   { CODE: 503, MSG: '查询信息为空'},
  TOKENFAILURE: { CODE: 5002, MSG: 'TOKEN过期'},
  ERRORSYSTEM:  { CODE: 9999, MSG: '系统错误'}
}

const service = axios.create({
    baseURL: BASEURL,
    timeout: 60*1000*5,
   'X-Sheny-Type': '',
    'No-message': '',
    withCredentials: true,
    transformRequest: [function (paramObj) {
        if (paramObj) {
        let ret = '',
            i = 0
        for (const key of Object.keys(paramObj)) {
            if (encodeURIComponent(paramObj[key]) !== 'undefined' && paramObj[key] !== null && paramObj[key] !== '' ) {
            ret += (i === 0) ? '' : '&';
            ret += `${key}=${encodeURIComponent(paramObj[key])}`;
            i++;
            }
        }
        return ret
        }
    }],
})
service.interceptors.request.use(config => {
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'apiDriverToken': localStorage.getItem('Token') || ''
    }
    return config;
}, err => {
    Promise.reject(err);
})

//axios 响应拦截器处理响应数据
service.interceptors.response.use(response => {
    const res = response.data;
    if (res.code === STATUS.SUCCESS.CODE){
        return res;
    }
    if(res.code == 510) {//有一笔交易代付款中
        return res;
    }
    if (res.code === STATUS.TOKENFAILURE.CODE) {
        if (confirm('token失效, 请重新登录')) {
            window.location.href = 'about:blank'
            window.close()
        }
        return
    }
    if (res.code != STATUS.SUCCESS.CODE) {
        alert(`errorCode[${res.code}]:${res.message}`)
        return Promise.reject(`Error: ${res.message}`);
    }
}, err => {
    return Promise.reject(err);
})

export default service;
