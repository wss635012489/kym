<template>
    <div>
        <div>
            <img src="~assets/img/ca_banner.png" class="banner">
        </div>
        <seat curSeatName="校区案例"></seat>
        <div  class="container bg-bai">
            <div>
                <div class="c-mod c-mod_01">
                    <div class="color-huang font-18 blod text-center">校区成功案例</div>
                    <div class="y-center mt-30"><span class="sj-r"></span><span class="font-16 blod">蜀都中心校区</span></div>
                    <p class="mt-5">于2017年开办于蜀都中心写字楼，现拥有3个教室，开业2个月收回现金流，3个月实现盈亏平衡，第一年盈利20万，第二年盈利30万</p>
                    <div class="row text-center">
                        <div class="col-lg-3 col-md-6 my-border-r">
                            <div><span class="font-40 color-huang blod">3</span>次</div>
                            <div>社会实践活动</div>
                        </div>
                        <div class="col-lg-3 col-md-6 my-border-r">
                            <div><span class="font-40 color-huang blod">10</span>次</div>
                            <div>主题亲子活动</div>
                        </div>
                        <div class="col-lg-3 col-md-6 my-border-r">
                            <div><span class="font-40 color-huang blod">110</span>名</div>
                            <div>学员人数</div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div><span class="font-40 color-huang blod">200000</span>元</div>
                            <div>校区盈利</div>
                        </div>
                    </div>
                    <div class="img-box">
                        <ul>
                            <li><img src="~assets/img/xqxs_01.png" class="enlarge"></li>
                            <li><img src="~assets/img/xqxs_04.png" class="enlarge"></li>
                            <li><img src="~assets/img/xqxs_07.png" class="enlarge"></li>
                        </ul>
                        <ul>
                            <li><img src="~assets/img/xqxs_02.png" class="enlarge"></li>
                            <li><img src="~assets/img/xqxs_05.png"></li>
                            <li><img src="~assets/img/xqxs_08.png" class="enlarge"></li>
                        </ul>
                        <ul>
                            <li><img src="~assets/img/xqxs_03.png" class="enlarge"></li>
                            <li><img src="~assets/img/xqxs_10.png" class="enlarge"></li>
                        </ul>
                    </div>
                </div>
                <div class="c-mod c-mod_02 border-top">
                    <div class="color-huang font-18 blod text-center">社会实践活动</div>
                    <div class="mt-20 row">
                        <div class="col-sm-4">
                            <div>
                                <img src="~assets/img/shsj_01.png" class="enlarge">
                                <div>参观可口可乐工厂</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div>
                                <img src="~assets/img/shsj_02.png" class="enlarge">
                                <div>“梦幻仙境”实验秀</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div>
                                <img src="~assets/img/shsj_03.png" class="enlarge">
                                <div>参观极米总部</div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-40 video">
                        <video src="~static/video/video_two.mp4?vframe/png/offset/3/w/480/h/480%7CimageView2/1/w/480/h/360" controls controlsList="nodownload"></video>
                    </div>
                </div>
                <div class="c-mod c-mod_03 border-top">
                    <div class="color-huang font-18 blod text-center">学员作品展示</div>
                    <div class="mt">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div>
                                        <ul class="box">
                                            <li>
                                                <ul class="left">
                                                    <li>
                                                        <div><img src="~assets/img/xy_01.png"></div>
                                                    </li>
                                                    <li>
                                                        <div><img src="~assets/img/xy_02.png"></div>
                                                        <div><img src="~assets/img/xy_06.png"></div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="right">
                                                    <li><div><img src="~assets/img/xy_03.png"></div></li>
                                                    <li><div><img src="~assets/img/xy_04.png"></div></li>
                                                    <li><div><img src="~assets/img/xy_05.png"></div></li>
                                                    <li><div><img src="~assets/img/xy_08.png"></div></li>
                                                    <li class="w-66"><div><img src="~assets/img/xy_09.png"></div></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- 如果需要导航按钮 -->
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                    <script>
                        var mySwiper = new Swiper ('.swiper-container', {
                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                            },
                            loop:true,
                            autoplay:{
                                delay:5000
                            },
                            slidesPerView:1,
                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        }) 
                    </script>
                </div>
            </div>
        </div>
        <div class="bet"></div>
    </div>
</template>
<script>
import seat from '../components/seat.vue'
export default {
    head() {
        return {
            title:'校区案例',
        }
    },
    head: {
        link: [
            { rel: 'stylesheet', type:"text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css' }
        ],
        title:'校区案例'
    },
    components:{
        seat
    },
    mounted(){
        $(window).off("scroll")
    }
}
</script>
<style lang="less" scoped>
    @import '~assets/css/main.less';
    .banner {
        width: 100%;
        display: block
    }
    .font-40 {
        font-size: 40px
    }
    .container {
        >div {
            padding: 0 30px; 
            .c-mod {
                padding: 45px 0;
                p {
                    color: #666;
                    line-height: 1.8em;
                }
            }
            .c-mod_01 {
                .row >div {
                    margin-top: 30px;
                    img {
                        width: 100%;
                        display: block
                    }
                }
                .my-border-r {
                    border-right: 1px solid #dee2e6;
                    box-sizing: border-box;
                }
                .img-box {
                    margin-top: 50px;
                    overflow: hidden;
                    ul {
                        float: left;
                        li {
                            overflow: hidden;
                            img {
                                width: 100%;
                                display: block
                            }
                        }
                    }
                    ul:nth-child(1){
                        width: 32.4%
                    }
                    ul:nth-child(2) {
                        width: 32.75%
                    }
                    ul:nth-child(3) {
                        width: 34.8%
                    }
                }
            }
            .c-mod_02 {
                .row {
                    >div {
                        margin-top: 15px;
                        >div {
                            position: relative;
                            overflow: hidden;
                            img {
                                width: 100%;
                            }
                            div {
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                padding: 12px 0;
                                text-align: center;
                                width: 100%;
                                color: #fff;
                                background-color: rgba(0, 0, 0, 0.4)
                            }
                        }
                    }
                }
                .video {
                    background-color: #000;
                    text-align: center;
                    padding: 0 15px;
                    video {
                        width: 100%;
                        height: 430px;
                        display: inline-block;
                    }
                }
            }
            .c-mod_03 {
                .mt {
                    margin-top: 50px;
                }
                img {
                    width: 100%;
                    display: block
                }
                .swiper-slide {
                    >div {
                        margin: 0 40px
                    }
                }
                .box {
                    overflow: hidden;
                    li {
                        float: left;
                        width: 50%;
                        ul {
                            overflow: hidden;
                            li {
                                float: left;
                                >div {
                                    padding: 5px;
                                }
                            }
                        }
                        .left {
                            li:first-child {
                                width: 66.66%
                            }
                            li:last-child {
                                width: 33.34%
                            }
                        }
                        .right {
                            li {
                                width: 33.33%;
                            }
                            .w-66 {
                                width: 66.66%;
                            }
                        }
                    }
                }
                .swiper-button-prev {
                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23c1c1c1'%2F%3E%3C%2Fsvg%3E")
                }
                .swiper-button-next {
                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23c1c1c1'%2F%3E%3C%2Fsvg%3E")
                }
            }
        }
    }
    .bet {
        height: 50px;
    }
    @media (max-width: 992px){
        .container {
            >div {
                .c-mod_01 {
                    .my-border-r {
                        border-right: none;
                    }
                    .img-box {
                        margin-top: 20px
                    }
                }
            }
        }
    }
    @media (max-width:800px) {
        .container {
            >div {
                padding: 0;
                .c-mod {
                    padding: 35px 0;
                }
                .c-mod_01 {
                    .row >div {
                        margin-top: 10px;
                    }
                }
                .c-mod_02 {
                    .video {
                        margin-top: 20px;
                        video {
                            height: 60vw;
                        }
                    }
                    
                }
                .c-mod_03 {
                    .mt {
                        margin-top: 30px
                    }
                    .box {
                        li {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>


