<template>
  <div class=" ">
    <van-row type="flex" justify="space-between" align="center" class="tabbar main-bg-color">
      <van-col span="4" class="leading">
        <van-icon v-if="showBack == true" @click="goBack" size="24px" name="arrow-left"></van-icon>  
      </van-col> 
      <van-col span="16">
        <div>{{title}}</div>  
      </van-col>
      <van-col span="4"  class="ending">
        <div style="padding:3px;" @click="onTap">{{endTitle || ''}}</div>  
      </van-col> 
    </van-row>
  </div>
</template>

<script>
import {Row, Col, Icon,} from 'vant';
export default {
  name: 'HelloWorld',
  components: {
    [Row.name] : Row,
    [Col.name] : Col,
    [Icon.name] : Icon,
  },
  props: {
    title: String,
    endTitle: String,
    showBack: {
      default: true,
      type: Boolean,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onTap() {
      this.$emit('onTap');
    }
  }
}
</script>

<style scoped>
  .tabbar{
    height: 52px;
    box-shadow: 0 0.5px #f2f2f2;
    color: #fff;
    font-size: 14px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 1000;
  }
  .leading{
    text-align: left;
    padding-left: 10px;
    
  }
  .ending{
    text-align: right;
    padding-right: 10px;
  }
</style>
