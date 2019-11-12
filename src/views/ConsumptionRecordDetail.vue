<template>
    <div class="record-detail">
        <div class="con-header">
            <p>{{detailInfo.orgName}}</p>
            <p style="font-size:30px;">-{{detailInfo.cardPaymentAmount}}</p>
            <p>{{detailInfo.createTime}}</p>
        </div>
        <div class="flex-fs con-detail" style="padding-top:30px;">
            <div class=" title">商品名称</div>
            <div>{{detailInfo.productName}}</div>
        </div>
        <div class="flex-fs con-detail">
            <div class=" title">商品单价</div>
            <div>{{detailInfo.price}}</div>
        </div>
        <div class="flex-fs con-detail">
            <div class=" title">商品数量</div>
            <div>{{detailInfo.goodsNum}}</div>
        </div>

        <div class="flex-fs con-detail">
            <div class="title">应收</div>
            <div>{{detailInfo.totalPaymentAmount}}</div>
        </div>
        <div class="flex-fs con-detail">
            <div class="title">卡支付</div>
            <div>{{detailInfo.cardPaymentAmount}}</div>
        </div>
        <div class="flex-fs con-detail">
            <div class="title">其他卡支付</div>
            <div>{{detailInfo.cashPaymentAmount}}</div>
        </div>
    </div>
</template>
<script>
import {consumptionRecordDetail} from '@/api/api'
export default {
    data() {
        return {
            detailInfo: {}
        }
    },
    methods: {
        getDetail() {
            const id = this.$route.query.id;
            consumptionRecordDetail({id:id}).then(res => {
                if(res.code === 200) {
                    this.detailInfo = res.content;
                }
            })
        }
    },
    mounted() {
        this.getDetail();
    }
}
</script>

<style scoped>
    .record-detail{
        min-height: 100vh;
        background-color: #f2f2f2;
    }
    .con-header{
        background-color: #fff;
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid #ccc;
    }
    .con-header p{
        line-height: 40px;
        margin: 0;
    }
    .con-detail{
        padding-left: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .con-detail:last-child {
        padding-bottom: 30px;
    }
    .con-detail .title{
        color: #888;
        margin-right: 20px;
        text-align-last:justify;
        text-align:justify;
        text-justify:distribute-all-lines;
        width: 90px;
    }
</style>