<template>
    <div class="record">
        <div class="record-item flex-sb" v-for="(item, index) in recordList" :key="index">
            <div class="flex-fs">
                <div class="c-logo" slot="label">充</div>
                <div>
                    <div style="font-size:16px;font-weight:500;">{{item.surChargeName}}</div>
                    <div style="font-size:14px;color:#888;">{{item.orgName}}</div>
                    <div style="font-size:14px;color:#888;">{{item.createTime}}</div>
                </div>
            </div>
            <div style="color:red;">+{{item.rechargeAmount}}</div>
        </div>
         <p style="text-align:center;margin-top:10px;color:#999999;font-size:80%;">{{ recordList.length == 0 ? '空空如也' : '我是有底线的' }}</p>
    </div>
</template>
<script>
import {cardRecordList} from '@/api/api'
export default {
    data() {
        return {
            recordList: [],
        }
    },
    methods: {
        getRechargeCardRecordList() {
            cardRecordList().then(res => {
                if(res.code === 200 && res.content.length) {
                    this.recordList = res.content;
                }
            })
        }
    },
    mounted() {
        this.getRechargeCardRecordList();
    }
}
</script>

<style  scoped>
.record{
    background-color: #f2f2f2;
    min-height: 100vh;
    
}
.c-logo{
    height:36px;
    width:36px;
    background-color:#e0d00a;
    color:#ffffff;
     border-radius:50px;
     display:flex;
     justify-content: center;
     margin-right:10px;;
    align-items: center;
}
 .record-item{
     padding:10px 10px;
     background-color: #fff;
     line-height: 22px;
     text-align: left;
     border-bottom: 1px solid #ccc;
 }
</style>