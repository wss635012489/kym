<template>
    <div class="box">
        <div id="chart_02"></div>
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
            var myChart = echarts.init(document.getElementById('chart_02'));
            var option = this.getOption();
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        },
        getOption(){
            return {
                grid:{
                    x:10,
                    x2:10,
                    y:10,
                    y2:10  
                },
                legend: {
                    data:['亲子家庭人群'],
                    left:'left'
                },
                xAxis: {
                    type: 'category',
                },
                yAxis: {
                    type: 'value',
                    show : false,
                    min: 2.3,
                    max: 2.9,
                    interval: 0.1,
                },
                series: [{
                    data: [2.36, 2.51, 2.57, 2.62, 2.65, 2.68, 2.74,2.82,2.86],
                    type: 'bar',
                    name:'亲子家庭人群',
                    barMaxWidth:30,
                    itemStyle:{
                        normal:{
                            color:'#fe9904',
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#333',
                                    fontSize: 12
                                }
                            }
                        }
                    },
                }]
            };
        }
    }
}
</script>
<style lang="less" scoped>
    #chart_02 {
        min-width: 400px;
        height: 220px; 
    }
    @media (max-width:992px) {
        .box {
            overflow-x: scroll;
        }
    }
</style>

