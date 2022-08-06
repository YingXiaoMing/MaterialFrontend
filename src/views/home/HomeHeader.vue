
<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'HomeHeader'
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
                    <img class="header_img" src="/src/assets/home/header.png"/>
                    <span class="header_title">辽宁高端金属材料有限公司</span>
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
    margin-top: 3px;
}
.header_arrow {
    width: 10px;
}
</style>