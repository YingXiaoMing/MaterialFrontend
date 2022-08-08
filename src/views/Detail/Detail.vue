<template>
    <div>
        <CustomHeader title="" />
        <DetailHeader/>
        <div class="view-container">
            <div class="view-table">
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">铁次</div>
                    <div class="td-cell">重量</div>
                    <div class="td-cell">Si</div>
                    <div class="td-cell">S</div>
                    <div class="td-cell">P</div>
                    <div class="td-cell">Ti</div>
                    <div class="td-cell">R2</div>
                    <div class="td-cell ">MgO</div>
                    <div class="td-cell " >AI203</div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120101</div>
                    <div class="td-cell">50</div>
                    <div class="td-cell">0.68</div>
                    <div class="td-cell green-color">0.017</div>
                    <div class="td-cell">0.041</div>
                    <div class="td-cell"></div>
                    <div class="td-cell">1.2</div>
                    <div class="td-cell ">9.93</div>
                    <div class="td-cell" ></div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120102</div>
                    <div class="td-cell">21</div>
                    <div class="td-cell red-color">0.97</div>
                    <div class="td-cell">0.015</div>
                    <div class="td-cell">0.045</div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120103</div>
                    <div class="td-cell">49</div>
                    <div class="td-cell ">1.12</div>
                    <div class="td-cell">0.012</div>
                    <div class="td-cell green-color">0.049</div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120104</div>
                    <div class="td-cell">50</div>
                    <div class="td-cell">1.24</div>
                    <div class="td-cell red-color">0.012</div>
                    <div class="td-cell">0.049</div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120105</div>
                    <div class="td-cell red-color">51</div>
                    <div class="td-cell">1.45</div>
                    <div class="td-cell">0.012</div>
                    <div class="td-cell">0.048</div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120106</div>
                    <div class="td-cell">49</div>
                    <div class="td-cell ">1.78</div>
                    <div class="td-cell red-color">0.011</div>
                    <div class="td-cell">0.055</div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120107</div>
                    <div class="td-cell">50</div>
                    <div class="td-cell ">1.57</div>
                    <div class="td-cell">0.013</div>
                    <div class="td-cell red-color">0.053</div>
                </div>
                <div class="view-table-td bold">
                    <div class="td-cell cell-20">20120108</div>
                    <div class="td-cell">51</div>
                    <div class="td-cell green-color">1.59</div>
                    <div class="td-cell">0.011</div>
                    <div class="td-cell">0.035</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DetailHeader from './DetailHeader.vue'
</script>
<style lang="scss" scoped>
.view-table {
    width:  calc(100% - 6px);
    margin-top: 10px;
    padding: 3px;
    .view-table-td {
        height: 26px;
        line-height: 26px;
        border-bottom: 1px solid #ccc;
        width: 100%;
        &.bold {
            font-weight: bold;
        }
        .td-cell {
            float: left;
            width: 10%;
            text-align: center;
            &.cell-20 {
                width: 20%;
            }
           
        }
    }
}
</style>