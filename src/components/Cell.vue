<template>
    <div class="item-content">
        <div class="flex-sb">
            <div class="flex-fs">
                <img :src="require('@/assets/svg/'+url + '.svg')" alt="">
                <div class="mgl4 title">{{title}}</div>
            </div>
            <van-icon name="arrow" />
        </div>
    </div>
</template>
<script>
import {Icon} from 'vant'
export default {
    name: 'titleItem',
    components:{
        [Icon.name]: Icon
    },
    data() {
        return {
            url: this.imgUrl,
            title: this.titleContent,
        }
    },
    props:{
        imgUrl: String,
        titleContent: String,
    },
}
</script>

<style scoped>
    .item-content{
        line-height: 46px;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
    }
    /* .item-content:last-child{
        border-bottom:none;
    } */
    .item-content .title{
        font-size: 14px;
        font-weight: 600;
    }
    .item-content img{
        width: 18px;
    }
</style>

