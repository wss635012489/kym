<template>
    <div class="box">
        <div id="chart_01"></div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.$nextTick(() => {
            this.init()
        })
    },
    methods:{
        init(){
            var myChart = echarts.init(document.getElementById('chart_01'));
            var option = this.getOption();
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        },
        getOption(){
            return {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                grid:{
                  x:60,
                  x2:60,
                  y:50,
                  y2:30  
                },
                legend: {
                    data:['市场价值','增长率']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2016E','2017E','2018E','2019E','2020E'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine: {
                            lineStyle: {
                                color:'#ffc600',
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333',
                            }
                        },
                        axisTick:{     
                            show:false
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '(亿元)',
                        min: 0,
                        max: 3000,
                        interval: 500,
                        splitLine:{
                            lineStyle:{
                                color: ['#ffc600'],
                            } 
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick:{     
                            show:false
                        },
                    },
                    {
                        type: 'value',
                        name: '(增长率)',
                        min: 32.45,
                        max: 32.82,
                        interval: 0.05,
                        axisLabel: {
                            formatter: '{value} %'
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false 
                        },
                        axisTick:{     
                            show:false
                        },
                    }
                ],
                series: [
                    {
                        name:'市场价值',
                        type:'bar',
                        data:[750, 1260,1580, 2100, 2720],
                        barMaxWidth:50,
                        itemStyle:{
                            normal:{
                                color:'#fe9904'
                            }
                        },
                    },
                    {
                        name:'增长率',
                        type:'line',
                        yAxisIndex: 1,
                        data:[32.60, 32.63, 32.67, 32.73, 32.82],
                        symbol:'arrow',
                        symbolSize:10,
                        itemStyle:{
                            normal:{
                                color:'#ff4800',
                                lineStyle:{
                                    width:3,
                                    color:"#ff4800",
                                },
                            },
                        },
                    }
                ]
            };
        }
    }
}
</script>
<style lang="less" scoped>
    #chart_01 {
        height: 400px; 
        min-width: 450px;
    }
    @media (max-width:450px) {
        .box {
            overflow-x: scroll;
        }
    }
</style>

