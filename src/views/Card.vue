<template>
    <div class="card">
        <div class="select-list flex-fs">
            <div @click="selectType(0)" class="select-item " :class="{'active': type == 0}">全部</div>
            <div @click="selectType(2)" class="select-item" :class="{'active': type == 2}">油卡</div>
            <div @click="selectType(3)" class="select-item" :class="{'active': type == 3}">气卡</div>
            <div @click="selectType(4)" class="select-item" :class="{'active': type == 4}">ETC卡</div>
        </div>
        <div class="card-list pdlr10">
            <div @click="cardDetail(item)" class="card-item mgt10" :class="{'bg-orange': item.cardType ==2, 'bg-green': item.cardType == 3}" v-for="(item, index) in accountList" :key="index">
                <div class="flex-fs" style="padding:10px;">
                     <img  class="svg-icon mgt10 " :src="iconClasss[item['cardType']]" alt="">
                     <div style="line-height:24px;">
                         <div>{{item.cardNo}}-({{cardType[item.cardType]}})</div>
                         <div>{{item.ownerOrgName}}</div>
                     </div>
                </div>
                <div class="money">{{item.balance | toThousandsls4Filter}}</div>
                <img class="qr-svg" src="@/assets/svg/Qr-code.svg" alt="">
            </div>
        </div>

    </div>
</template>

<script>
import {getCardList} from '@/api/api'
export default {
    data() {
        return {
            type: 0,
            accountList: [],
            iconClasss: {
                '2': require('@/assets/svg/oil-2.svg'),
                '3': require('@/assets/svg/steam-2.svg'),
                // '8': require('@/assets/svg/maintain.svg'), //零配件
                '4': require('@/assets/svg/ETC-plus.svg')
            },
            cardType:{
                '2': '油卡',
                '3': '气卡',
                '4': 'ETC卡'
            }
        }
    },
    methods: {
        selectType(type) {
            this.type = type;
            let params = {};
            type != 0? params.cardType = type : params={};
           this.getAccountList(params);
        },
        getAccountList(params) {
            getCardList(params).then(res => {
                if(res.code === 200) {
                    this.accountList = res.content;
                }
            })
        },
        cardDetail(cardInfo) {
            this.$router.push({path:'/cardDetail', query: cardInfo});
        }
        
    },

    mounted() {
        const type = this.$route.query.type;
        console.log(type);
        this.type = type;
        let params = {};
        type != 0? params.cardType = type : params={};
        this.getAccountList(params);
    }

}
</script>

<style scoped>
    .card{
        background-color: #f2f2f2;
        min-height: 100vh;
    }
  .select-list{
     padding: 16px 10px;
     background-color: #fff;
        
  }
 .select-item{
     flex: 1;
     background-color: #f2f2f2;
     border-radius: 6px;
     margin-right:10px;
     line-height: 36px;
 }
 .select-item:last-child{
     margin-right: 0;
 }
 .active{
     border: 1px solid #f46000;
     background-color: #fff;
 }
 .card-item{
     border-radius: 6px;
     position: relative;
     padding: 10px;
     color: #fff;
     text-align: left;
     background: linear-gradient(#ffa949,#fe8c0a);
 }
 .svg-icon{
    border-radius: 20px;
    background-color: #fff;
    margin-right: 10px;
 }
 .qr-svg{
     position: absolute;
     bottom: 30px;
     right: 24px;
     width: 40px;
     height: 40px;
 }
 .money{
     font-size: 36px;
     padding-left: 20px;
 }
 .bg-green{
     background: linear-gradient(#0ac5a6,#02ad90);
 }
 .bg-orange{
     background: linear-gradient(#ffa949,#fe8c0a);
 }
</style>