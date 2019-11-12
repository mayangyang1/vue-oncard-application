<template>
    <div class="consumptionRecord">
        <div @click="recordDetail(item.id)" class="record-item flex-sb" v-for="(item, index) in consumptionList" :key="index">
            <div class="flex-fs">
                <div class="c-logo" slot="label">油</div>
                <div>
                    <div style="font-size:16px;font-weight:500;">{{item.consumeDetail}}</div>
                    <div style="font-size:14px;color:#888;">{{item.orgName}}</div>
                    <div style="font-size:14px;color:#888;">{{item.consumeTime}}</div>
                </div>
            </div>
            <div style="color:red;">-{{item.cardPaymentAmount}}</div>
        </div>
         <p style="text-align:center;margin-top:10px;color:#999999;font-size:80%;">{{ consumptionList.length == 0 ? '空空如也' : '我是有底线的' }}</p>
    </div>
</template>
<script>
import {consumptionRecordList} from '@/api/api';
export default {
    data() {
        return {
            consumptionList: [],
            cardId: '',
        }
    },
    methods: {
        
        getConsumptionRecordList() {
            consumptionRecordList({cardId:this.cardId}).then(res => {
                if(res.code === 200) {
                    this.consumptionList = res.content;
                }
            })
        },
        recordDetail(id) {
            this.$router.push({path:'/consumptionRecordDetail', query:{id:id}})
        }
    },
    mounted() {
        this.cardId = this.$route.query.cardId;
        this.getConsumptionRecordList();
    }
}
</script>

<style scoped>
    .consumptionRecord{
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