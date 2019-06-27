<template>
    <div>
        <div>
            <img src="~assets/img/abous_banner.png" class="banner">
        </div>
        <seat curSeatName="关于我们"></seat>
        <div  class="container bg-bai">
            <div>
                <div class="a-mod a-mod-01">
                    <div class="a-mod-title font-20 blod color-huang text-center">
                        关于开源猫
                    </div>
                    <div class="introduce">
                        <div>
                            <img src="~assets/img/a_mod_01.png">
                        </div>
                        <div>
                            <div class="font-16 blod">
                                开源猫——动手动脑学科学
                            </div>
                            <p>
                                开源猫，致力于为中国培养100万个小小发明家。开源猫品牌创立于2016年，专注4-12岁儿童科创教育品牌。我们拥有全球领先的科创教具及课程研发团队。我们秉承“动手动脑学科学”的教学理念，通过培养孩子机械，电子，编程等多维度能力，让每一个孩子都能在快乐中学习知识和技能，让每一个孩子都能享受源自创造的喜悦和成就感，让每一个孩子去改变去创造未来的科技生活。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="a-mod a-mod-02">
                    <div class="a-mod-title font-20 blod color-huang text-center border-top pad-b-0">
                        品牌理念
                    </div>
                    <div class="text-center">
                        <img src="~assets/img/a_mod_02_xx.png">
                    </div>
                </div>
                <div class="a-mod a-mod-03">
                    <div class="a-mod-title font-20 blod color-huang text-center border-top">
                        资质认证
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div>
                                <img src="~assets/img/zz_01.png" class="enlarge">
                                <div>
                                    中国机器人教育联盟理事会员
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div>
                                <img src="~assets/img/zz_02.png" class="enlarge">
                                <div>
                                    ROBOC国际机器人授权测评点
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div>
                                <img src="~assets/img/zz_03.png" class="enlarge">
                                <div>中国人工智能产业联盟会员联盟</div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <img src="~assets/img/zz_04.png" class="enlarge">
                                <div>
                                    四川省创业大赛二等奖
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <img src="~assets/img/zz_05.png" class="enlarge">
                                <div>
                                    川藏股权交易中心挂牌企业
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <img src="~assets/img/zz_06.png" class="enlarge">
                                <div>
                                    广东机器人协会理事
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <img src="~assets/img/zz_07.png" class="enlarge">
                                <div>
                                    广东省应急产业协会
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="a-mod a-mod-04">
                    <div class="a-mod-title font-20 blod color-huang text-center border-top">
                        联系我们
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div id="mapBox">

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="info">
                                <div class="font-18 blod ">成都黑盒子科技有限公司</div>
                                <div class="font-18 blod mt-20">全国热线：18080167736</div>
                                <div class="mt-30 color-6 y-center"><img src="~assets/img/lxwm_01.png">联系电话：18080167736（江先生）</div>
                                <div class="mt-20 color-6 y-center"><img src="~assets/img/lxwm_02.png">总部地址：四川省成都市高新区天府二街138号蜀都中心</div>
                                <div class="mt-20 color-6 y-center"><img src="~assets/img/lxwm_03.png">官方网站：www.kymao.cn</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <my-from></my-from>
                </div>
            </div>
        </div>
        <div class="bet"></div>
    </div>
</template>
<script>
import seat from '../components/seat.vue'
import myFrom from '../components/myFrom.vue'
export default {
    head() {
        return {
            title:'关于我们',
        }
    },
    components:{
        seat,
        myFrom
    },
    mounted(){
        this.$nextTick(() =>{
            $(window).off("scroll")
            setTimeout(() => {
                var map = new BMap.Map("mapBox");          // 创建地图实例  
                var point = new BMap.Point(104.07304,30.557963);  // 创建点坐标  
                map.centerAndZoom(point, 18);  
                var marker = new BMap.Marker(point);        // 创建标注    
                map.addOverlay(marker); 
                map.addControl(new BMap.NavigationControl());  
                var opt = {
                    width:0,
                    height:0,
                    offset:{
                        width:-5,
                        height:-10
                    }
                }
                var infoWindow = new BMap.InfoWindow('<div class="text-center" style="line-height:55px">成都黑盒子科技有限公司</div>',opt);  // 创建信息窗口对象    
                map.openInfoWindow(infoWindow, point);      // 打开信息窗口
                marker.addEventListener("click", function(){    
                    map.openInfoWindow(infoWindow, point);   
                });
                map.enableAutoResize();
            },500);
        })
    }
}
</script>
<style lang="less" scoped>
    @import '~assets/css/main.less';
    .banner {
        width: 100%;
        display: block
    }
    .container {
        >div {
            padding: 0 15px; 
        }
    }
    .a-mod {
        padding-bottom: 50px;
        .a-mod-title {
            padding: 35px
        }
    }
    .a-mod-01 {
        .introduce {
            overflow: hidden;
            >div:first-child {
                float: left;
                width: 390px;
                img {
                    width: 100%;;
                    display: block
                }
            }
            >div:last-child {
                padding-left: 420px;
                margin-top: 10px;
                p {
                    color: #666;
                    margin-top: 10px;
                    line-height: 1.9em;
                }
            }
        }
    }
    .a-mod-02 {
        img {
            width: 75%;
            display: inline-block
        }
    }
    .a-mod-03 {
        .a-mod-title {
            padding-bottom: 10px;
        }
        .col-md-4,.col-md-3 {
            >div {
                border: 1px solid @huangg;
                box-sizing: border-box;
                margin-top: 25px; 
                overflow: hidden;
                position: relative;
                padding-bottom: 30px;
                img {
                    width: 100%;
                    display: block
                }
                >div  {
                    background-color: @bg_huang;
                    color: #fff;
                    text-align: center;
                    padding: 10px 15px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1
                }
            }
        }
    }
    .a-mod-04 {
        .info {
            padding-left: 30px;
            margin-top: 15px;
            img {
                width: 20px;
                margin-right: 15px;
            }
        }
    }
    
    .bet {
        height: 50px;
    }
    #mapBox {
        height: 260px;
    }
    @media (max-width:800px) {
        .container {
            >div {
                padding: 0
            }
        }
        .a-mod {
            padding-bottom: 30px;
        }
        .a-mod-01 {
            .introduce {
                >div:first-child {
                    float: initial;
                    width: 100%;
                }
                >div:last-child {
                    padding: 0;
                    margin-top: 20px;
                    text-align: center;
                    p {
                        text-align: left
                    }
                }
            }
        }
        .a-mod-02 {
            img {
                width: 100%;
            }
        }
        .a-mod-04 {
            .info {
                margin-top: 20px;
                padding-left: 0
            }
        }
    }
</style>


