<template>
    <div class="list-builder">
        <van-pull-refresh v-model="refresh" @refresh="onRefresh">
            <van-list :immediate-check="false" v-model="loading" :finished="isFinished" :offset="100" finished-text="没有更多了" @load="onLoad">
                <slot></slot>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import {List, Cell, PullRefresh,} from 'vant'
export default {
    data() {
        return {
            refresh: this.isRefresh,
            loading: this.isLoading,
        }
    },
    watch: {
        isRefresh(val){
            this.refresh = val;
        },
        isLoading(val) {
            this.loading = val;
        }
    },
    props:{
        isLoading: {
            type: Boolean,
            default: false,
        },
        isFinished: {
            type: Boolean,
            default: false,
        },
        isRefresh: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        [List.name] : List,
        [Cell.name] : Cell,
        [PullRefresh.name] : PullRefresh,
    },
    methods: {
        onLoad() {//上拉加载
            this.$emit('onLoad');
        },
        onRefresh() {//下拉刷新
            this.$emit('onRefresh');
        }
    },

}
</script>

<style scoped>
    .list-builder{
        padding: 46px 0 54px 0;
    }
</style>
