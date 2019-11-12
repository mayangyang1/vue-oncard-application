<template>
  <div class="home">
    <div class="home-header">
        <div class="user-name">{{userInfo.driverName || '未登录'}}</div>
        <div class="flex-fs">
          <div @click="addOil(0)" class="card">
            <div>{{userInfo.cardCount || '0'}}</div>
            <div style="margin-top:6px;">卡券</div>
          </div>
          <div @click="addOil(0)" class="money">
            <div>{{userInfo.totalBalance |toThousandsls4Filter}}</div>
            <div style="margin-top:6px;">卡券余额</div>
          </div>
        </div>
    </div>
    <van-row class="middle-card">
        <van-col @click="addOil(2)" style="border-right:1px solid #ccc;" span="6">
            <img class="svg-icon mgt10" src="@/assets/svg/oil-2.svg" alt="">
            <div class="mgb10">加油</div>
        </van-col>
        <van-col @click="addOil(3)"  style="border-right:1px solid #ccc;" span="6">
            <img class="svg-icon mgt10" src="@/assets/svg/steam-2.svg" alt="">
            <div class="mgb10">加气</div>
        </van-col>
        <van-col style="border-right:1px solid #ccc;" span="6">
          <a href="javascript:;" onclick="alert('该服务暂未开放')">
            <img class="svg-icon mgt10" src="@/assets/svg/accessories-2.svg" alt="">
            <div class="mgb10">买零配件</div>
          </a>
        </van-col>
        <van-col @click="navigation"  span="6">
          <img class="svg-icon mgt10" src="@/assets/svg/navigation-2.svg" alt="">
          <div class="mgb10">商户导航</div>
        </van-col>
    </van-row>
    <van-row style="background-color:#fff;" class="mgt10">
      <label @click="addOil(0)">
        <cell-item  imgUrl="wallet" titleContent="我的卡包"></cell-item>
      </label>
      <label @click="record">
        <cell-item imgUrl="dispatch" titleContent="充值记录"></cell-item>
      </label>
      <label @click="consumptionRecord">
        <cell-item imgUrl="consume" titleContent="消费记录"></cell-item>
      </label>
       <cell-item imgUrl="consume" titleContent="未完成订单列表"></cell-item>
    </van-row>
  </div>
</template>

<script>
import {Button, Row, Col,} from 'vant';
import {getQueryVariable} from '@/utils/index';
import {mapGetters} from 'vuex'
import Cell from '@/components/Cell'

export default {
  name: 'home',
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
   addOil(type) {
     this.$router.push({path:'/card', query:{type: type}})
   },
   navigation() {
     this.$router.push('/navigation')
   },
   record() {
     this.$router.push('/rechargeRecord')
   },
   consumptionRecord() {
     this.$router.push('/consumptionRecord')
   }

    
  },
  components: {
    [Button.name] : Button,
    [Row.name] : Row,
    [Col.name] : Col,
    'cell-item': Cell,
  },
  mounted() {
    const token = getQueryVariable('token');

    if(token) {
      localStorage.setItem('Token', token);
      this.$store.dispatch('togglewxconfig').then(res => {
        wx.config(this.$store.getters.wxconfig);
        wx.hideOptionMenu();
        wx.hideMenuItems({
          menuList: [
            "menuItem:share:appMessage",
            "menuItem:share:timeline",
            "menuItem:share:qq",
            "menuItem:share:weiboApp",
            "menuItem:favorite",
            "menuItem:share:facebook",

            "menuItem:share:QZone",
            "menuItem:editTag",
            "menuItem:delete",
            "menuItem:copyUrl",
            "menuItem:originPage",
            "menuItem:readMode",
            "menuItem:openWithQQBrowser",
            "menuItem:openWithSafari",
            "menuItem:share:email",
            "menuItem:share:brand"
          ],
          success: function (res) {

          },
          fail: function  (res) {
            
          }
        });
        this.$store.dispatch('LoadUser');
      })
    }
  }
}
</script>

<style scoped>
  .home{
    background-color: #f2f2f2;
    min-height: 100vh;
    padding-top: 10px;
  }
  .home-header{
    margin: 0 10px;
    background: linear-gradient(#ffab3b,#e07200);
    height: 180px;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
  }
  .user-name{
    font-size: 40px;
    line-height: 100px;
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
  }
  .card{
    flex: 1;
    border-right: 1px solid #fff;
  }
  .money{
    flex:1;
  }
  .middle-card{
    background-color: #fff;
    margin-top: 20px;
    
  }
  .middle-card a{
    color: #454545;
  }
</style>

