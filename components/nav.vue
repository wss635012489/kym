<template>
    <div>
        <div class="pc">
            <div class="container">
                <div class="between nav-top y-center">
                    <span class="color-huang y-center"><nuxt-link to="/"><img src="~assets/img/logo.png" class="logo point"></nuxt-link><span class="bq"></span><span class="font-18">动手动脑学科学</span></span>
                    <span class="font-18 color-huang y-center blod"><img src="~assets/img/phone.png" class="phone">18080167736</span>
                </div>
            </div>
            <div class="bg-huang">
                <div class="container">
                    <div class="nav-pc">
                        <div class="row nav-item-pc">
                            <div class="col" @click="linkTo('/')">首页<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/abous')">关于我们<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/competition')">竞赛加分<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/system')">课程体系<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/teaching')">课程教具<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/administration')">管理系统<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/campus')">校区案例<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/attract')">招商加盟<div class="x-center"><span></span></div></div>
                            <div class="col" @click="linkTo('/support')">总部扶持<div class="x-center"><span></span></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile">
            <div class="pos-r">
                <div class="bg-huang">
                    <div class="top pad between y-center">
                        <img src="~assets/img/ff_logo.png" class="logo">
                        <img src="~assets/img/meun.png" class="meun_btn" @click="isShow = !isShow">
                    </div>
                </div>
                <div class="nav" v-show="isShow" id="mobileNav">
                    <ul @click.self="isShow = false">
                        <li @click="linkTo('/')">首页</li>
                        <li @click="linkTo('/abous')">关于我们</li>
                        <li @click="linkTo('/competition')">竞赛加分</li>
                        <li @click="linkTo('/system')">课程体系</li>
                        <li @click="linkTo('/teaching')">课程教具</li>
                        <li @click="linkTo('/administration')">管理系统</li>
                        <li @click="linkTo('/campus')">校区案例</li>
                        <li @click="linkTo('/attract')">招商加盟</li>
                        <li @click="linkTo('/support')">总部扶持</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    mounted(){
        var node = document.getElementById('mobileNav');
        node.style.height = window.screen.height - 44 + 'px'
    },
    methods:{
        linkTo(url){
            this.$router.push(url);
            this.isShow = false
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~assets/css/main.less';
    .pc {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 100;
        background-color: #fff;
        .nav-top {
            padding: 10px 0;
                img {
                display: inline-block;
                vertical-align:bottom;
            }
            .logo {
                width: 95px;
                margin-bottom: 3px
            }
            .phone {
                width: 24px;
                margin-right: 10px
            }
            .bq {
                width: 1px;
                height: 28px;
                display: inline-block;
                background-color: @bg_huang;
                margin-left: 10px;
                margin-right: 10px
            }
        }
        .nav-pc {
            color: #fff;
            text-align: center;
            padding-right: 10%;
            .nav-item-pc {
            >div {
                padding: 10px 0;
                position: relative;
                cursor: pointer;
                >div {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: 2px;
                    span {
                        display: none;
                        background-color: #fff;
                        width: 70px;
                        height: 2px;
                    }
                }
            }
            >div:hover {
                span {
                    display: block
                }
            }
            }
        }
    }
    .mobile {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: #fff;
        .top {
            .logo {
                width: 62px;
                height: 24px;
            }
            .meun_btn {
                width: 16px;
                height: 12px;
            }
        }
        .nav {
            position: absolute;
            left: 0;
            top: 44px;
            width: 100%;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.3);
            ul {
                width: 100%;
                li {
                    border-top: 1px solid #eee;
                    box-sizing: border-box;
                    text-align: center;
                    color: #000;
                    line-height: 40px;
                    background-color: #fff;
                }
            }
        }
    }

    @media (max-width:800px) {
        .pc {
            display: none
        }
        .mobile {
            display: block;
        }
    }
</style>