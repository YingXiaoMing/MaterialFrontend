<template>
    <CustomHeader title="" />
    <div class="view-container">
        <div ref="product22" :style="{ width: '100%', height: '300px' }"></div>
        <div class="view-table">
            <div class="view-table-td bold">
                <div class="td-cell">厂家</div>
                <div class="td-cell">批次</div>
                <div class="td-cell">重量</div>
                <div class="td-cell">灰分</div>
                <div class="td-cell">挥发分</div>
                <div class="td-cell">S</div>
                <div class="td-cell">P</div>
                <div class="td-cell cell-9">Ti</div>
                <div class="td-cell cell-11" >固定碳C</div>
                <div class="td-cell">水份</div>
            </div>
            <div class="view-table-td">
                <div class="td-cell">大矿</div>
                <div class="td-cell">1202</div>
                <div class="td-cell">59</div>
                <div class="td-cell">0.2</div>
                <div class="td-cell">0.18</div>
                <div class="td-cell">2.3</div>
                <div class="td-cell">1</div>
                <div class="td-cell cell-9">1.1</div>
                <div class="td-cell cell-11" >10%</div>
                <div class="td-cell">15%</div>
            </div>
            <div class="view-table-td">
                <div class="td-cell">大矿</div>
                <div class="td-cell">1205</div>
                <div class="td-cell">49</div>
                <div class="td-cell">0.11</div>
                <div class="td-cell">0.19</div>
                <div class="td-cell">2.1</div>
                <div class="td-cell">3</div>
                <div class="td-cell cell-9">1.01</div>
                <div class="td-cell cell-11" >11%</div>
                <div class="td-cell">14%</div>
            </div>
            <div class="view-table-td">
                <div class="td-cell">大矿</div>
                <div class="td-cell">1204</div>
                <div class="td-cell">52</div>
                <div class="td-cell">0.31</div>
                <div class="td-cell">0.17</div>
                <div class="td-cell">2.2</div>
                <div class="td-cell">1</div>
                <div class="td-cell cell-9">2.21</div>
                <div class="td-cell cell-11" >12%</div>
                <div class="td-cell">16%</div>
            </div>
        </div>
    </div>
   
</template>

<script lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue'
import * as echarts from "echarts";

export default {
    props: {
        option: Object
    },
    setup(props) {
        const product22 = ref<any>(null)
        // 数据配置：[y轴类目名，类目值]
        const dataConfig = [
            ['本溪矿业', 330],
            ['大矿', 430],
            ['连上关', 220],
            ['富砾', 300],
            ['大北山',590],
            ['腾宇',530]
        ];

        const yData = dataConfig.map(item => item[0]);
        const seriesData = dataConfig.map(item => item[1]);
        const state = reactive({
            // 自定义图表的配置项和数据
            option : {
                title: {
                text: '焦炭12月24日进厂情况',
                left: 'center',
                top: 20
            },
            grid: {
                width: 300,
                height: 200,
                left: 'center',
                top: 70
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    show: true
                },
                axisLabel: {
                formatter(value) {
                    return value;
                }
                }
            },
            yAxis: {
                type: 'category',
                data: yData,
                inverse: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true
                }
            },
            series: [
                {
                type: 'bar',
                data: seriesData,
                itemStyle: {
                    normal: {
                    color: function(params) {
                        return '#00bb3d'
                    }
                    }
                },
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true,
                    formatter(params) {
                    return params.value + '吨';
                    }
                },
                barWidth: 10
                }
            ],
            }
        })


        onMounted(() => {
            drawChart();
            
        })
        const drawChart = () => {
            const Chart = echarts.init(product22.value);
            Chart.setOption(state.option);
            // Chart.resize();
            window.onresize = function() {
                Chart.resize();
            }
        }
        return {
            product22,
            drawChart,
            ...toRefs(state)
        }
    }
}
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
            &.cell-9 {
                width: 4%;
            }
            &.cell-11 {
                width: 16%;
            }
        }
    }
}
</style>