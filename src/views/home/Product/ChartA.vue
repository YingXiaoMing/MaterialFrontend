<template>
<div>
    <div class="chart-box">
        <div ref="product1" :style="{ width: '100%', height: '100%' }"></div>
        <div>
            <van-row gutter="22" class="chart-list">
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">月计划:</div>
                        <div class="chart-content-num green-color">29000吨</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">实际:</div>
                        <div class="chart-content-num green-color">29000吨</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">超欠:</div>
                        <van-icon name="down" class="green-color"/>
                        <div class="chart-content-num green-color">-1000</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">年计划:</div>
                        <div class="chart-content-num red-color">367000吨</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">实际:</div>
                        <div class="chart-content-num red-color">366000吨</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">超欠:</div>
                        <van-icon name="down" class="red-color up_icon"/>
                        <div class="chart-content-num red-color">+1000</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">外发:</div>
                        <div class="chart-content-num">1600吨</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">月累:</div>
                        <div class="chart-content-num">24000吨</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="chart-content">
                        <div class="chart-content-title">库存:</div>
                        <div class="chart-content-num">2000吨</div>
                    </div>
                </van-col>
            </van-row>
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
        const product1 = ref<any>(null)

        const state = reactive({
            // 自定义图表的配置项和数据
            option : {
                title: {
                    text: "生铁",
                    x: 'center',
                    y: '45%',
                    textStyle:{
                        fontSize: 28,
                        fontWeight: 'bold'
                    }
                },
                series: [{
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    zoom: 1,
                    max: 2400,
                    splitNumber: 8,
                    itemStyle: {
                        color: '#E0503C',
                        shadowColor: 'rgba(0,138,255,0.45)',
                        shadowBlur: 5,
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    progress: {
                        show: false,
                        roundCap: true,
                        width: 10
                    },
                    pointer: {
                        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                        length: '60%',
                        width: 10,
                        offsetCenter: [0, '-20%']
                    },
                    axisLine: {
                        roundCap: false,
                        lineStyle: {
                            width: 20,
                            color: [
                                [0.5, '#EA232A'],
                                [1, '#01BB3E']
                            ]
                        }
                    },
                    axisTick: {
                        splitNumber: 4,
                        lineStyle: {
                            width: 2,
                            color: '#ccc',
                        }
                    },
                    splitLine: {
                        length: 12,
                        lineStyle: {
                            width: 3,
                            color: '#ccc',
                        }
                    },
                    axisLabel: {
                        distance: -52,
                        fontSize: 12
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        backgroundColor: '#ffffff00',
                        width: '60%',
                        lineHeight: 10,
                        height: 100,
                        borderRadius: 8,
                        offsetCenter: [0, '10%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return value.toFixed(0);
                        },
                        rich: {
                            value: {
                                fontSize: 20,
                                fontWeight: 'bolder',
                                color: '#08235A'
                            },
                            unit: {
                                fontSize: 10,
                                fontWeight: 'bolder',
                                color: '#08235A',
                                padding: [0, 0, -20, 10]
                            }
                        }
                    },
                    data: [{
                        value: 1600
                    }]
                }]
            }
        })


        onMounted(() => {
            drawChart();
            
        })
        const drawChart = () => {
            const Chart = echarts.init(product1.value);
            Chart.setOption(state.option);
            // Chart.resize();
            window.onresize = function() {
                Chart.resize();
            }
        }
        return {
            product1,
            drawChart,
            ...toRefs(state)
        }
    }
}
</script>
<style lang="scss" scoped>
.up_icon {
    transform: rotate(180deg);
}
.chart-list {
    margin-top: -120px;
    padding: 3px 12px;
    margin-bottom: 12px;
    .chart-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        height: 28px;
        line-height: 28px;
        .chart-content-title {
            font-size: 10px;
        }
        .chart-content-num{
            margin-left: 1px;
            font-size: 13px;
            font-weight: bold;
        }
    }
}
</style>