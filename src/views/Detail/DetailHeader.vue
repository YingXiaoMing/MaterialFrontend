
<script lang="ts">
import { ref, reactive } from 'vue'
import moment from 'moment';
export default {
    name: 'DetailHeader'
}
</script>

<script setup lang="ts">
    const headerDate = ref(new Date());
    const formatter = (type, val) => {
      if (type === 'year') {
        return `${val}年`;
      }
      if (type === 'month') {
        return `${val}月`;
      }
      return val;
    };
    const currentDate = ref(new Date());
    
    const show = reactive({visible: false});
    const ClickHeadedDate = function() {
        show.visible = true;    
    }
    
    const addDate = function(){
       headerDate.value = new Date(moment(headerDate.value).add(1,'days'));
    }
    const reduceDate = function(){
       headerDate.value = new Date(moment(headerDate.value).add(-1,'days'));
    }
    const confirmDate = () => {
        headerDate.value = currentDate.value;
        show.visible = false;
    };
    const cancelDate = () => {
        show.visible = false;
    }
</script>

<template>
    <van-sticky>
        <van-nav-bar>
            <template #title>
                <div class="flex-center header_container">
                    <van-icon name="arrow-left" style="color: #333" @click="reduceDate"/>
                    <span class="header_title" @click="ClickHeadedDate">日期: {{moment(headerDate).format("YYYY-MM-DD")}}</span>
                    <van-icon name="arrow" style="color: #333"  @click="addDate"/>
                </div>
            </template>
        </van-nav-bar>
    </van-sticky>
   <van-popup
    v-model:show="show.visible"
    round
    position="bottom"
    :style="{ height: '30%' }"
    >
        <van-datetime-picker
        v-model="currentDate"
        @confirm="confirmDate"
        @cancel="cancelDate"
        type="date"
        title="选择年月"
        :formatter="formatter"
        />
    </van-popup>

</template>
<style lang="scss" scoped>

.header_img {
    width: 21px;
    height: 19px;
}
.header_title {
    margin: 0 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 400;
    // margin-top: 3px;
}
.header_arrow {
    width: 10px;
}
</style>