<template>
    <div class="card-detal">
        <div class="card-detail-header" :class="{'bg-orange': cardInfo.cardType == 2, 'bg-green': cardInfo.cardType == 3}">
            <div class="company-name">{{cardInfo.ownerOrgName}}-{{cardType[cardInfo.cardType]}}</div>
            <div class="flex-fs">
                <div class="title">油券卡号：</div>
                <div>{{cardInfo.cardNo}}</div>
            </div>
            <div class="flex-fs">
                <div class="title">派发企业：</div>
                <div>{{cardInfo.ownerOrgName}}</div>
            </div>
            <div class="flex-fs">
                <div class="title">卡券余额：</div>
                <div>¥ {{cardInfo.balance}}</div>
            </div>
            <img class="svg-icon" :src="iconClasss[cardInfo.cardType]" alt="">
        </div>
        <div class="card-detail-scan">
            <div @click="addOilRecord(type)" class="flex-sb" style="border-bottom:1px solid #ccc; line-height:45px;">
                <div>使用记录</div>
                <van-icon name="arrow"></van-icon>
            </div>
            <div class="flex-sb" style="border-bottom:1px solid #ccc; line-height:45px;">
                <div>使用帮助</div>
                <van-icon name="arrow"></van-icon>
            </div>
            <div class="scan-btn" @click="wxcScanClicked">扫码支付</div>
        </div>
    </div>
</template>
<script>
import {Icon} from 'vant'
export default {
    data() {
        return {
            cardInfo: {},
            type: 0,
            scanMerchant: {
                orgName: '',
                orgCode: ''
            },
            iconClasss: {
                '2': require('@/assets/svg/addoil.svg'),
                '3': require('@/assets/svg/addgas.svg'),
                // '8': require('@/assets/svg/maintain.svg'), //零配件
                '4': require('@/assets/svg/etc.svg')
            },
            cardType:{
                '2': '油卡',
                '3': '气卡',
                '4': 'ETC卡'
            }
        }
    },
    components: {
      [Icon.name] : Icon,  
    },
    methods: {
        addOilRecord(type) {
            this.$router.push({path:'/consumptionRecord', query: {type:type}});
        },
        wxcScanClicked() {
            const that = this;
            that.scanMerchant = {};
            that.errorMsg = '';
            wx.ready(function() {
                wx.scanQRCode({
                    needResult: 1,
                    scanType: ['qrCode', 'barCode'],
                    success: function (res) {
                        that.isScan = true;
                        const params = {
                            signQR: res.resultStr
                        }
                        console.log('res=', res);
                    }
                })
            })
        }
    },
    created() {
        console.log(this.$route.query);
       this.cardInfo = Object.assign(this.cardInfo, this.$route.query);
        // this.cardInfo = this.$route.query;
        console.log(this.cardInfo);
    }
}
</script>

<style scoped>
    .card-detal{
        background-color: #f2f2f2;
        min-height: 100vh;
        padding-top: 20px;
    }
    .card-detail-header{
        width: 80vw;
        margin: 0 auto;
       padding: 30px 20px;
        color: #fff;
       border-radius: 10px;
       line-height: 30px;
       position: relative;
    }
    .svg-icon{
        width: 100px;
        height: 100px;
        position: absolute;
        right: 20px;
        top: 50px;
       
    }
    .card-detail-scan{
        width: 80vw;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px 20px 0 20px;
        border-radius: 10px;
        padding-bottom: 60px;
    }
    .scan-btn{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background-color: #f46000;
        line-height: 180px;
        color: #fff;
        margin: 0 auto;
        margin-top: 40px;
        font-size: 24px;
    }
     .bg-green{
        background: linear-gradient(#0ac5a6,#02ad90);
    }
    .bg-orange{
        background: linear-gradient(#ffa949,#fe8c0a);
    }
</style>