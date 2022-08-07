
<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'TechnicalHeader'
}
</script>

<script setup lang="ts">
    const visible = ref(false);
</script>

<template>
    <van-sticky>
        <van-nav-bar>
            <template #title>
                <div class="flex-center header_container">
                    <van-icon name="arrow-left" />
                    <span class="header_title">日期: 2022年08月07日</span>
                    <van-icon name="arrow" />
                </div>
            </template>
        </van-nav-bar>
    </van-sticky>
   
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