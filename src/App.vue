<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-color{
  color: #f46d00
}
.main-bg-color{
  background-color: #f46d00!important;
}
.white{
  color: #fff!important;
}
.common-btn{
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.border{
  border:1px solid #ccc;
}
.borderRadius{
  border-radius: 5px;
}
.mgt10{
  margin-top: 10px;
}
.mgb10{
  margin-bottom: 10px;
}
.mgl10{
  margin-left: 10px;
}
.mgl4{
  margin-left: 4px;
}
.mgr4{
  margin-right: 4px;
}
.pdlr10{
  padding: 0 10px;
}
.flex-fs{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flex-sb{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-sa{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex-fe{
  display:flex;
  justify-content: flex-end;
  align-items: center;
}
.no-message{
  text-align: center;
  height: 100vh;
  line-height: 94vh;
  color: #ccc;
}
/** navbar 统一样式 **/
.van-nav-bar .van-icon{
  color: #fff!important;
}
.van-nav-bar .van-nav-bar__text{
  color: #fff;
}
.van-nav-bar .van-nav-bar__title{
  color: #fff;
}
.van-nav-bar__text:active{
  background-color:unset!important;
}
.svg-icon{
  width: 40px;
  height: 40px;
  fill: currentColor;
  overflow: hidden;
}

/** navbar 统一样式 **/

</style>
