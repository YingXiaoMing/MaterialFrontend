

<template>
    <TechnicalHeader></TechnicalHeader>
    <div class="technical-view">
        <div class="technical-content">
            <div class="t-width t_header_title">参数</div>
            <div class="t-start t_header_title">计划</div>
            <div class="t-start t_header_title">实际</div>
            <div class="t-start t_header_title">月均</div>
        </div>
        <div class="technical-content">
            <div class="t-header-bold">高炉</div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">燃料比</div>
            <div class="t-start t_header_content"><span>600</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">550</span></div>
            <div class="t-start t_header_content"><span>590</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">煤比</div>
            <div class="t-start t_header_content"><span>150</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">140</span></div>
            <div class="t-start t_header_content"><span>149</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">入炉品位</div>
            <div class="t-start t_header_content"><span>57</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="green-color up_icon"/><span class="green-color">65</span></div>
            <div class="t-start t_header_content"><span>58</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">批重</div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">日料批数</div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">风温</div>
        </div>
        <div class="technical-content">
            <div class="t-header-bold">烧结</div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">烧结Tfe</div>
            <div class="t-start t_header_content"><span>57%</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="green-color up_icon"/><span class="green-color">51%</span></div>
            <div class="t-start t_header_content"><span>55%</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">综合合格率</div>
            <div class="t-start t_header_content"><span>85%</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">98%</span></div>
            <div class="t-start t_header_content"><span>58</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">固体燃耗</div>
            <div class="t-start t_header_content"><span>55</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">49</span></div>
            <div class="t-start t_header_content"><span>53</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">转鼓</div>
            <div class="t-start t_header_content"><span>76</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">78</span></div>
            <div class="t-start t_header_content"><span>79</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-header-bold">球团</div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">抗压</div>
            <div class="t-start t_header_content"><span>1800</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="green-color up_icon"/><span class="green-color">1720</span></div>
            <div class="t-start t_header_content"><span>1750</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">球团Tfe</div>
            <div class="t-start t_header_content"><span>63.50%</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">66.50%</span></div>
            <div class="t-start t_header_content"><span>64.50%</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-header-bold">白灰</div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">CaO</div>
            <div class="t-start t_header_content"><span>85%</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">88%</span></div>
            <div class="t-start t_header_content"><span>88%</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">活性度</div>
            <div class="t-start t_header_content"><span>340</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="green-color up_icon"/><span class="green-color">332</span></div>
            <div class="t-start t_header_content"><span>320</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-header-bold">铸铁</div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">铁耗</div>
            <div class="t-start t_header_content"><span>1%</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="green-color up_icon"/><span class="green-color">1.3%</span></div>
            <div class="t-start t_header_content"><span>1.4%</span><van-icon name="ellipsis" class="more"/></div>
        </div>
        <div class="technical-content">
            <div class="t-width t_header_content">铁表合格率</div>
            <div class="t-start t_header_content"><span>99.7%</span></div>
            <div class="t-start t_header_content"> <van-icon name="down" class="red-color"/><span class="red-color">3%</span></div>
            <div class="t-start t_header_content"><span>99.9%</span><van-icon name="ellipsis" class="more"/></div>
        </div>
    </div>
    <!-- <van-empty description="开发中...."></van-empty> -->
</template>
<script setup lang="ts">
import TechnicalHeader from './TechnicalHeader.vue'
</script>

<style  lang="scss" scoped>

.technical-view {
    background: #E9F3FD;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    .technical-content {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #ccc;
        height: 26px;
        line-height: 26px;
        .t-header-bold {
            margin-left: 12px;
            font-size: 14px;
            font-weight: bold;
        }
        .t_header_content {
            font-size: 13px;
            color: #636162;
            font-weight: 600;
            float: left;
            .more {
                float: right;
                right: 4px;
                line-height: 26px;;
            }
        }
        .t-start {
            width: 24%;
            text-align: left;
        }
        .t-width {
            width: 20%;
            text-align: right;
            margin-right: 8%;
            
        }
        .t_header_title {
            font-size: 14px;
            font-weight: bold;
        }
    }

}
</style>