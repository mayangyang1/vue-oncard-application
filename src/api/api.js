import request from '@/api/request'

const ctrl = 'driver'

export function  account() {
    return request({
        url: `${ctrl}/getAccountInfo`,
        method: 'get',
    })
}
export function  getCardList(data={}) {
    return request({
        url: `${ctrl}/getAccountList`,
        method: 'post',
        data
    })
}
export function cardRecordList(data) {
    return request({
        headers: {
            'apiDriverToken': localStorage.getItem('Token')
        },
        url: `${ctrl}/getSendCardRecord`,
        method: 'post',
        data
    })
}
export function  consumptionRecordList(data = {}) {
    return request({
        headers: {
            'apiDriverToken': localStorage.getItem('Token')
        },
        url: `${ctrl}/getConsumeRecord`,
        method: 'post',
        data
    })
}
export function consumptionRecordDetail(data) {
      return request({
          headers: {
              'apiDriverToken': localStorage.getItem('Token')
          },
          url: `${ctrl}/getConsumeDetail?consumeId=${data.id}`,
          method: 'get'
      })
}