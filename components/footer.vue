<template>
    <div class="f-box">
        <div class="info x-center">
            <div>
                <div class="qr-code">
                    <img src="~assets/img/qr_code.png">
                    <div class="text-center font-12">开源猫官方公众号</div>
                </div>
                <div class="contact">
                    <div class="font-18">联系方式</div>
                    <div class="mt-10 tion"><img src="~assets/img/phone_f.png" class="phone">18080167736（江先生）</div>
                    <div class="tion">
                        <img src="~assets/img/address_f.png" class="address">
                        <div class="mt-5">西南区（成都）：四川省成都市高新区天府二街138号蜀都中心</div>
                        <div class="mt-5">华南区（佛山）：广东省佛山市南海区桂澜北路4号中盛国际</div>
                        <div class="mt-5">华北区（北京）：北京市朝阳区望京街10号望京SOHO</div>
                    </div>

                </div>
            </div>
        </div>
        <div class="other">
            © copyright 2017  黑盒子 版权所有 <span>蜀ICP备19013734号-1</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .f-box {
        .info {
            background-color: #5b5b5b;
            padding: 50px 15px;
            color: #fff;
            overflow: hidden;
            >div {
                width: 577px;
                >div {
                    float: left;
                }
            }
            .qr-code {
                margin-right: 46px;
                img {
                    width: 116px;
                    margin-bottom: 6px;
                    display: inline-block
                }
            }
            .contact {
                .tion {
                    position: relative;
                    padding-left: 24px;
                    img {
                         position: absolute;
                         left: 0;
                    }
                    .phone {
                        width: 14px;
                        top: 2px
                    }
                    .address {
                        width: 16px;
                        top: 6px
                    }
                    >div {
                        line-height: 1.8em
                    }
                }
                .tion:last-child {
                    padding-left: 26px
                }
            }
        }
        .other {
            font-size: 12px;
            background-color: #525252;
            padding: 15px;
            text-align: center;
            color: #999999;
            span {
                padding-left: 15px;
                font-size: 12px;
            }
        }
    }
    @media (max-width:800px) {
        .f-box {
            .info {
                padding: 30px 15px;
                .qr-code {
                    text-align: center;
                    margin-right: 0;
                    width: 100%
                }
            }
        } 
    }
</style>


