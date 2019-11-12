import request from '@/api/request'

export function wxsign() {
    const data = {
        url: window.location.origin + window.location.pathname
    }

    return request({
        url: `driver/getWXSign`,
        method: 'post',
        data
    })
}