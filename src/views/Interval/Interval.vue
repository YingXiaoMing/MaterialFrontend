<template>
    <div class="view-container">
        <CustomHeader title="" />
        <div ref="product23" :style="{ width: '100%', height: '300px' }"></div>
        <div class="view-table">
            <div class="view-table-td bold">
                <div class="td-cell cell-4">日</div>
                <div class="td-cell cell-4">产量</div>
                <div class="td-cell cell-4">超欠</div>
                <div class="td-cell cell-4">外发</div>
            </div>
            <div class="view-table-td">
                <div class="td-cell cell-4">1210</div>
                <div class="td-cell cell-4">1500</div>
                <div class="td-cell cell-4 green-color">100</div>
                <div class="td-cell cell-4">1600</div>
            </div>
            <div class="view-table-td">
                <div class="td-cell cell-4">1211</div>
                <div class="td-cell cell-4">1650</div>
                <div class="td-cell cell-4 red-color">-50</div>
                <div class="td-cell cell-4">1550</div>
            </div>
            <div class="view-table-td">
                <div class="td-cell cell-4">1212</div>
                <div class="td-cell cell-4">1700</div>
                <div class="td-cell cell-4 red-color">-100</div>
                <div class="td-cell cell-4">1600</div>
            </div>
             <div class="view-table-td">
                <div class="td-cell cell-4">1213</div>
                <div class="td-cell cell-4">1800</div>
                <div class="td-cell cell-4 red-color">-200</div>
                <div class="td-cell cell-4">1650</div>
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
        const product23 = ref<any>(null)
        // 数据配置：[y轴类目名，类目值]
        

        
        const state = reactive({
            // 自定义图表的配置项和数据
            option : {
                title: {
                    text: '生铁产销分析',
                    x: 'center',
                    bottom: '0px'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(0, 255, 233,0)',
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(255, 255, 255,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 255, 233,0)',
                                    },
                                ],
                                global: false,
                            },
                        },
                    }
                },
                legend: {
                    // data: ['示范', '一级', '二级'],
                    orient: 'horizontal',   // 水平
                    //type: 'plain',          // 普通图例
                    icon: "circle",
                    top: 'top',
                    left: 'center',
                    // right: '5%',
                    // bottom: '15%',
                    //width:280,              // 宽度
                    itemGap: 2,            // 间隔
                    itemWidth: 10,          // 图形宽度。
                    itemHeight: 10,         // 图形高度。
                    borderWidth: 0,
                    textStyle: {
                        fontSize: '14px',
                        color: '#4ca9ff',
                    }
                },
                grid: {
                    top: '5%',
                    left: '10%',
                    right: '15%',
                    bottom: '15%',
                    // containLabel: true
                },
                xAxis: [
                    {
                        name: '(天)',
                        type: 'category',
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#333',
                            },
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick:{       //y轴刻度线
                        "show":false
                        },
                        boundaryGap: true,
                        axisLabel: {
                            color: '#333',
                            fontSize: 14,
                        },
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    },
                ],

                yAxis: [
                    {
                        name: '(吨)',
                        type: 'value',
                        min: 0,
                        // max: 140,
                        // splitNumber: 4,
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#333',
                            },
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#333',
                            },
                        },
                        axisLabel: {
                            margin: 2,
                            show: true,
                            textStyle: {
                                color: '#333',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        type: 'line',
                        smooth: false, //是否平滑
                        showAllSymbol: true,
                        // symbol: 'image://./static/images/guang-circle.png',
                        symbol: 'circle',
                        lineStyle: {
                            normal: {
                                color: '#1f44cd',
                            },
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'red',
                            },
                        },
                        itemStyle: {
                            color: '#00b3f4',
                            borderColor: 'red',
                            borderWidth: 3,
                        },
                        tooltip: {
                            show: false,
                        },
                        
                        data: [1760,1900,2198,1820,1410,1940,2330,1580,2320,2290],
                    },
                    {
                        type: 'line',
                        smooth: false, //是否平滑
                        showAllSymbol: true,
                        // symbol: 'image://./static/images/guang-circle.png',
                        symbol: 'circle',
                        lineStyle: {
                            normal: {
                                color: '#12e515',
                            },
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'red',
                            },
                        },
                        itemStyle: {
                            color: '#00b3f4',
                            borderColor: 'red',
                            borderWidth: 3,
                        },
                        tooltip: {
                            show: false,
                        },
                        
                        data: [1560,1600,1898,1820,1870,1940,2110,1756,1865,1900],
                    }
                ],
            }
        })


        onMounted(() => {
            drawChart();
            
        })
        const drawChart = () => {
            const Chart = echarts.init(product23.value);
            Chart.setOption(state.option);
            // Chart.resize();
            window.onresize = function() {
                Chart.resize();
            }
        }
        return {
            product23,
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
            &.cell-4 {
                width: 25%;
            }
           
        }
    }
}
</style>