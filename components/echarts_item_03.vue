<template>
    <div class="box">
        <div id="chart_03"></div>
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
            var myChart = echarts.init(document.getElementById('chart_03'));
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
                    formatter:'{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
                },
                legend: {
                    data:['农村居民教育支出占比','全国居民教育支出占比','城镇居民教育支出占比'],
                    top:'bottom'
                },
                grid: {
                    x:60,
                    x2:30,
                    y:10,
                    y2:50  
                },
                xAxis: {
                    type: 'category',
                    data: ['2013年','2014年','2015年','2016年','2017年'],
                    axisTick:{     
                        show:false
                    },
                },
                yAxis: {
                    type: 'value',
                    min: 9,
                    max: 12,
                    interval: 0.5,
                    axisLabel: {
                        formatter: '{value} %'
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick:{     
                        show:false
                    },
                },
                series: [
                    {
                        name:'农村居民教育支出占比',
                        type:'line',
                        data:[10.09, 10.25, 10.51, 10.56, 10.69],
                        symbol:'circle',
                        symbolSize:6,
                        itemStyle:{
                            normal:{
                                color:'#5b9bd5',
                                label: {
                                    show: true, //开启显示
                                    position: 'top', //在上方显示
                                    textStyle: { //数值样式
                                        color: '#333',
                                        fontSize: 10
                                    },
                                    formatter: '{c}%'
                                }
                            },
                        },
                    },
                    {
                        name:'全国居民教育支出占比',
                        type:'line',
                        data:[10.57, 10.60, 10.97, 11.19, 11.39],
                        symbol:'circle',
                        symbolSize:6,
                        itemStyle:{
                            normal:{
                                color:'#ec6b13',
                                label: {
                                    show: true, //开启显示
                                    position: 'top', //在上方显示
                                    textStyle: { //数值样式
                                        color: '#333',
                                        fontSize: 10
                                    },
                                    formatter: '{c}%'
                                }
                            },
                        },
                    },
                    {
                        name:'城镇居民教育支出占比',
                        type:'line',
                        data:[10.75, 10.73, 11.14, 11.43, 11.65],
                        symbol:'circle',
                        symbolSize:6,
                        itemStyle:{
                            normal:{
                                color:'#a3a3a3',
                                label: {
                                    show: true, //开启显示
                                    position: 'top', //在上方显示
                                    textStyle: { //数值样式
                                        color: '#333',
                                        fontSize: 10
                                    },
                                    formatter: '{c}%'
                                }
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
    #chart_03 {
        min-width: 500px;
        height: 220px; 
    }
    @media (max-width:1200px) {
        .box {
            overflow-x: scroll;
        }
    }
</style>
